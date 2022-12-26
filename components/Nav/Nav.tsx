import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Lojas Virtuais (e-Commerce)', href: '/ecommerce', current: false },
  { name: 'Clientes', href: '/clients', current: false },
  { name: 'Revenda', href: '/revenda', current: false },
  // { name: 'Sistemas', href: '/erp', current: false  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
                      <img
                        className="flex justify-center items-center relative right-5 lg:hidden h-20 w-auto"
                        src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                        alt="Solux Creative"
                      />
                    </a>
                    <a href="/">
                      <img
                        className="hidden lg:block h-24 w-auto"
                        src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                        alt="Solux Creative"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex relative top-6 space-x-4 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? ' bg-gray-900 text-white' : ' text-gray-900 hover:bg-gradient-to-tr from-violet-500 to-cyan-600 hover:text-white',
                            'px-3 py-2 mt-1 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"}
                    className=" hidden lg:block bg-gradient-to-r from-sky-600 to-green-500 p-3 shadow-lg shadow-sky-500/50 rounded-lg  text-white hover:brightness-125 focus:outline-none focus:shadow-outline"
                  >
                    Crie a sua loja virtual
                    <span className="sr-only">Crie a sua loja virtual</span>
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
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );



}
