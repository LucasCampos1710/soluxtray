"use client"

import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from './NavLink';
import Image from 'next/image';

export default function Nav() {
  return (
    <header>
      <Disclosure as="nav" className="bg-zinc-100 z-10 font-inter">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-20">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon aria-hidden="true" />
                    ) : (
                      <Bars3Icon aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/">
                      <Image
                        className="flex justify-center items-center relative right-5 lg:hidden h-20 w-auto"
                        src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                        alt="Solux Creative"
                        height={800}
                        width={2000}
                      />
                    </a>
                    <a href="/">
                      <Image
                        className="hidden lg:block h-24 w-auto"
                        src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                        alt="Solux Creative"
                        height={800}
                        width={2000}
                      />
                    </a>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex relative top-6 space-x-4 ">
                      <NavLink href="/ecommerce">Lojas Virtuais (e-Commerce)</NavLink>
                      <NavLink href="/clientes">Clientes</NavLink>
                      <NavLink href="/revenda">Revenda</NavLink>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"}
                    className=" hidden lg:block bg-gradient-to-r from-sky-600 to-green-500 p-3 shadow-lg shadow-sky-500/50 rounded-lg  text-white hover:brightness-125 focus:outline-none focus:shadow-outline"
                  >
                    Fale com um consultor
                    <span className="sr-only">Fale com um consultor</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"}
                    className="block lg:hidden bg-gradient-to-tr from-sky-600 to-green-500 p-3 rounded-lg text-white hover:brightness-125 focus:outline-none focus:shadow-outline"
                  >
                    Contato
                    <span className="sr-only">Falar com um consultor</span>
                  </button>


                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                
                  <Disclosure.Button>
                      <NavLink href="/ecommerce">Lojas Virtuais (e-Commerce)</NavLink>
                      <NavLink href="/clientes">Clientes</NavLink>
                      <NavLink href="/revenda">Revenda</NavLink>
                  </Disclosure.Button>
                
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );



}
