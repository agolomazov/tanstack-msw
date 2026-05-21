import { Link } from '@tanstack/react-router';
import { type FC } from 'react';
import { m } from '../../../paraglide/messages';

interface Props {
  id: string;
  title: string;
  countDocuments: number;
}

export const DocumentCategoryCard: FC<Props> = ({ id, title, countDocuments }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-4">
        {/* Заголовок категории с ссылкой */}
        <h3 className="text-lg font-semibold mb-2">
          <Link
            to='/documents/category/$categoryId'
            params={{ categoryId: id }}
            className="text-gray-900 hover:text-blue-600 transition-colors duration-200 truncate block"
            title={title}
          >
            {title}
          </Link>
        </h3>

        {/* Информация о количестве документов */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-blue-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m-6-8h6M3 12l9-9 9 9-9 9-9-9z"
              />
            </svg>
            <span className="text-sm text-gray-600">
              {m.documents_count({count: countDocuments})}
            </span>
          </div>

          {/* Иконка стрелки для перехода */}
          <Link
            to='/documents/category/$categoryId'
            params={{ categoryId: id }}
            className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors duration-200"
            aria-label={`Перейти к категории ${title}`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Декоративная полоса с ID категории (в футере карточки) */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
        <span className="text-xs font-mono text-gray-500 truncate">
          ID: {id.substring(0, 8)}...
        </span>
      </div>
    </div>
  );
};
