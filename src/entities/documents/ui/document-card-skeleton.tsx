export const DocumentCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-4 animate-pulse">
      {/* Аватар и имя автора */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3" />
        <div className="h-4 w-24 bg-gray-200 rounded" />
      </div>

      {/* Заголовок документа */}
      <div className="h-5 w-full bg-gray-200 rounded mb-3" />

      {/* Тип документа */}
      <div className="h-3 w-16 bg-gray-200 rounded mb-4" />

      {/* Дата создания */}
      <div className="h-3 w-20 bg-gray-200 rounded mb-4" />

      {/* Количество комментариев */}
      <div className="h-3 w-12 bg-gray-200 rounded" />
    </div>
  );
};