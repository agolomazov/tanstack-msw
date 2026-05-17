import { getDocumentCategories, getDocumentsByCategoryId, getDocumentById } from '@entities/documents';

export const handlers = [
  getDocumentCategories(),
  getDocumentsByCategoryId(),
  getDocumentById()
]