import { Link } from "@tanstack/react-router";
import type { FC } from "react";

interface Props {
  message?: string;
  onRetry?: () => void;
  statusCode?: number | null;
}

export const ErrorLoadingState: FC<Props> = ({
  message = '',
  onRetry,
  statusCode = null
}) => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Иконка ошибки */}
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Заголовок ошибки */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ошибка загрузки
        </h2>

        {/* Код статуса, если есть */}
        {statusCode && (
          <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Код ошибки: {statusCode}
          </div>
        )}

        {/* Описание ошибки */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {message}
        </p>

        {/* Рекомендации */}
        <div className="text-left bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">Рекомендации:</h3>
          <ul className="text-yellow-700 text-sm space-y-2">
            <li>• Проверьте подключение к интернету</li>
            <li>• Обновите страницу</li>
            <li>• Попробуйте позже</li>
            <li>• Обратитесь в поддержку, если проблема сохраняется</li>
          </ul>
        </div>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Повторить загрузку
            </button>
          )}
          <Link
            to="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-center"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};