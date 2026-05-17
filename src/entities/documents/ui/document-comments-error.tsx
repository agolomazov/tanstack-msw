import type { FC } from "react";
import { IoReloadOutline } from "react-icons/io5";

interface Props {
  message?: string;
  onRetry?: () => void;
  retryButtonText?: string;
}

export const DocumentCommentsError: FC<Props> = ({
  onRetry,
  message = 'Произошла ошибка при загрузке комментариев',
  retryButtonText = 'Повторить попытку'
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border border-gray-200 min-h-50">
      {/* Иконка ошибки */}
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-8 h-8 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {/* Текст ошибки */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
        Произошла ошибка
      </h3>
      <p className="text-gray-600 text-center max-w-md mb-6">
        {message}
      </p>

      {/* Кнопка повторной попытки */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="
            px-6 py-3 bg-blue-600 text-white rounded-lg
            hover:bg-blue-700 focus:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            transition-colors duration-200 cursor-pointer
            flex items-center gap-2
          "
        >
          <IoReloadOutline />
          {retryButtonText}
        </button>
      )}
    </div>
  );
};
