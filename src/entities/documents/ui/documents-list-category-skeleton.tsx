import type { FC } from "react";

interface Props {
  count?: number;
}

export const DocumentListCategorySkeleton: FC<Props> = ({ count = 3 }) => {
  const skeletonItems = Array.from({ length: count }, (_, index) => index);

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="h-6 bg-gray-300 rounded mb-4 w-3/4 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        

        {skeletonItems.map((index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm animate-pulse overflow-hidden"
          >
            <div className="p-4">
              {/* Заголовок-заглушка */}
              <div className="h-6 bg-gray-300 rounded mb-4 w-3/4 animate-pulse"></div>

              {/* Блок с иконкой и количеством документов */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* Заглушка для иконки папки */}
                  <div className="w-5 h-5 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
                  {/* Заглушка для текста с количеством документов */}
                  <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
                </div>
                {/* Заглушка для иконки стрелки */}
                <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Футер с ID-заглушкой */}
            <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
              <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}