"use client"

import { CircleWavyCheck, Storefront, Megaphone, TrendUp, Headset } from 'phosphor-react';

export function FeaturesBento() {
  return (
    <section id="diferenciais" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Tudo o que você precisa para <span className="text-violet-600">vender mais</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Uma plataforma robusta, design conversivo e ferramentas de marketing integradas em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Multicanal (Span 2 cols on desktop) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-zinc-100 relative overflow-hidden group hover:border-violet-200 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Storefront size={160} weight="duotone" className="text-violet-600" />
            </div>
            <div className="relative z-10 w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
              <Storefront size={28} weight="duotone" className="text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Venda Multicanal</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-600">
                <CircleWavyCheck size={24} className="text-violet-600 shrink-0 mt-0.5" weight="fill" />
                <span className="text-lg">Integração com <strong>Mercado Livre, Shopee, Magalu</strong> e mais.</span>
              </li>
              <li className="flex gap-3 text-zinc-600">
                <CircleWavyCheck size={24} className="text-violet-600 shrink-0 mt-0.5" weight="fill" />
                <span className="text-lg">Sacolinha do <strong>Instagram, Facebook Shop e Google Shopping</strong>.</span>
              </li>
              <li className="flex gap-3 text-zinc-600">
                <CircleWavyCheck size={24} className="text-violet-600 shrink-0 mt-0.5" weight="fill" />
                <span className="text-lg">Layout responsivo: Venda no computador, tablet ou celular.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Marketing */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-zinc-100 relative overflow-hidden group hover:border-teal-200 transition-colors flex flex-col justify-center">
             <div className="relative z-10 w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
              <Megaphone size={28} weight="duotone" className="text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Marketing e SEO</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-600">
                <CircleWavyCheck size={24} className="text-teal-600 shrink-0 mt-0.5" weight="fill" />
                <span className="text-lg">Cupons de desconto e promoções nativas.</span>
              </li>
              <li className="flex gap-3 text-zinc-600">
                <CircleWavyCheck size={24} className="text-teal-600 shrink-0 mt-0.5" weight="fill" />
                <span className="text-lg">Totalmente otimizado para o Google (SEO).</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Performance */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-zinc-100 relative overflow-hidden group hover:border-cyan-200 transition-colors flex flex-col justify-center">
             <div className="relative z-10 w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
              <TrendUp size={28} weight="duotone" className="text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Alta Performance</h3>
            <p className="text-zinc-600 text-lg">
              Produtos, visitas e usuários ilimitados. Servidores escaláveis para aguentar picos de acesso sem sair do ar.
            </p>
          </div>

          {/* Card 4: Suporte (Span 2 cols on desktop) */}
          <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center justify-between">
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Headset size={28} weight="duotone" className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Suporte Humanizado</h3>
                <p className="text-zinc-300 text-lg max-w-md">
                  Nada de robôs. Nossa equipe especializada acompanha o seu projeto de ponta a ponta com carinho e atenção.
                </p>
              </div>
              <a 
                href="https://api.whatsapp.com/send?phone=5512991316484"
                className="shrink-0 px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Falar com a Equipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
