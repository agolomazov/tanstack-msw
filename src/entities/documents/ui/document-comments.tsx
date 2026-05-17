import { useGetCommentsByDocumentId } from "@api-queries/comments/use-get-comments-by-document-id";
import type { FC } from "react";
import { CommentsListSkeleton } from "./document-comments-skeleton";
import { DocumentCommentsError } from "./document-comments-error";
import { DocumentCommentList } from "./document-comments-list";

interface Props {
  documentId: number;
}

export const DocumentComments: FC<Props> = ({ documentId }) => {
  const { isLoading, isError, data: comments } = useGetCommentsByDocumentId(documentId);

  if (isError) {
    return (
      <DocumentCommentsError 
        onRetry={() => location.reload()}
      />
    );
  }

  if (isLoading) {
    return <CommentsListSkeleton />
  }

  return (
    <DocumentCommentList comments={comments || []} />
  );
}