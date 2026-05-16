import fetch from "@kubb/plugin-client/clients/axios";
import type { ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type {
  GetCommentsByDocumentIdQueryResponse,
  GetCommentsByDocumentIdPathParams,
  GetCommentsByDocumentId400,
  GetCommentsByDocumentId401,
  GetCommentsByDocumentId403,
  GetCommentsByDocumentId404,
  GetCommentsByDocumentId500,
} from "../../types/get-comments-by-document-id.ts";

/**
 * @description Получение комментариев к документу
 * @summary Комментарии документа
 * {@link /v1/documents/:documentId/comments}
 */
export async function getCommentsByDocumentIdHandler({
  documentId,
}: {
  documentId: GetCommentsByDocumentIdPathParams["documentId"];
}): Promise<Promise<CallToolResult>> {
  const res = await fetch<
    GetCommentsByDocumentIdQueryResponse,
    ResponseErrorConfig<
      | GetCommentsByDocumentId400
      | GetCommentsByDocumentId401
      | GetCommentsByDocumentId403
      | GetCommentsByDocumentId404
      | GetCommentsByDocumentId500
    >,
    unknown
  >({
    method: "GET",
    url: `/v1/documents/${documentId}/comments`,
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
