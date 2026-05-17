import { DocumentCardSkeleton } from "./document-card-skeleton";

export const CategoryDocumentsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Мета-информация о категории */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Название категории */}
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />

          {/* Количество документов */}
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Список документов — карточки */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Карточка документа 1 */}
        <DocumentCardSkeleton />
        {/* Карточка документа 2 */}
        <DocumentCardSkeleton />
        {/* Карточка документа 3 */}
        <DocumentCardSkeleton />
      </div>
    </div>
  );
};