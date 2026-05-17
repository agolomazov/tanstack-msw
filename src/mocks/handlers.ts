import { getDocumentCategories, getDocumentsByCategoryId, getDocumentById, getDocumentComments } from '@entities/documents';

export const handlers = [
  getDocumentCategories(),
  getDocumentsByCategoryId(),
  getDocumentById(),
  getDocumentComments()
]