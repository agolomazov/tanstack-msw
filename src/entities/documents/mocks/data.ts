import type { DocumentCategoryListResponseV1, DocumentCategoryResponseV1 } from "src/generate/api";

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

export const documentsCategoryResponseMocks: DocumentCategoryResponseV1 = {
  "category": {
    "id": "f8a3e1c9-7b2d-4c6e-9a5f-1d8e2c7a4b3f",
    "title": "Кадровые документы",
    "countDocuments": 15
  },
  "pageInfo": {
    "empty": false,
    "first": true,
    "last": false,
    "number": 0,
    "numberOfElements": 10,
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
    "totalElements": 47,
    "totalPages": 5
  },
  "documents": [
    {
      "id": 101,
      "title": "Трудовой договор №123-2026",
      "createdAt": "2026-05-10T09:15:30.250Z",
      "updatedAt": "2026-05-10T09:15:30.250Z",
      "type": "PRIVATE",
      "comments": 2,
      "createdBy": {
        "id": 12,
        "firstName": "Ольга",
        "lastName": "Петрова",
        "avatarUrl": "https://i.pravatar.cc/150"
      }
    },
    {
      "id": 102,
      "title": "Приказ о приёме на работу №45",
      "createdAt": "2026-05-08T14:20:15.180Z",
      "updatedAt": "2026-05-08T14:20:15.180Z",
      "type": "PUBLIC",
      "comments": 0,
      "createdBy": {
        "id": 25,
        "firstName": "Алексей",
        "lastName": "Сидоров",
        "avatarUrl": "https://i.pravatar.cc/150"
      }
    },
    {
      "id": 103,
      "title": "Заявление на отпуск — Иванов А.В.",
      "createdAt": "2026-05-05T11:45:00.320Z",
      "updatedAt": "2026-05-05T11:45:00.320Z",
      "type": "PUBLIC",
      "comments": 1,
      "createdBy": {
        "id": 33,
        "firstName": "Мария",
        "lastName": "Козлова",
        "avatarUrl": "https://i.pravatar.cc/150"
      }
    },
    {
      "id": 104,
      "title": "Соглашение о неразглашении (NDA)",
      "createdAt": "2026-05-03T16:30:45.100Z",
      "updatedAt": "2026-05-03T16:30:45.100Z",
      "type": "PRIVATE",
      "comments": 4,
      "createdBy": {
        "id": 7,
        "firstName": "Виктор",
        "lastName": "Морозов",
        "avatarUrl": "https://i.pravatar.cc/150"
      }
    },
    {
      "id": 105,
      "title": "Должностная инструкция менеджера",
      "createdAt": "2026-04-30T13:10:20.400Z",
      "updatedAt": "2026-04-30T13:10:20.400Z",
      "type": "PUBLIC",
      "comments": 0,
      "createdBy": {
        "id": 18,
        "firstName": "Татьяна",
        "lastName": "Волкова",
        "avatarUrl": "https://i.pravatar.cc/150"
      }
    }
  ]
}