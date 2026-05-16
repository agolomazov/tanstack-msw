import { Link } from "@tanstack/react-router"

import { Route as home } from '../../app/routes/_auth/index'
import { Route as about } from '../../app/routes/_auth/about'
import { Route as services } from '../../app/routes/_auth/services'
import { Route as contacts } from '../../app/routes/_auth/contacts'
import { Route as documents } from '../../app/routes/_auth/documents/index'

export const Header = () => {
  return (
    <>
      {/* Шапка (Header) */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Логотип */}
            <div className="shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Мой сайт</h1>
            </div>

            {/* Навигационное меню */}
            <nav className="hidden md:flex space-x-8">
              <Link to={home.to} search={{ query: 'q' }} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Главная</Link>
              <Link to={about.to} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">О нас</Link>
              <Link to={services.to} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Услуги</Link>
              <Link to={contacts.to} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Контакты</Link>
              <Link to={documents.to} search={{ sort: 'newest' }} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Документы</Link>
            </nav>

            {/* Мобильное меню (иконка) */}
            <button className="md:hidden text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}