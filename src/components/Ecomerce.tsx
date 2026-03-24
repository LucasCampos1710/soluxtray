import { ChartBarIcon, ClockIcon, GlobeAmericasIcon, MagnifyingGlassIcon, ChartBarSquareIcon, TruckIcon, CreditCardIcon, TableCellsIcon } from "@heroicons/react/24/outline"

export default function Ecommerce() {
  const features = [
      {
        name: 'Vendas sem Barreiras',
        description: 'Seu e-Commerce (LOJA VIRTUAL) vai estar em todos os lugares, sem barreiras físicas. Você pode vender para todo Brasil.',
        icon: ChartBarIcon,
        color: 'text-violet-600',
        bg: 'bg-violet-100',
      },
      {
        name: 'Aberta 24 horas por dia!',
        description: 'Um e-Commerce não tira folga NUNCA, sua LOJA VIRTUAL estará aberta o ano todo, 24 horas por dia.',
        icon: ClockIcon,
        color: 'text-cyan-600',
        bg: 'bg-cyan-100',
      },
      {
        name: 'Liberdade',
        description: 'A liberdade é um dos principais motivos. Você pode gerenciar sua loja de qualquer lugar do mundo com apenas uma conexão.',
        icon: GlobeAmericasIcon,
        color: 'text-teal-600',
        bg: 'bg-teal-100',
      },
      {
        name: 'Facilidade para Clientes',
        description: 'Seu cliente não precisa sair de casa, evita o stress de filas, trânsito, estacionamentos lotados e compra em poucos cliques.',
        icon: MagnifyingGlassIcon,
        color: 'text-violet-600',
        bg: 'bg-violet-100',
      },
      {
        name: 'Canais de venda',
        description: 'Venda nos maiores MARKETPLACES do país, com integração fácil e direta para alavancar faturamento.',
        icon: ChartBarSquareIcon,
        color: 'text-cyan-600',
        bg: 'bg-cyan-100',
      },
      {
        name: 'Frete e Logística',
        description: 'Integramos com as melhores e mais baratas transportadoras do país, e com os Correios.',
        icon: TruckIcon,
        color: 'text-teal-600',
        bg: 'bg-teal-100',
      },
      {
        name: 'Meios de Pagamento',
        description: 'Yapay, Pagseguro, Rede, Getnet, Cielo, PIX e Boletos. Todas as opções em um módulo limpo e seguro.',
        icon: CreditCardIcon,
        color: 'text-violet-600',
        bg: 'bg-violet-100',
      },
      {
        name: 'Integração com ERP',
        description: 'Integramos sua loja FÍSICA com a VIRTUAL (ERP). Tenha acesso ao estoque nativo do Hiper atualizado na hora.',
        icon: TableCellsIcon,
        color: 'text-cyan-600',
        bg: 'bg-cyan-100',
      },
  ];

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">Vantagens Exclusivas</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">
            Por que eu devo ter um <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">e-Commerce?</span>
          </h3>
          <p className="text-lg text-zinc-600">
            Listamos abaixo alguns dos principais motivos para você digitalizar o seu negócio e alcançar resultados em escala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className={`bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{feature.name}</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">{feature.description}</p>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}