import type { DocumentMetaDtoV1 } from "@api/types";
import type { FC } from "react";
import { DocumentType } from "./document-status";
import { Link } from "@tanstack/react-router";

import { FaRegCommentDots } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  document: DocumentMetaDtoV1;
}

export const DocumentCard: FC<Props> = ({ document: { createdBy, title, type, createdAt, updatedAt, comments, id  } }) => {
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
      <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
        <FaRegCommentDots />
        <span>{comments} комментариев</span>
      </div>

      {/* Кнопка для перехода на страницу документа */}
      <Link
        to="/documents/$id"
        params={{ id: String(id) }}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors gap-x-2"
        aria-label={`Открыть документ "${title}"`}
      >
        <span>Открыть документ</span>
        <FiExternalLink />
      </Link>

    </div>
  );
}