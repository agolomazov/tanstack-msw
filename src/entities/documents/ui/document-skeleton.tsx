export const DocumentSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Скелетон заголовка документа */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
        <div className="animate-pulse">
          <div className="h-9 w-3/4 bg-gray-200 rounded mb-4" />
          <div className="h-5 w-1/2 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Скелетон мета‑информации о создателе */}
      <div className="flex items-center gap-4 mb-6 animate-pulse">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div>
          <div className="h-4 w-48 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Скелетон блоков контента */}
      <div className="space-y-8 animate-pulse">
        {/* Блок заголовка (header) */}
        <div>
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-3" />
        </div>

        {/* Блок параграфа (paragraph) */}
        <div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>

        {/* Блок изображения (image) */}
        <div>
          <div className="aspect-video bg-gray-200 rounded-lg mb-3" />
          <div className="h-3 w-1/4 bg-gray-200 rounded" />
        </div>

        {/* Ещё один блок заголовка */}
        <div>
          <div className="h-6 w-1/4 bg-gray-200 rounded mb-3" />
        </div>

        {/* Ещё один блок параграфа */}
        <div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-4/5 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-3/5 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Скелетон информации о документе внизу */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-pulse">
        <div className="flex justify-between items-center">
          <div>
            <div className="h-3 w-32 bg-gray-200 rounded mb-1" />
            <div className="h-3 w-28 bg-gray-200 rounded" />
          </div>
          <div>
            <div className="h-3 w-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
