import type { FC } from "react";

interface Props {
  count?: number;
}

export const CommentsListSkeleton: FC<Props> = ({ count = 3 }) => {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-white p-4 rounded-lg border border-gray-200"
        >
          {/* Строка с аватаром и информацией об авторе */}
          <div className="flex items-start gap-3">
            {/* Аватар — круглый скелет */}
            <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0" />

            {/* Информация об авторе и дата */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  {/* Имя и фамилия — два прямоугольника разной ширины */}
                  <div className="h-4 w-32 bg-gray-200 rounded mb-1" />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
                {/* Дата — короткий прямоугольник */}
                <div className="h-3 w-20 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* Текст комментария — несколько строк */}
          <div className="mt-3 space-y-2">
            <div className="h-3 w-full bg-gray-200 rounded" />
            <div className="h-3 w-4/5 bg-gray-200 rounded" />
            <div className="h-3 w-3/4 bg-gray-200 rounded" />
          </div>

          {/* Вложенные комментарии (дети) — упрощённый скелет */}
          <div className="ml-8 mt-4 space-y-4">
            {/* Один вложенный комментарий */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full shrink-0" />
              <div className="flex-1">
                <div className="h-3 w-28 bg-gray-200 rounded mb-2" />
                <div className="space-y-1">
                  <div className="h-2 w-full bg-gray-200 rounded" />
                  <div className="h-2 w-3/4 bg-gray-200 rounded" />
                </div>
              </div>
            </div>

            {/* Ещё один вложенный комментарий (для глубины) */}
            <div className="ml-6 flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full shrink-0" />
              <div className="flex-1">
                <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
                <div className="h-2 w-2/3 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
