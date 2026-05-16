import fetch from "@kubb/plugin-client/clients/axios";
import type { ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type {
  GetDocumentsCategoryByIdQueryResponse,
  GetDocumentsCategoryByIdPathParams,
  GetDocumentsCategoryByIdQueryParams,
  GetDocumentsCategoryById400,
  GetDocumentsCategoryById401,
  GetDocumentsCategoryById403,
  GetDocumentsCategoryById404,
  GetDocumentsCategoryById500,
} from "../../types/get-documents-category-by-id.ts";

/**
 * @description Получение категории документов по ID и краткого списка документов
 * @summary Получение категории документов по ID
 * {@link /v1/documents/categories/:categoryId}
 */
export async function getDocumentsCategoryByIdHandler({
  categoryId,
  params,
}: {
  categoryId: GetDocumentsCategoryByIdPathParams["categoryId"];
  params?: GetDocumentsCategoryByIdQueryParams;
}): Promise<Promise<CallToolResult>> {
  const res = await fetch<
    GetDocumentsCategoryByIdQueryResponse,
    ResponseErrorConfig<
      | GetDocumentsCategoryById400
      | GetDocumentsCategoryById401
      | GetDocumentsCategoryById403
      | GetDocumentsCategoryById404
      | GetDocumentsCategoryById500
    >,
    unknown
  >({
    method: "GET",
    url: `/v1/documents/categories/${categoryId}`,
    baseURL: `https://example.api.com`,
    params,
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
