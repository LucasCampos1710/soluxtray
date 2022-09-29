import SeloTray from '../components/seloTray'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, TerminalIcon, AcademicCapIcon, AdjustmentsIcon, CurrencyDollarIcon } from '@heroicons/react/outline'


export default function Home() {

  const features = [
    {
      name: 'Integrador',
      description:
        'Criamos um integrador juntamente com a Athos Labs, permitindo assim que o Lojista que já possua um sistema Athos implantado, possa vender na Loja Física e Virtual, compartilhando do mesmo estoque, com baixa automática e cadastro unificado, evitando o re-trabalho e possíveis erros.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Migração de Sistemas',
      description:
        'Para novos clientes que não estão satisfeitos com o sistema, plataforma e/ou atendimento atual,temos um plano de incentivo para substituição dos sistemas com a possibilidade de importação do cadastro de produtos, clientes e fornecedores para os nossos sistemas(ERP) + PDV(Ponto de Venda) e Loja Virtual.',
      icon: LightningBoltIcon,
    },

    {
      name: 'HUB Maketplace',
      description:
        'Somos parceiros da LEXOS HUB onde você podera ter acesso aos maiores marketplaces e integramos sua Loja Virtual.',
      icon: TerminalIcon,
    },
    {
      name: 'Configurações sem preocupação',
      description:
        'Todas as configurações e parametrizações da sua Loja Virtual, são realizadas pelo nosso time de implantação.',
      icon: AdjustmentsIcon,
    },
    {
      name: 'Suporte Especializado',
      description:
        'O Suporte técnico da Solux Creative é Humanizado, sem burocracia ou demora no atendimento e soluções de dúvidas ou problemas.',
      icon: AnnotationIcon,
    },
    {
      name: 'Treinamentos',
      description:
        'Nossos treinamentos são On-Line, personalizados e permanentes.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Planos Personalizados',
      description:
        'Nossa mensalidade cabe no seu bolso, pois temos planos para administrar a partir de 50 produtos até ilimitado.',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Parceiro Certificado',
      description:
        'Possuimos certificações nas melhores plataformas, layouts e ERP´s do mercado.',
      icon: AcademicCapIcon,
    },
  ]

  return (
      <div>
        <Nav />
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <main className="mt-10 pt-7 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Somos especialistas na criação </span>{ ' ' }
                    <span className="block text-violet-600 xl:inline">de lojas virtuais de alta performance.</span>
                  </h1>
                  <p className="mt-3 text-base font-semibold text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Layouts modernos, integração com os maiores marketplaces e
                    os melhores recursos para personalizar seu e-Commerce.

                  </p>

                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://res.cloudinary.com/lucascampos/image/upload/v1628080930/bg-dev_hucmqi.svg"
              alt=""
            />
          </div>
        </div>

        <section className="bg-violet-500">
          <div className="relative overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                <div className="sm:max-w-xl">
                  <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                    Um mundo de possibilidades para o seu negócio
                  </h1>
                  <p className="mt-4 text-xl text-white">
                    A Solux Creative tem em seu DNA, o avanço tecnológico e capacita seus clientes/parceiros para utilizar a plataforma de e-Commerce da
                    maneira mais prática possível e sem complicações, com profissionais com mais de 30 anos de experiência em Tecnologia de Ponta.

                  </p>
                </div>
                <div>
                  <div className="mt-10">
                    {/* Decorative image grid */ }
                    <div
                      aria-hidden="true"
                      className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                    >
                      <div className="absolute  sm:top-0 sm:translate-x-8 lg:left-1/3 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 ">
                            <div className=" rounded-lg overflow-hidden opacity-0 lg:opacity-100">
                              <img
                                src="https://res.cloudinary.com/lucascampos/image/upload/v1651171255/3240_qklgue.png"
                                alt=""
                                className="w-full h-full object-center object-cover"
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
        </section>

        <section className='md:left-48 md:relative bg-gradient-to-tl from-cyan-500 to-violet-800 md:rounded-tl-full md:rounded-br-full  md:w-8/12 bottom-16 '>
          <div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl ml-10">
                <span className="block">Nos envie uma mensagem contando sua </span>
                <span className="block text-white">necessidade que teremos o prazer em te ajudar.</span>
              </h2>
              <div className="relative md:right-10  mt-8 flex :justify-center :text-center lg:mt-0 lg:flex-shrink-0 ">

                <div className="md:ml-3 md:inline-flex rounded-md shadow sm:flex sm:justify-center sm:text-center left-24 relative md:left-0">
                  <a
                    href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"
                    className="md:inline-flex sm:flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-cyan-500 hover:text-white"
                  >
                    Fale com um consultor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="bg-white">
          <div className="py-12 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h1 className="text-3xl text-indigo-600 font-semibold tracking-wide"> Nossas plataformas estão preparadas para você vender em todos os canais.</h1>

                <p className="mt-4 max-w-xlxl text-xl text-gray-500 lg:mx-auto">
                  Nossa sede está localizada em Caraguatatuba, Litoral Norte de São Paulo e atendemos clientes em todo o Brasil.
                </p>

              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
                  { features.map((feature) => (
                    <div key={ feature.name } className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-violet-600 to-cyan-500 text-white">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{ feature.name }</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{ feature.description }</dd>
                    </div>
                  )) }
                </dl>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <SeloTray />
      </div>
  )
}