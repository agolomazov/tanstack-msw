import { Link } from "@tanstack/react-router"

import { Route as home } from '../../app/routes/_auth/index'
import { Route as about } from '../../app/routes/_auth/about'
import { Route as services } from '../../app/routes/_auth/services'
import { Route as contacts } from '../../app/routes/_auth/contacts'
import { Route as documents } from '../../app/routes/_auth/documents/index'

import { m } from '../../paraglide/messages'
import { LangSwitcher } from "./lang-switcher"

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

            <div className="flex flex-row gap-x-6">
              <nav className="hidden md:flex space-x-8">
              {/* <span>{ m.example_message({ username: 'Anton Golomazov' }) }</span> */}
                <Link to={home.to} search={{ query: 'q' }} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  {m["navigation.home"]}
                </Link>
                <Link to={about.to} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  {m["navigation.about"]}
                </Link>
                <Link to={services.to} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  {m["navigation.service"]}
                </Link>
                <Link to={contacts.to} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  {m["navigation.contacts"]}
                </Link>
                <Link to={documents.to} search={{ sort: 'newest' }} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  {m["navigation.documents"]}
                </Link>
              </nav>

              <LangSwitcher />
            </div>            
          </div>
        </div>
      </header>
    </>
  )
}