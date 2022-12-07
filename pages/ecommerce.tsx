import SeloTray from '../components/seloTray'
import Ecommerce from '../components/Ecommerce/Ecommerce'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'

export default function Ecommerces() {
  return (
    <div>
       <Head>
        <title>e-Commerce</title>
      </Head>
      <Nav />
      <main className="bg-fuchsia-900">
        <div className="relative overflow-hidden">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-xl">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Quer aumentar suas vendas,</span>{' '}
                  <span className="block  xl:inline">mas ainda não criou sua loja virtual?</span>
                </h1>
                <p className="mt-4 text-xl text-white">
                  A equipe da Solux Creative é especializada em implantação das melhores plataformas de e-Commerce para o seu negocio.
                </p>
                <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <a
                      href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20uma%20demonstração%20da%20plataforma%20de%20e-Commerce"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-tl from-cyan-600 to-violet-700 hover:bg-gradient-to-tr from-violet-700 to-cyan-600 hover:brightness-150 md:py-4 md:text-lg md:px-10"
                    >
                      Solicite uma demonstração
                    </a>
                  </div>

                </div>
              </div>

              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                  >
                    <div className="absolute  sm:top-0 sm:translate-x-8 lg:left-96 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 ">
                          <div className=" rounded-lg overflow-hidden opacity-0 md:opacity-100">
                            <img
                              src="https://res.cloudinary.com/lucascampos/image/upload/v1651237293/25Z_2012.w003.n001.81C.p6.81-_Convertido_s_kvb4zg.png"
                              alt=""
                              className="w-2/3 h-full object-center object-cover"
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </main>
      {/* <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32">
            
            <main className="mt-10 pt-16 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Quer aumentar suas vendas,</span>{ ' ' }
                  <span className="block text-indigo-600 xl:inline">mas ainda não criou sua loja virtual?</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A equipe da Solux Creative é especializada em implantação das melhores plataformas de e-Commerce para o seu negocio.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Solicite uma demonstração
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Fale com um Consultor
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
       
      </div> */}
      <Ecommerce />
      <Footer />
      <SeloTray />
    </div>

  )
}

