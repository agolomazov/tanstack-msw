import type { DocumentCategoryListResponseV1 } from "src/generate/api";

export const categoryListResponseMocks: DocumentCategoryListResponseV1 = {
  "empty": false,
  "first": true,
  "last": false,
  "number": 0,
  "numberOfElements": 5,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 10,
    "paged": true,
    "unpaged": false,
    "sort": {
      "empty": false,
      "sorted": true,
      "unsorted": false
    }
  },
  "size": 10,
  "sort": {
    "empty": false,
    "sorted": true,
    "unsorted": false
  },
  "totalElements": 23,
  "totalPages": 3,
  "content": [
    {
      "id": "123915d6-4513-4157-bd53-c4c2e5caeb7b",
      "title": "На подпись",
      "countDocuments": 8
    },
    {
      "id": "f96fa3ce-58ae-44af-bb08-ab152ac3a228",
      "title": "Архивные",
      "countDocuments": 2
    },
    {
      "id": "4ca96af1-24ae-4b7b-b156-7ea87f6c909d",
      "title": "Финансовые отчёты",
      "countDocuments": 5
    },
    {
      "id": "bf528191-7a80-43d8-ad23-c7fb7cab72ec",
      "title": "Внутренние распоряжения",
      "countDocuments": 6
    },
    {
      "id": "5fdd641e-e133-4f43-b639-2d170c6c4a55",
      "title": "Проекты",
      "countDocuments": 2
    }
  ]
}
