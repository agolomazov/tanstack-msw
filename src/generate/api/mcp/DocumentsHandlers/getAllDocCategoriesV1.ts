import fetch from "@kubb/plugin-client/clients/axios";
import type { ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type {
  GetAllDocCategoriesV1QueryResponse,
  GetAllDocCategoriesV1400,
  GetAllDocCategoriesV1401,
  GetAllDocCategoriesV1403,
  GetAllDocCategoriesV1500,
} from "../../types/get-all-doc-categories-v1.ts";

/**
 * @description Получение списка всех категорий документов
 * @summary Список категорий документов
 * {@link /v1/documents/categories}
 */
export async function getAllDocCategoriesV1Handler(): Promise<
  Promise<CallToolResult>
> {
  const res = await fetch<
    GetAllDocCategoriesV1QueryResponse,
    ResponseErrorConfig<
      | GetAllDocCategoriesV1400
      | GetAllDocCategoriesV1401
      | GetAllDocCategoriesV1403
      | GetAllDocCategoriesV1500
    >,
    unknown
  >({
    method: "GET",
    url: `/v1/documents/categories`,
    baseURL: `https://example.api.com`,
  });
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(res.data),
      },
    ],
    structuredContent: { data: res.data },
  };
}
