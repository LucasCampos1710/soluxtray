import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, TerminalIcon, AcademicCapIcon, AdjustmentsIcon, CurrencyDollarIcon } from '@heroicons/react/outline'

export default function About() {

  const features = [
    {
      name: 'Integrador',
      description:
        'Criamos um integrador juntamente com a Athos Labs, permitindo assim que o Lojista que já possua um sistema Athos implantado, possa vender na Loja Física e Virtual, compartilhando do mesmo estoque, com baixa automática e cadastro unificado, evitando o re- trabalho e possíveis erros.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Migração de Sistemas',
      description:
        'Para novos clientes que não estão satisfeitos com o sistema, plataforma e/ou atendimento atual,temos um plano de incentivo para substituição dos sistemas com a possibilidade de importação do cadastro de produtos, clientes e fornecedores para os nossos sistemas(ERP) + PDV(Ponto de Venda) e Loja Virtual.',
      icon: LightningBoltIcon,
    },
    
    {
      name: 'Sistema Bling',
      description:
        'Somos parceiros ERP Bling (ON-LINE) e integramos sua Loja Virtual com a Loja Física também através dele.',
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
        'Nosso treinamento é On-Line, personalizado e contínuo.',
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
        'Somos parceiros certifcado da plataforma Tray em criação de layouts, suporte e integração.',
      icon: AcademicCapIcon,
    },
  ]

  return (
    <>
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

    </>
  )
}

