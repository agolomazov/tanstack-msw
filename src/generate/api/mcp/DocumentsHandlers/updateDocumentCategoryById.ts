import fetch from "@kubb/plugin-client/clients/axios";
import type { ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type {
  UpdateDocumentCategoryByIdMutationRequest,
  UpdateDocumentCategoryByIdMutationResponse,
  UpdateDocumentCategoryByIdPathParams,
  UpdateDocumentCategoryById400,
  UpdateDocumentCategoryById401,
  UpdateDocumentCategoryById403,
  UpdateDocumentCategoryById404,
  UpdateDocumentCategoryById500,
} from "../../types/update-document-category-by-id.ts";

/**
 * @description Обновление категории документа по ID
 * @summary Обновление категории документа
 * {@link /v1/documents/categories/:categoryId}
 */
export async function updateDocumentCategoryByIdHandler({
  categoryId,
  data,
}: {
  categoryId: UpdateDocumentCategoryByIdPathParams["categoryId"];
  data: UpdateDocumentCategoryByIdMutationRequest;
}): Promise<Promise<CallToolResult>> {
  const requestData = data;

  const res = await fetch<
    UpdateDocumentCategoryByIdMutationResponse,
    ResponseErrorConfig<
      | UpdateDocumentCategoryById400
      | UpdateDocumentCategoryById401
      | UpdateDocumentCategoryById403
      | UpdateDocumentCategoryById404
      | UpdateDocumentCategoryById500
    >,
    UpdateDocumentCategoryByIdMutationRequest
  >({
    method: "PUT",
    url: `/v1/documents/categories/${categoryId}`,
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
