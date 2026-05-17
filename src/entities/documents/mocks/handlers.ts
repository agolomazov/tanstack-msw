import { http, HttpResponse, delay } from 'msw';
import { categoryListResponseMocks } from './data';

export const getDocumentCategories = () => {
  return http.get('/v1/documents/categories', async () => {
    await delay(250);
    return HttpResponse.json(categoryListResponseMocks, { status: 200 });
  })
}