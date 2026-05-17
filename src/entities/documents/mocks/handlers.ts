import { http, HttpResponse, delay } from 'msw';
import { categoryListResponseMocks, documentsCategoryResponseMocks } from './data';

export const getDocumentCategories = () => {
  return http.get('/v1/documents/categories', async () => {
    await delay(250);
    return HttpResponse.json(categoryListResponseMocks, { status: 200 });
  })
}

export const getDocumentsByCategoryId = () => {
  return http.get('/v1/documents/categories/:categoryId', async () => {
    await delay(200);
    return HttpResponse.json(documentsCategoryResponseMocks, { status: 200 });
  })
}