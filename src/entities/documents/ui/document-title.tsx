import type { DocumentBlockTitleV1 } from "@api/types";
import clsx from "clsx";
import { createElement, type FC } from "react";

interface Props {
  header: DocumentBlockTitleV1;
}

export const DocumentTitle: FC<Props> = ({ header: {
  level,
  value
} }) => {
  return createElement(`h${level}`, {
    className: clsx({
      'text-3xl font-bold': level === '1',
      'text-2xl font-semibold': level === '2',
      'text-xl font-semibold': level === '3',
      'text-lg font-semibold': level === '4',
      'text-base font-semibold': level === '5',
      'text-base font-normal': level === '6',
    })
  }, value)
}