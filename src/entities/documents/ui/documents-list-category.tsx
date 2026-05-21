import type { DocumentCategoryListResponseV1 } from '@api/types';
import type { FC } from 'react';

import { DocumentCategoryCard } from './document-category-card';
import { m } from '../../../paraglide/messages';

interface Props {
  content?: DocumentCategoryListResponseV1['content'];
}

export const DocumentListCategory: FC<Props> = ({ content }) => {
  if (!content || content.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 text-lg">Категории документов не найдены</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        {m['pages.documents.list_title']()}
      </h2>
      
      {/* Сетка с 3 карточками в строке */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((category) => (
          <DocumentCategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            countDocuments={category.countDocuments}
          />
        ))}
      </div>
    </div>
  );
}