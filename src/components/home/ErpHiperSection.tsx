"use client"

import { ArrowsLeftRight, Handshake, Database, DeviceMobile } from 'phosphor-react';
import Image from 'next/image';

export function ErpHiperSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden overflow-x-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-semibold tracking-wide uppercase">
              <ArrowsLeftRight className="w-4 h-4" weight="bold" />
              Integração Perfeita
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Gestão inteligente com <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">ERP Hiper</span>
            </h2>
            
            <p className="text-lg text-zinc-600 leading-relaxed">
              Sabemos que gerenciar uma loja virtual e física ao mesmo tempo pode ser um desafio. Por isso, somos especialistas na integração nativa com o <strong>ERP Hiper</strong>, garantindo que todo o seu ecossistema funcione em perfeita harmonia.
            </p>

            <ul className="space-y-8 pt-4">
              <li className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center">
                  <Database weight="duotone" className="text-violet-600 w-7 h-7" />
                </div>
                <div>
                  <strong className="block text-zinc-900 text-xl mb-2">Estoque Sincronizado</strong>
                  <span className="text-zinc-600 text-lg">Vendeu na loja física? O estoque do e-commerce é atualizado instantaneamente, evitando rupturas e dores de cabeça.</span>
                </div>
              </li>
              
              <li className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center">
                  <Handshake weight="duotone" className="text-teal-600 w-7 h-7" />
                </div>
                <div>
                  <strong className="block text-zinc-900 text-xl mb-2">Preços e Produtos</strong>
                  <span className="text-zinc-600 text-lg">Cadastre seus produtos, variações e tabelas de preço apenas uma vez no Hiper, e tudo será replicado para a web.</span>
                </div>
              </li>

              <li className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center">
                  <DeviceMobile weight="duotone" className="text-cyan-600 w-7 h-7" />
                </div>
                <div>
                  <strong className="block text-zinc-900 text-xl mb-2">Controle na Palma da Mão</strong>
                  <span className="text-zinc-600 text-lg">Pedidos, faturamento, emissão de notas fiscais e relatórios gerenciais centralizados no seu ERP de confiança.</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Image/Visual Representation */}
          <div className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
            {/* Soft abstract shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-100 to-cyan-50 rounded-[3rem] transform rotate-3 scale-105 pointer-events-none" />
            
            <div className="relative bg-white p-10 py-16 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 w-full max-w-md mx-auto aspect-square flex flex-col items-center justify-center gap-12 group hover:-translate-y-2 transition-all duration-500">
              
              <Image 
                src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png" 
                alt="Solux Creative" 
                width={200} 
                height={80} 
                className="w-48 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="flex items-center justify-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-violet-400 animate-pulse" />
                 <div className="h-[2px] w-16 bg-gradient-to-r from-violet-200 to-teal-200" />
                 <ArrowsLeftRight weight="bold" className="text-violet-500 w-10 h-10 mx-2 animate-pulse" />
                 <div className="h-[2px] w-16 bg-gradient-to-l from-violet-200 to-teal-200" />
                 <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
              </div>

              {/* Placeholder estético para logo ERP Hiper */}
              <div className="text-4xl font-black text-zinc-800 tracking-tighter uppercase px-8 py-5 rounded-2xl bg-zinc-50 border-[3px] border-dashed border-zinc-200 transition-all duration-500 group-hover:border-violet-300 group-hover:bg-violet-50 group-hover:text-violet-900">
                ERP HIPER
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
