import type { DocumentMetaDtoV1 } from "@api/types";
import type { FC } from "react";
import { DocumentType } from "./document-status";

interface Props {
  document: DocumentMetaDtoV1;
}

export const DocumentCard: FC<Props> = ({ document: { createdBy, title, type, createdAt, updatedAt, comments  } }) => {
  return (
    <div
      className="bg-white rounded-lg shadow border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
    >
      {/* Аватар и имя автора */}
      <div className="flex items-center mb-4">
        <img
          src={createdBy?.avatarUrl || 'https://i.pravatar.cc/150'}
          alt={`${createdBy?.firstName} ${createdBy?.lastName}`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-medium text-gray-900 text-sm">
            {createdBy?.firstName} {createdBy?.lastName}
          </p>
        </div>
      </div>

      {/* Заголовок документа */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
        {title}
      </h3>

      {/* Тип документа */}
      <div className="mb-4">
        <DocumentType type={type} />
      </div>

      {/* Дата создания */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
        <span>Создан: {new Date(createdAt).toLocaleDateString('ru-RU')}</span>
        {updatedAt && (<span>Обновлено: {new Date(updatedAt).toLocaleDateString('ru-RU')}</span>)}
      </div>

      {/* Количество комментариев */}
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01"
          />
        </svg>
        <span>{comments} комментариев</span>
      </div>
    </div>
  );
}