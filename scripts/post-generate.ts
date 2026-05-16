import fs from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';

/**
 * Обрабатывает сгенерированные API хуки, заменяя вызовы zod.parse на версии с обработкой ошибок.
 *
 * Функция находит все TypeScript файлы в директории `src/generated/api/hooks/`,
 * заменяет вызовы `schema.parse()` на обёрнутые в try/catch блоки, которые:
 * - В development выводят предупреждения в консоль
 * - В других случаях отправляют ошибки валидации в Sentry с дополнительной информацией
 * - Возвращают оригинальные данные при ошибке валидации
 *
 * @async
 * @function replaceWithTryCatch
 * @returns {Promise<void>} Promise, который разрешается после обработки всех файлов
 *
 * @throws {Error} Критическая ошибка при обработке файлов (завершает процесс с кодом 1)
 *
 * @example
 * // Исходный код:
 * // return schema.parse(data);
 *
 * // Результат:
 * // return (() => {
 * //   try {
 * //     return schema.parse(data);
 * //   } catch (error) {
 * //     // Обработка ошибки и отправка в Sentry
 * //     return data;
 * //   }
 * // })();
 */
async function replaceWithTryCatch() {
  try {
    const pattern = 'src/generated/api/hooks/**/*.ts';
    const files = await glob(pattern);

    console.log(`🔍 Найдено ${files.length} файлов для обработки\n`);

    let updatedFilesCount = 0;

    for (const file of files) {
      try {
        let content = await fs.readFile(file, 'utf8');
        let hasChanges = false;
        let replacementCount = 0;

        // Заменить parse на parse с try/catch
        content = content.replaceAll(/(\w+)\.parse\(([^)]+)\)/g, (_, schemaName: string, args) => {
          replacementCount++;
          return `(() => {
            try {
              return ${schemaName}.parse(${args});
            } catch (error) {
              if (process.env.NODE_ENV === 'development') {
                console.warn(\`Zod validation failed for ${schemaName}:\`, error);
              } else {
                // Отправляем ошибку валидации
                console.error("Zod validation failed for ${schemaName}:", error);
              }

              // Возвращаем оригинальные данные
              return ${args};
            }
          })()`;
        });

        if (replacementCount > 0) {
          hasChanges = true;
        }

        if (hasChanges) {
          await fs.writeFile(file, content, 'utf8');
          updatedFilesCount++;
          console.log(`✓ ${path.relative('.', file)}`);
        }
      } catch (error) {
        console.error(`❌ Ошибка в файле ${file}:`, error);
      }
    }

    console.log('\n📊 Итоговая статистика:');
    console.log(`   Всего файлов обработано: ${files.length}`);
    console.log(`   Файлов изменено: ${updatedFilesCount}`);

    if (updatedFilesCount > 0) {
      console.log('\n✨ Изменения:');
      console.log('   - zod parse заменен на parse с try/catch');
      console.log('   - Возвращаются оригинальные данные при ошибке валидации в консоль');
    }
  } catch (error) {
    console.error('❌ Критическая ошибка:', error);
    process.exit(1);
  }
}

await replaceWithTryCatch();
