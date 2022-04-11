import Nav from "../components/Nav/Nav"
import SeloTray from "../components/seloTray"
import Footer from '../components/Footer/Footer'

import { Fragment, useRef, useState } from 'react'
import { Transition } from '@headlessui/react'


const callouts = [
  {
    id: 2,
    name: 'Erp Assistencia Tecnica',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_4_tjacce.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Tribo Surf craida pela Solux Creative',
  },
  {
    id: 3,
    name: 'Erp Balcão',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 4,
    name: 'Erp Blister',
    description: 'Sistema para automatizar sua Farmácia',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 5,
    name: 'Erp Cantine',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 6,
    name: 'Erp Cantine Nutrebem',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 7,
    name: 'Erp Director',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 8,
    name: 'Erp Estilo',
    description: 'Sistema para automatizar sua loja de Moda',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 9,
    name: 'Erp Literato',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 10,
    name: 'Erp Omega',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
  {
    id: 11,
    name: 'Erp Quazar',
    description: 'Sistema para automatizar seu negocio de assistencia tecnica',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita craida pela Solux Creative',
  },
]


const techs = [
  {
    id:1,
    title: 'Funcionalidades ',
    techName: 'E-commerce',
    info: [
    {name: 'Facil', description: 'Um E-commerce de facil utilização e intuitivo' },
    { name: 'Ágils', description: 'Sistema com facil instalação, agilizando seu atendimento' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  }
  
  ]

export default function Services() {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  return (
    <>
      <div className="bg-white">
        <Nav />

        <Transition.Root show={ open } as={ Fragment }>
          <div className="fixed z-10 inset-0 overflow-y-auto" initialFocus={ cancelButtonRef } onClose={ setOpen }>
            <div className="flex items-end justify-center max-h-screen w-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={ Fragment }
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */ }
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={ Fragment }
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >


                <div className="inline-block  align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-md w-full  sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:my-auto md:align-middle md:max-w-7xl md:w-full">
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                  </div>
                  <div className=" px-1 pt-1 pb-1 sm:p-1 sm:pb-4">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={ () => setOpen(false) }
                    >
                      Fechar
                    </button>
                    <div className="sm:flex sm:items-start">
                      <div className="max-w-2xl mx-auto py-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6  lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                        <div>
                          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{techs.title}</h2>
                          <p className="mt-4 text-gray-500">
                            O sistema BLISTER, é um sistema exclusivo para farmacias com integração direta com o banco de dados central de medicamentos, mantendo os valores de cada medicamento atualziado no seu cadastro.
                          </p>

                          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            { techs.info.map((tech) => (
                              <div key={ tech.name } className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{ tech.name }</dt>
                                <dd className="mt-2 text-sm text-gray-500">{ tech.description }</dd>
                              </div>
                            )) }
                          </dl>

                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="bg-gray-100 rounded-lg"
                          />
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="bg-gray-100 rounded-lg"
                          />
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="bg-gray-100 rounded-lg"
                          />
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="bg-gray-100 rounded-lg"
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </Transition.Child>
            </div>
          </div>
        </Transition.Root>

        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900">Nossos Serviços</h2>

              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                
                { callouts.map((callout) => (
                  <div key={ callout.name } className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      
                      <img
                        src={ callout.imageSrc }
                        alt={ callout.imageAlt }
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a onClick={ () => setOpen(true) }>
                        <span className="absolute inset-0" />
                        { callout.name }
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{ callout.description }</p>
                  </div>
                )) }
              </div>
            </div>
          </div>
        </div>



        <Footer />
        <SeloTray />
      </div>
    </>
  );
}




