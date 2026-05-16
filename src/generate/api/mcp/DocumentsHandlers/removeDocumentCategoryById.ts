import fetch from "@kubb/plugin-client/clients/axios";
import type { ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type {
  RemoveDocumentCategoryByIdMutationResponse,
  RemoveDocumentCategoryByIdPathParams,
  RemoveDocumentCategoryById400,
  RemoveDocumentCategoryById401,
  RemoveDocumentCategoryById403,
  RemoveDocumentCategoryById404,
  RemoveDocumentCategoryById500,
} from "../../types/remove-document-category-by-id.ts";

/**
 * @description Удаление категории документов по ID
 * @summary Удаление категории документов
 * {@link /v1/documents/categories/:categoryId}
 */
export async function removeDocumentCategoryByIdHandler({
  categoryId,
}: {
  categoryId: RemoveDocumentCategoryByIdPathParams["categoryId"];
}): Promise<Promise<CallToolResult>> {
  const res = await fetch<
    RemoveDocumentCategoryByIdMutationResponse,
    ResponseErrorConfig<
      | RemoveDocumentCategoryById400
      | RemoveDocumentCategoryById401
      | RemoveDocumentCategoryById403
      | RemoveDocumentCategoryById404
      | RemoveDocumentCategoryById500
    >,
    unknown
  >({
    method: "DELETE",
    url: `/v1/documents/categories/${categoryId}`,
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
