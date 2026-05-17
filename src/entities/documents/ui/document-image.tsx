import type { DocumentBlockImageV1 } from "@api/types";
import type { FC } from "react";

interface Props {
  image: DocumentBlockImageV1;
}

export const DocumentImage: FC<Props> = ({ image: { settings: { src, title, height, width } } }) => {
  return (
    <div className="mb-6">
      <img
        src={src}
        alt={title || 'Изображение'}
        className="w-full rounded-lg shadow-md mx-auto"
        style={{
          maxWidth: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
          objectFit: 'cover'
        }}
      />
      {title && (
        <p className="text-sm text-gray-500 text-center mt-3">
          {title}
        </p>
      )}
    </div>
  );
}