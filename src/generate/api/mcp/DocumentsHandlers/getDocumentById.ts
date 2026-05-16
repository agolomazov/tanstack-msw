import fetch from "@kubb/plugin-client/clients/axios";
import type { ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type {
  GetDocumentByIdQueryResponse,
  GetDocumentByIdPathParams,
  GetDocumentById400,
  GetDocumentById401,
  GetDocumentById403,
  GetDocumentById404,
  GetDocumentById500,
} from "../../types/get-document-by-id.ts";

/**
 * @description Получение категории документов по ID и краткого списка документов
 * @summary Получение категории документов по ID
 * {@link /v1/documents/:documentId}
 */
export async function getDocumentByIdHandler({
  documentId,
}: {
  documentId: GetDocumentByIdPathParams["documentId"];
}): Promise<Promise<CallToolResult>> {
  const res = await fetch<
    GetDocumentByIdQueryResponse,
    ResponseErrorConfig<
      | GetDocumentById400
      | GetDocumentById401
      | GetDocumentById403
      | GetDocumentById404
      | GetDocumentById500
    >,
    unknown
  >({
    method: "GET",
    url: `/v1/documents/${documentId}`,
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
