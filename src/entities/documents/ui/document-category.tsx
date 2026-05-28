import type { DocumentCategoryV1, DocumentMetaDtoV1 } from "@api/types";
import type { FC } from "react";

import { DocumentCard } from './document-card';
import { m } from "../../../paraglide/messages";

interface Props {
  category: DocumentCategoryV1;
  documents: DocumentMetaDtoV1[];
}

export const DocumentCategory: FC<Props> = ({ category, documents }) => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Мета-информация о категории */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Название категории */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {category?.title || 'Без названия'}
            </h1>
            <p className="text-gray-600 mt-1">
              Категория документов
            </p>
          </div>

          {/* Количество документов */}
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <span className="text-blue-600 font-medium">
              {m.documents_count({ count: category.countDocuments })}
            </span>
          </div>
        </div>
      </div>

      {/* Список документов — карточки */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents?.length > 0 ? (
          documents.map((doc) => (
            <DocumentCard document={doc} key={doc.id} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">
              {m.no_category_documents()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}