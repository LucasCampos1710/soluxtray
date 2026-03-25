"use client"

import { ArrowsLeftRight, CheckCircle, Database, DeviceMobile, FileText, Handshake, Lightning, Receipt, Robot, Storefront, Truck } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { ErpHiperSection } from "@/components/home/ErpHiperSection";

export default function HiperPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full" />
          <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-semibold tracking-wide uppercase mb-8">
            <Lightning weight="fill" className="w-4 h-4 text-violet-500" />
            Parceria Estratégica
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8 max-w-5xl mx-auto leading-tight">
            Seu E-Commerce e Loja Física <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
              Trabalhando Juntos
            </span>
          </h1>
          
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-10">
            A integração nativa e homologada entre a <strong>Solux Creative</strong> e o <strong>ERP Hiper</strong> consolida as suas operações. Cadastre uma vez, venda em todos os canais e fature sem dores de cabeça.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://api.whatsapp.com/send?phone=55XXXXXXXXX" 
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-violet-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl shadow-zinc-900/10 flex items-center justify-center gap-2"
            >
              Falar com Consultor
              <ArrowsLeftRight weight="bold" />
            </Link>
            <Link 
              href="#funcionalidades" 
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-zinc-100 hover:border-violet-100 hover:bg-violet-50 text-zinc-700 hover:text-violet-700 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center"
            >
              Conhecer Funcionalidades
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW / SECTION WE ALREADY HAD */}
      <div id="visao-geral" className="pb-10 pt-10 border-t border-zinc-50 bg-zinc-50/50">
         {/* Reusing existing component for consistency and fast loading */}
         <ErpHiperSection />
      </div>

      {/* 3. BENTO GRID DE FUNCIONALIDADES (FEATURES) */}
      <section id="funcionalidades" className="py-24 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
              Como essa integração transforma seu dia a dia
            </h2>
            <p className="text-lg text-zinc-600">
              Nossa tecnologia faz a ponte invisível entre o balcão da sua loja e o seu site de vendas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            
            {/* Bento Item 1: Wide */}
            <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] bg-white border border-zinc-100 p-8 hover:shadow-xl hover:shadow-violet-600/5 transition-all duration-300 group">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-violet-50 rounded-full blur-3xl group-hover:bg-violet-100 transition-colors" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
                    <Database weight="duotone" className="w-8 h-8 text-violet-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">Estoque Bidirecional</h3>
                  <p className="text-zinc-600 leading-relaxed max-w-md">
                    Qualquer movimento de entrada ou saída, tanto na loja física pelo PDV Hiper quanto na sua loja virtual, reflete instantaneamente em todo o sistema. Adeus vendas de produtos sem estoque.
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Item 2: Square */}
            <div className="md:col-span-1 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 border border-zinc-700">
                    <Storefront weight="duotone" className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Omnichannel</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Compre no site, retire na loja. Controle total da experiência do seu cliente em múltiplas frentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Item 3: Square */}
            <div className="md:col-span-1 relative overflow-hidden rounded-[2rem] bg-white border border-zinc-100 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-50 rounded-full blur-3xl group-hover:bg-teal-100 transition-colors" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <Receipt weight="duotone" className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">Emissão Fiscal</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Emita NFe e NFCe dos seus pedidos online diretamente pelo ambiente do Hiper de forma centralizada.
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Item 4: Wide */}
            <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] bg-white border border-zinc-100 p-8 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group">
               <div className="absolute -right-20 bottom-0 w-80 h-80 bg-cyan-50 rounded-full blur-3xl group-hover:bg-cyan-100 transition-colors" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6">
                    <Robot weight="duotone" className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">Cadastro de Produtos (PIM)</h3>
                  <p className="text-zinc-600 leading-relaxed max-w-xl">
                    Utilize o Hiper como seu centralizador de cadastros. Crie matrizes de grade (cor, tamanho), defina códigos de barras (EAN), NCM e tabela de preços. Tudo sobe para a plataforma de e-commerce da Solux sem necessidade de retrabalho manual.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3.B HIPER NATIVE FEATURES */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
                Muito além da internet: <br/>O coração da sua loja física
              </h2>
             <p className="text-lg text-zinc-600">
                O Hiper não é apenas um conector. É um sistema de gestão nascido no balcão, desenhado para cuidar de cada centavo da sua operação no mundo real.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Card 1 */}
             <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-violet-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                   <DeviceMobile weight="duotone" className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">PDV Imparável</h4>
                <p className="text-zinc-600">Frente de caixa ultra-rápida. Seu caixa continua emitindo vendas e cupons por até 7 dias totalmente sem internet.</p>
             </div>

             {/* Card 2 */}
             <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-cyan-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                   <FileText weight="duotone" className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">100% Fiscal e Legal</h4>
                <p className="text-zinc-600">Homologado em todos os estados. Emita NF-e, NFC-e e SAT. Oferece um Portal Exclusivo para acesso direto do seu Contador.</p>
             </div>

             {/* Card 3 */}
             <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                   <Database weight="duotone" className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">Saúde Financeira</h4>
                <p className="text-zinc-600">Controle seu contas a pagar/receber e visualize DREs gerenciais. Inteligência real para potencializar o seu lucro mensal.</p>
             </div>

             {/* Card 4 */}
             <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                   <Handshake weight="duotone" className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">Meios de Pagamento</h4>
                <p className="text-zinc-600">Conciliação automática. Integração com TEF, maquininhas Stone, PIX direto na tela do PDV e Conta Digital integrada.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
                Fluxo da Loja Virtual
              </h2>
             <p className="text-lg text-zinc-600">O caminho que um pedido faz, da internet ao seu faturamento.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
             {/* Desktop Line */}
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-pk bg-violet-100 transform -translate-x-1/2 border-l-2 border-dashed border-violet-200" />
             
             <div className="space-y-16 relative">
                
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 group">
                   <div className="md:w-5/12 text-center md:text-right">
                      <h4 className="text-xl font-bold text-zinc-900 mb-2">Pedido Realizado</h4>
                      <p className="text-zinc-600">O cliente finaliza a compra na sua loja virtual construída pela Solux, preenchendo todos os dados.</p>
                   </div>
                   <div className="md:w-2/12 flex justify-center relative z-10">
                      <div className="w-16 h-16 rounded-full bg-white border-[4px] border-violet-100 flex items-center justify-center group-hover:border-violet-500 transition-colors shadow-lg">
                         <Storefront weight="fill" className="text-violet-500 w-8 h-8" />
                      </div>
                   </div>
                   <div className="md:w-5/12" />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 group">
                   <div className="md:w-5/12 hidden md:block" />
                   <div className="md:w-2/12 flex justify-center relative z-10">
                      <div className="w-16 h-16 rounded-full bg-white border-[4px] border-cyan-100 flex items-center justify-center group-hover:border-cyan-500 transition-colors shadow-lg">
                         <Lightning weight="fill" className="text-cyan-500 w-8 h-8" />
                      </div>
                   </div>
                   <div className="md:w-5/12 text-center md:text-left">
                      <h4 className="text-xl font-bold text-zinc-900 mb-2">Sincronização Ativa</h4>
                      <p className="text-zinc-600">Nossa integração identifica a aprovação do pagamento e injeta o pedido completo diretamente no módulo de Vendas do Hiper.</p>
                   </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 group">
                   <div className="md:w-5/12 text-center md:text-right">
                      <h4 className="text-xl font-bold text-zinc-900 mb-2">Faturamento</h4>
                      <p className="text-zinc-600">Sua equipe no estoque acessa o Hiper, confere os itens, imprime a etiqueta de envio e emite a Nota Fiscal com 1 clique.</p>
                   </div>
                   <div className="md:w-2/12 flex justify-center relative z-10">
                      <div className="w-16 h-16 rounded-full bg-white border-[4px] border-teal-100 flex items-center justify-center group-hover:border-teal-500 transition-colors shadow-lg">
                         <FileText weight="fill" className="text-teal-500 w-8 h-8" />
                      </div>
                   </div>
                   <div className="md:w-5/12" />
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 group">
                   <div className="md:w-5/12 hidden md:block" />
                   <div className="md:w-2/12 flex justify-center relative z-10">
                      <div className="w-16 h-16 rounded-full bg-zinc-900 border-[4px] border-zinc-800 flex items-center justify-center group-hover:border-violet-500 transition-colors shadow-lg shadow-violet-500/20">
                         <Truck weight="fill" className="text-white w-8 h-8" />
                      </div>
                   </div>
                   <div className="md:w-5/12 text-center md:text-left">
                      <h4 className="text-xl font-bold text-zinc-900 mb-2">Envio e Rastreio</h4>
                      <p className="text-zinc-600">O status de enviado e o código de rastreio são atualizados automaticamente e seu cliente é notificado por e-mail ou WhatsApp.</p>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 bg-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-400/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para unir seu varejo físico e digital com o Hiper?
          </h2>
          <p className="text-violet-100 text-xl mb-10 max-w-2xl mx-auto">
            Evite dores de cabeça com estoques furados e cadastros manuais. Deixe a tecnologia trabalhar a favor da sua rentabilidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contato" 
              className="px-8 py-4 bg-white hover:bg-zinc-50 text-violet-700 font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-black/10 flex items-center gap-2"
            >
              Agendar Demonstração
              <CheckCircle weight="bold" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
