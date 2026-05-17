import { Link } from "@tanstack/react-router";

export const NotFound = () => {
  return (
    <div className="min-h-100 bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Иконка/иллюстрация */}
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full">
          <span className="text-4xl">😞</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
          404
        </h1>

        {/* Подзаголовок */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Страница не найдена
        </h2>

        {/* Описание */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Извините, запрошенная страница не существует или была перемещена.<br />
          Проверьте правильность URL или вернитесь на главную страницу.
        </p>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
              hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            ← На главную
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg
              hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
          >
            Назад в браузере
          </button>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8 text-sm text-gray-500">
          Если вы считаете, что это ошибка, пожалуйста, <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
            свяжитесь с поддержкой
          </a>.
        </div>
      </div>
    </div>
  );
}