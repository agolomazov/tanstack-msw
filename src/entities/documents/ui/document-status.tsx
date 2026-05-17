import type { DocumentTypeEnumV1 } from "@api/types";
import type { FC } from "react";
import { clsx } from 'clsx';

interface Props {
  type: DocumentTypeEnumV1;
}

export const DocumentType: FC<Props> = ({ type }) => {
  return (
    <span className={clsx('inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium', {
      'bg-green-100 text-green-800 border border-green-200': type === 'PUBLIC',
      'bg-red-100 text-red-800 border border-red-200': type === 'PRIVATE',
    })}>
      {type === 'PUBLIC' ? 'Публичный' : 'Приватный'}
    </span>
  );
}