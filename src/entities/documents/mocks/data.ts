import { getFakeFile } from "@shared/libs/fakes";
import type {
  CommentsListDtoV1,
  DocumentCategoryListResponseV1,
  DocumentCategoryResponseV1,
  DocumentResponseV1,
} from "src/generate/api";

export const categoryListResponseMocks: DocumentCategoryListResponseV1 = {
  empty: false,
  first: true,
  last: false,
  number: 0,
  numberOfElements: 5,
  pageable: {
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    paged: true,
    unpaged: false,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
  },
  size: 10,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  totalElements: 23,
  totalPages: 3,
  content: [
    {
      id: "123915d6-4513-4157-bd53-c4c2e5caeb7b",
      title: "На подпись",
      countDocuments: 8,
    },
    {
      id: "f96fa3ce-58ae-44af-bb08-ab152ac3a228",
      title: "Архивные",
      countDocuments: 2,
    },
    {
      id: "4ca96af1-24ae-4b7b-b156-7ea87f6c909d",
      title: "Финансовые отчёты",
      countDocuments: 5,
    },
    {
      id: "bf528191-7a80-43d8-ad23-c7fb7cab72ec",
      title: "Внутренние распоряжения",
      countDocuments: 6,
    },
    {
      id: "5fdd641e-e133-4f43-b639-2d170c6c4a55",
      title: "Проекты",
      countDocuments: 2,
    },
  ],
};

export const documentsCategoryResponseMocks: DocumentCategoryResponseV1 = {
  category: {
    id: "f8a3e1c9-7b2d-4c6e-9a5f-1d8e2c7a4b3f",
    title: "Кадровые документы",
    countDocuments: 15,
  },
  pageInfo: {
    empty: false,
    first: true,
    last: false,
    number: 0,
    numberOfElements: 10,
    pageable: {
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      paged: true,
      unpaged: false,
      sort: {
        empty: false,
        sorted: true,
        unsorted: false,
      },
    },
    size: 10,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    totalElements: 47,
    totalPages: 5,
  },
  documents: [
    {
      id: 101,
      title: "Трудовой договор №123-2026",
      createdAt: "2026-05-10T09:15:30.250Z",
      updatedAt: "2026-05-10T09:15:30.250Z",
      type: "PRIVATE",
      comments: 2,
      createdBy: {
        id: 12,
        firstName: "Ольга",
        lastName: "Петрова",
        avatarUrl: getFakeFile('/avatars/man.png'),
      },
    },
    {
      id: 102,
      title: "Приказ о приёме на работу №45",
      createdAt: "2026-05-08T14:20:15.180Z",
      updatedAt: "2026-05-08T14:20:15.180Z",
      type: "PUBLIC",
      comments: 0,
      createdBy: {
        id: 25,
        firstName: "Алексей",
        lastName: "Сидоров",
        avatarUrl: getFakeFile('/avatars/woman.png'),
      },
    },
    {
      id: 103,
      title: "Заявление на отпуск — Иванов А.В.",
      createdAt: "2026-05-05T11:45:00.320Z",
      updatedAt: "2026-05-05T11:45:00.320Z",
      type: "PUBLIC",
      comments: 1,
      createdBy: {
        id: 33,
        firstName: "Мария",
        lastName: "Козлова",
        avatarUrl: getFakeFile('/avatars/panda.png'),
      },
    },
    {
      id: 104,
      title: "Соглашение о неразглашении (NDA)",
      createdAt: "2026-05-03T16:30:45.100Z",
      updatedAt: "2026-05-03T16:30:45.100Z",
      type: "PRIVATE",
      comments: 4,
      createdBy: {
        id: 7,
        firstName: "Виктор",
        lastName: "Морозов",
        avatarUrl: getFakeFile('/avatars/boy.png'),
      },
    },
    {
      id: 105,
      title: "Должностная инструкция менеджера",
      createdAt: "2026-04-30T13:10:20.400Z",
      updatedAt: "2026-04-30T13:10:20.400Z",
      type: "PUBLIC",
      comments: 0,
      createdBy: {
        id: 18,
        firstName: "Татьяна",
        lastName: "Волкова",
        avatarUrl: getFakeFile('/avatars/girl.png'),
      },
    },
  ],
};

export const documentMock: DocumentResponseV1 = {
  id: 12345,
  title: "Годовой отчёт компании за 2026 год",
  description:
    "Полный финансовый отчёт с анализом ключевых показателей и стратегическими планами на следующий год.",
  createdAt: "2026-04-15T10:30:00.000Z",
  updatedAt: "2026-05-10T14:22:15.300Z",
  comments: 8,
  createdBy: {
    id: 789,
    firstName: "Елена",
    lastName: "Васильева",
    avatarUrl: getFakeFile('/avatars/woman.png'),
  },
  type: "PRIVATE",
  content: [
    {
      id: 1,
      type: "header",
      level: "1",
      position: 1,
      value: "Годовой отчёт компании за 2026 год",
    },
    {
      id: 2,
      type: "paragraph",
      position: 2,
      value:
        "В данном отчёте представлены основные финансовые показатели компании за прошедший год, анализ рыночной позиции и планы развития на следующий период.",
    },
    {
      id: 3,
      type: "header",
      level: "2",
      position: 3,
      value: "Финансовые результаты",
    },
    {
      id: 4,
      type: "paragraph",
      position: 4,
      value:
        "Выручка компании за 2026 год составила 45 000 000 рублей, что на 15 % выше показателя предыдущего года. Основные драйверы роста — расширение линейки продуктов и выход на новые рынки.",
    },
    {
      id: 5,
      type: "image",
      position: 5,
      settings: {
        title: "График роста выручки",
        src: getFakeFile('/documents/graphic-1.jpg'),
        width: 800,
        height: 400,
      },
    },
    {
      id: 6,
      type: "header",
      level: "2",
      position: 6,
      value: "Ключевые достижения",
    },
    {
      id: 7,
      type: "paragraph",
      position: 7,
      value:
        "За отчётный период компания успешно реализовала три крупных проекта, привлекла 5 новых стратегических партнёров и расширила штат сотрудников на 20 %.",
    },
  ],
  category: {
    id: "f8a3e1c9-7b2d-4c6e-9a5f-1d8e2c7a4b3f",
    title: "Финансовые отчёты",
    countDocuments: 15,
  },
};

export const commentsList: CommentsListDtoV1 = [
  {
    id: 1001,
    text: "Отличный отчёт, спасибо за детализацию финансовых показателей!",
    createdAt: "2026-05-10T14:30:22.150Z",
    author: {
      id: 789,
      firstName: "Елена",
      lastName: "Васильева",
      avatarUrl: getFakeFile('/avatars/girl.png'),
    },
    children: [
      {
        id: 1101,
        text: "Полностью согласен! Особенно впечатлили графики роста выручки.",
        createdAt: "2026-05-10T15:15:45.200Z",
        author: {
          id: 951,
          firstName: "Алексей",
          lastName: "Смирнов",
          avatarUrl: getFakeFile('/avatars/boy.png'),
        },
        children: [],
      },
    ],
  },
  {
    id: 1002,
    text: "Есть вопрос по разделу 'Ключевые достижения'. Как именно измерялся рост штата на 20%?",
    createdAt: "2026-05-11T09:15:33.400Z",
    author: {
      id: 823,
      firstName: "Мария",
      lastName: "Иванова",
      avatarUrl: getFakeFile('/avatars/chicken.png'),
    },
    children: [],
  },
  {
    id: 1003,
    text: "Предлагаю добавить прогноз на 2027 год в следующий отчёт.",
    createdAt: "2026-05-12T11:45:10.100Z",
    author: {
      id: 951,
      firstName: "Алексей",
      lastName: "Смирнов",
      avatarUrl: getFakeFile('/avatars/bear.png'),
    },
    children: [
      {
        id: 1102,
        text: "Хорошая идея! Можно сделать отдельный раздел с прогнозами и сценариями.",
        createdAt: "2026-05-12T12:30:25.300Z",
        author: {
          id: 789,
          firstName: "Елена",
          lastName: "Васильева",
          avatarUrl: getFakeFile('/avatars/meerkat.png'),
        },
        children: [
          {
            id: 1201,
            text: "Поддерживаю! Это поможет лучше планировать бюджет.",
            createdAt: "2026-05-12T13:15:40.150Z",
            author: {
              id: 823,
              firstName: "Мария",
              lastName: "Иванова",
              avatarUrl: getFakeFile('/avatars/rabbit.png'),
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 1004,
    text: "В разделе финансовых результатов не хватает разбивки по кварталам. Было бы полезно увидеть динамику по каждому кварталу 2026 года.",
    createdAt: "2026-05-13T16:20:55.400Z",
    author: {
      id: 642,
      firstName: "Дмитрий",
      lastName: "Петров",
      avatarUrl: getFakeFile('/avatars/bear.png'),
    },
    children: [],
  },
  {
    id: 1005,
    text: "Спасибо за обратную связь! Учту ваши замечания при подготовке следующего отчёта.",
    createdAt: "2026-05-14T08:45:30.200Z",
    author: {
      id: 789,
      firstName: "Елена",
      lastName: "Васильева",
      avatarUrl: getFakeFile('/avatars/panda.png'),
    },
    children: [],
  },
];
