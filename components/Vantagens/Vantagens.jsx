import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

export default function Vantagens() {

      const features = [
      {
        name: 'Vendas sem Barreiras',
      description:
      'Seu e-commerce (LOJA VIRTUAL) vai estar em todos os lugares, sem barreiras físicas. Você pode vender para todo Brasil.',
      icon: GlobeAltIcon,
  },
      {
        name: 'Aberta 24 horas por dia!',
      description:
      'Um e-commerce não tira folga NUNCA, sua LOJA VIRTUAL estará aberta o ano todo, 24 horas por dia, e você pode vender a todo momento!',
      icon: ScaleIcon,
  },
      {
        name: 'Liberdade',
      description:
      'A liberdade é um dos principais motivos para ter e-commerce (LOJA VIRTUAL). Você pode gerenciar sua loja de qualquer outro lugar.',
      icon: LightningBoltIcon,
  },
      {
        name: 'Mais Facilidade para seus Clientes',
        description:
        'Os clientes amam conveniência e com um e-commerce (LOJA VIRTUAL) eles tem isso. Para chegar a sua Loja virtual e comprar o seu produto o cliente não precisa sair de casa, ele evita o stress de filas, trânsito, estacionamentos lotados. O cliente consegue fazer a pesquisa e encontrar sua Loja virtual de uma forma simples e rápida.',
        icon: AnnotationIcon,
        },
      ]

  return (
    <section className="bg-white">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-4xl text-indigo-600 font-semibold tracking-wide uppercase">Por que Contratar a</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Solux Creative?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Listamos abaixo alguns dos motivos para você ter um E-commerce.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              { features.map((feature) => (
                <div key={ feature.name } className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
      )
}

