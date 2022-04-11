import { Fragment, useRef, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { MenuIcon, XIcon, ExclamationIcon } from '@heroicons/react/outline'
import Modal from '../modal/modal'


const navigation = [
  { name: 'Sobre a Solux', href: '#' },
  { name: 'Clientes', href: '/clients' },
  { name: 'Erp', href: '/erp' }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
 
  return (
    <Disclosure as="nav" className="bg-white rounded-md z-10 fixed top-1.5">
      { ({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/ }
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  { open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  ) }
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                    alt="Logo Solux Creative"
                  />
                  </a>
                  <a href="/">
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                    alt="Logo Solux Creative"
                  />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex pt-3 space-x-4">
                    { navigation.map((item) => (
                      <a
                        key={ item.name }
                        href={ item.href }
                        className={ classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        ) }
                        aria-current={ item.current ? 'page' : undefined }
                      >
                        { item.name }
                      </a>
                    )) }
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  onClick={Modal}
                  className="bg-gradient-to-r from-indigo-500  to-teal-500 p-3 rounded-md text-white hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Fala com um consultor</span>
                  Fale com um consultor
                </button>
               </div>
            </div>   
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-4 pb-3 space-y-1">
              { navigation.map((item) => (
                <Disclosure.Button
                  key={ item.name }
                  as="a"
                  href={ item.href }
                  className={ classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  ) }
                  aria-current={ item.current ? 'page' : undefined }
                >
                  { item.name }
                </Disclosure.Button>
              )) }
            </div>
          </Disclosure.Panel>
        </>
      ) }
    </Disclosure>
  );


      
}
