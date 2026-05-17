import type { CommentsListDtoV1 } from "@api/types";
import type { FC } from "react";
import { DocumentCommentItem } from "./document-comment-item";

interface Props {
  comments: CommentsListDtoV1;
}

export const DocumentCommentList: FC<Props> = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <DocumentCommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
          Пока нет комментариев
        </div>
      )}
    </div>
  );
}