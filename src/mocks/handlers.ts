import { getDocumentCategories, getDocumentsByCategoryId } from '@entities/documents';

export const handlers = [
  getDocumentCategories(),
  getDocumentsByCategoryId()
]