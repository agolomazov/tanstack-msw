import type { CommentDtoV1 } from "@api/types";
import { formatDate } from "@shared/libs/date";
import type { FC } from "react";

interface Props {
  depth?: number;
  comment: CommentDtoV1;
}

export const DocumentCommentItem: FC<Props> = ({ depth = 0, comment }) => {
  const indent = depth * 16; // отступ в пикселях для каждого уровня 
  
  return (
    <div
      key={comment.id}
      style={{ marginLeft: `${indent}px` }}
      className="mb-4"
    >
      {/* Карточка комментария */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow duration-200">
        {/* Шапка комментария: аватар и информация об авторе */}
        <div className="flex items-start gap-3 mb-3">
          {/* Аватар */}
          <div className="shrink-0">
            {comment.author.avatarUrl ? (
              <img
                src={comment.author.avatarUrl}
                alt={`${comment.author.firstName} ${comment.author.lastName}`}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {comment.author.firstName?.[0] || 'U'}
                </span>
              </div>
            )}
          </div>

          {/* Информация об авторе и дата */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">
                  {comment.author.firstName} {comment.author.lastName}
                </p>
                <p className="text-xs text-gray-500">
                  Автор комментария
                </p>
              </div>
              <time className="text-xs text-gray-500 whitespace-nowrap">
                { formatDate(comment.createdAt) }
              </time>
            </div>
          </div>
        </div>

        {/* Текст комментария */}
        <div className="text-gray-700 leading-relaxed">
          {comment.text}
        </div>
      </div>

      {/* Рекурсивный рендеринг вложенных комментариев */}
      {comment.children && comment.children.length > 0 && (
        <div className="ml-4 border-l-2 border-gray-100 pl-4">
          {comment.children.map((childComment) => (
            <DocumentCommentItem
              key={childComment.id}
              comment={childComment}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>    
  );
}