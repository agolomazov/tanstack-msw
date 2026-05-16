import { defineConfig } from 'kubb'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginReactQuery } from '@kubb/plugin-react-query'
import { pluginZod } from '@kubb/plugin-zod';
import { pluginFaker } from '@kubb/plugin-faker';
import { pluginRedoc } from '@kubb/plugin-redoc';
import { pluginMcp } from '@kubb/plugin-mcp';

// Функция для преобразования имен в kebab-case
function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Универсальный трансформер для имен файлов
function createFileNameTransformer() {
  return (name: string, type?: string) => {
    // Только для файлов применяем kebab-case
    if (type === 'file') {
      return toKebabCase(name);
    }
    return name;
  };
}

export default defineConfig({
  root: '.',
  input: { path: './specs/documents.v1.yaml' },
  output: { path: './src/generate/api', clean: true, barelType: false },
  plugins: [
    pluginOas({
      generators: [],
      group: {
        type: 'tag',
        name({ group }) {
          return `${group}Service`;
        }
      }
    }),
    pluginTs({
      output: {
        path: './types'
      },
      transformers: {
        name: createFileNameTransformer(),
      },
      dateType: 'string',
      enumType: 'literal',
      optionalType: 'questionToken',
      arrayType: 'array',
      integerType: 'number',
      emptySchemaType: 'unknown',
      paramsCasing: 'camelcase',
      unknownType: 'any',
    }),
    pluginReactQuery({
        client: {
          importPath: '@shared/api/client',
          baseURL: '/',
        },
        group: {
          type: 'tag',
          name({ group }) {
            return group.toLocaleLowerCase();
          },
        },
        transformers: {
          name: createFileNameTransformer(),
        },
        parser: 'zod',
        suspense: false,
        include: [
          {
            type: 'method',
            pattern: 'get',
          },
        ],
        output: {
          path: './hooks/queries',
          barrelType: false,
          banner: '// @ts-nocheck\n',
        },
        override: [
          {
            type: 'contentType',
            pattern: 'multipart/form-data',
            options: {
              parser: 'client',
            },
          },
          // Переопределение для операций получения файлов (blob)
          // Используем клиентский парсер вместо Zod, т.к. операция возвращает blob, а zod схема ответа содержит File
        
        ],
      }),
      pluginReactQuery({
        client: {
          importPath: '@shared/api/client',
          baseURL: '/',
        },
        group: {
          type: 'tag',
          name({ group }) {
            return group.toLocaleLowerCase();
          },
        },
        transformers: {
          name: createFileNameTransformer(),
        },
        parser: 'zod',
        suspense: false,
        mutation: {
          methods: ['post', 'put', 'patch', 'delete'],
        },
        exclude: [
          {
            type: 'method',
            pattern: 'get',
          },
        ],
        output: {
          path: './hooks/mutations',
          barrelType: false,
          banner: '// @ts-nocheck',
        },
        override: [
          {
            type: 'contentType',
            pattern: 'multipart/form-data',
            options: {
              parser: 'client',
            },
          },
        ],
      }),
    pluginZod({
      output: {
        path: './zod',
        barrelType: false,
      },
      group: {
        type: 'tag',
        name({ group }) {
          return `${group.toLocaleLowerCase()}-schema`;
        },
      },
      transformers: {
        name: createFileNameTransformer(),
      },
      dateType: 'stringOffset',
      unknownType: 'unknown',
      importPath: 'zod',
      coercion: {
        strings: false,
        numbers: false,
        dates: false,
      },
      inferred: true,
      operations: true,
      version: '4',
    }),
    pluginFaker({
      output: {
        path: './mocks',
        barrelType: false
      },
      dateType: 'string',
      integerType: 'number',
      seed: [100],
      paramsCasing: 'camelcase',
      regexGenerator: 'faker',
      unknownType: 'any',
      group: {
        type: 'tag',
        name({ group }) {
          return `${group.toLocaleLowerCase()}-mock`;
        },
      },
      dateParser: 'faker',
      emptySchemaType: 'void',
    }),
    pluginRedoc({
      output: { path: 'docs.html' },
    }),
    pluginMcp({
      output: { path: 'mcp', barrelType: false },
      client: {
        baseURL: 'https://example.api.com',
      },
      group: {
        type: 'tag',
        name: ({ group }) => `${group}Handlers`,
      },
    })
  ],
})