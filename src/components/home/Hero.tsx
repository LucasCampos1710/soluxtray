"use client"

import { CheckCircle } from 'phosphor-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[140px] pb-16 sm:pb-24 lg:pb-32 selection:bg-violet-200">
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-violet-50 to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            Somos especialistas em criação {' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 mt-2">
              de e-Commerce de alta performance.
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 sm:text-xl leading-relaxed">
            Tenha uma loja virtual completa, com suporte humanizado, integrada aos melhores canais de venda e focada em resultados reais para o seu negócio.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 pt-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"
              className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-105"
            >
              Fale com um consultor
            </a>
            <a 
              href="#diferenciais"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium rounded-full transition-all duration-300"
            >
              Conheça nossos diferenciais
            </a>
          </div>

          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto border-t border-zinc-100">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <CheckCircle weight="duotone" className="text-violet-600 w-8 h-8 shrink-0" />
              <p className="text-sm font-medium text-zinc-700">Suporte <strong>Humanizado</strong> <br className="hidden sm:block" /> em todo o processo</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <CheckCircle weight="duotone" className="text-violet-600 w-8 h-8 shrink-0" />
              <p className="text-sm font-medium text-zinc-700">Aceite <strong>Cartão, PIX e Boleto</strong> <br className="hidden sm:block" /> e otimize vendas</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <CheckCircle weight="duotone" className="text-violet-600 w-8 h-8 shrink-0" />
              <p className="text-sm font-medium text-zinc-700">Integração real com <br className="hidden sm:block" /> <strong>ERPs e Marketplaces</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
