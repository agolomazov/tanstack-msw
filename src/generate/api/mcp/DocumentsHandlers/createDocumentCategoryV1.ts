import fetch from "@kubb/plugin-client/clients/axios";
import type { ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type {
  CreateDocumentCategoryV1MutationRequest,
  CreateDocumentCategoryV1MutationResponse,
  CreateDocumentCategoryV1400,
  CreateDocumentCategoryV1401,
  CreateDocumentCategoryV1403,
  CreateDocumentCategoryV1500,
} from "../../types/create-document-category-v1.ts";

/**
 * @description Создание новой категории документов
 * @summary Создание категории документов
 * {@link /v1/documents/categories}
 */
export async function createDocumentCategoryV1Handler({
  data,
}: {
  data: CreateDocumentCategoryV1MutationRequest;
}): Promise<Promise<CallToolResult>> {
  const requestData = data;

  const res = await fetch<
    CreateDocumentCategoryV1MutationResponse,
    ResponseErrorConfig<
      | CreateDocumentCategoryV1400
      | CreateDocumentCategoryV1401
      | CreateDocumentCategoryV1403
      | CreateDocumentCategoryV1500
    >,
    CreateDocumentCategoryV1MutationRequest
  >({
    method: "POST",
    url: `/v1/documents/categories`,
    baseURL: `https://example.api.com`,
    data: requestData,
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
