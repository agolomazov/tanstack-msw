import type { DocumentBlockParagraphV1 } from "@api/types";
import type { FC } from "react";

interface Props {
  paragraph: DocumentBlockParagraphV1;
}

export const DocumentParagraph: FC<Props> = ({ paragraph: { value } }) => {
  return (
    <p className="text-gray-700 leading-relaxed mb-6">
      {value}
    </p>
  );
}