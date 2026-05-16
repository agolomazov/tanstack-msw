import { Link } from "@tanstack/react-router";

const HomePage = () => {
  return (
    <>
      {/* Заголовок страницы */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Добро пожаловать!</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Это пример страницы с использованием React и Tailwind CSS. Здесь вы можете разместить любой контент.
        </p>
        <p>
          <Link to="/" className="text-blue-500 underline hover:no-underline">Сброс настроек</Link>
        </p>
      </div>

      {/* Карточки контента */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Карточка 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-linear-to-r from-blue-400 to-purple-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Раздел 1</h3>
            <p className="text-gray-600 mb-4">
              Краткое описание раздела 1. Здесь может быть любая информация, которая важна для пользователя.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-linear-to-r from-green-400 to-teal-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Раздел 2</h3>
            <p className="text-gray-600 mb-4">
              Краткое описание раздела 2. Добавьте сюда информацию, которая будет полезна посетителям.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-linear-to-r from-orange-400 to-red-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Раздел 3</h3>
            <p className="text-gray-600 mb-4">
              Краткое описание раздела 3. Используйте этот блок для демонстрации ключевых возможностей.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>
      </div>

      {/* Дополнительный контент */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Дополнительная информация</h3>
        <div className="space-y-4 text-gray-700">
          <p>Здесь вы можете разместить текст, таблицы, формы или другие элементы интерфейса.</p>
          <p>Tailwind CSS позволяет легко настраивать стили с помощью утилитарных классов.</p>
        </div>
      </div>
    </>
  );
}

export default HomePage