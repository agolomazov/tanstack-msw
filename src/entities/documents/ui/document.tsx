import type { FC } from "react";

import type { DocumentBlockImageV1, DocumentBlockParagraphV1, DocumentBlockTitleV1, DocumentResponseV1 } from "@api/types";
import { formatDate } from '@shared/libs/date';

import { DocumentParagraph } from './document-paragraph';
import { DocumentTitle } from './document-title';
import { DocumentImage } from './document-image';
import { DocumentType } from "./document-status";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

interface Props {
  document: DocumentResponseV1;
}

const renderContentBlock = (block: DocumentBlockTitleV1 | DocumentBlockParagraphV1 | DocumentBlockImageV1) => {
  switch (block.type) {
    case 'header':
      return <DocumentTitle key={block.id} header={block} />

    case 'paragraph':
      return <DocumentParagraph key={block.id} paragraph={block} />

    case 'image':
      return <DocumentImage key={block.id} image={block} />

    default:
      return null;
  }
};

export const Document: FC<Props> = ({
  document: {
    id,
    title,
    description,
    createdAt,
    updatedAt,
    createdBy: { avatarUrl, firstName, lastName },
    comments,
    type,
    content,
    category
  }
}) => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Заголовок документа */}
      <header className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {/* Информация о категории */}
        <div className="flex items-center gap-2 mb-4">
          <Link to="/documents/category/$categoryId" params={{ categoryId: category.id }} className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {category.title}
          </Link>
          <DocumentType type={type} />
        </div>
      </header>

      {/* Мета-информация о создателе и датах */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        {/* Аватар и имя автора */}
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl || 'https://via.placeholder.com/48'}
            alt={`${firstName} ${lastName}`}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <p className="font-semibold text-gray-900">
              {firstName} {lastName}
            </p>
            <p className="text-sm text-gray-500">Автор документа</p>
          </div>
        </div>

        {/* Даты создания и обновления */}
        <div className="grow text-sm text-gray-600">
          <p>Создан: {formatDate(createdAt)}</p>
          {updatedAt && (<p>Обновлено: {formatDate(updatedAt)}</p>)}
        </div>

        {/* Количество комментариев */}
        <div className="flex items-center gap-2 text-sm">
          <FaRegCommentDots />
          <span className="font-medium text-gray-700">{comments} комментариев</span>
        </div>
      </div>

      {/* Основной контент документа */}
      <main className="bg-white rounded-lg shadow p-8 mb-8 border border-gray-200">
        {content.length > 0 ? (
          content.map(renderContentBlock)
        ) : (
          <p className="text-gray-500 italic">Документ не содержит контента</p>
        )}
      </main>

      {/* Дополнительная информация внизу */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        ID документа: {id || 'N/A'}
      </footer>
    </div>
  );
}