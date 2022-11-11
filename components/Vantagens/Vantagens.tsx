import { ChartBarSquareIcon, TruckIcon, CreditCardIcon, TableCellsIcon } from '@heroicons/react/24/outline'

export default function Vantagens() {

      const features = [
      {
        name: 'Canais de venda',
      description:
      'Você podera vender nos maiores MARKETPLACES do país, com a facilidade de integrar sua loja aos MARKETPLACES mais importantes do Brasil.',
      icon: ChartBarSquareIcon,
  },
      {
        name: 'Frete',
      description:
      'Integramos com as maiores e melhores transportadoras do país, afim de você ter o melhor valor a oferecer ao seu cliente',
      icon: TruckIcon,
  },
      {
        name: 'Meios de Pagamento',
      description:
      'Trabalhamos com todos os meios de pagamentos, como Yapay, Pagseguro, Rede, Getnet, Cielo, entre outras opções.',
      icon: CreditCardIcon,
  },
      {
        name: 'Integração',
        description:
        'Integramos sua loja FISICA com a sua loja VIRTUAL (ERP) e você terá acesso a todos os dados da sua loja FISICA.',
        icon: TableCellsIcon,
        },
      ]

  return (
    <section className="bg-white">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              { features.map((feature) => (
                <div key={ feature.name } className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tl from-violet-800 to-cyan-600 text-white">
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

