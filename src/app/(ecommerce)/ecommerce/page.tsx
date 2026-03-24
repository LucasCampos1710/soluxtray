import Ecommerce from "@/components/Ecomerce";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ecommerce - Solux Creative',
  description: 'Pagina com mais detalhes sobre o e-Commerce',
};

export default function EcommercePage() {
  return(
    <main className="min-h-screen font-sans bg-white selection:bg-violet-200 pt-[80px]">
      <section className="relative overflow-hidden bg-violet-950 pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pb-32 lg:pt-32">
        <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none z-10" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-violet-200 text-sm font-semibold tracking-wide mb-8 backdrop-blur-md">
                Soluções e-Commerce
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 leading-tight">
                Quer aumentar <br className="hidden lg:block"/>suas vendas,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  mas ainda não criou sua Loja Virtual?
                </span>
              </h1>
              <p className="mt-4 text-xl text-violet-100/80 mb-10 max-w-2xl mx-auto lg:mx-0">
                A equipe da Solux Creative é especialista em implantação das melhores plataformas de e-Commerce do mercado. Seu negócio operando e faturando 24 horas por dia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20uma%20demonstração%20da%20plataforma%20de%20e-Commerce"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-zinc-900 bg-white hover:bg-zinc-100 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Solicitar Demonstração
                </Link>
                <Link
                  href="#vantagens"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Ver Vantagens
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 mt-16 lg:mt-0 relative group">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-cyan-400 rounded-3xl transform rotate-3 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 p-2 backdrop-blur-sm">
                  <Image
                    src="https://res.cloudinary.com/lucascampos/image/upload/v1651237293/25Z_2012.w003.n001.81C.p6.81-_Convertido_s_kvb4zg.png"
                    alt="Ilustração de eCommerce"
                    width={2000}
                    height={2000}
                    className="relative rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div id="vantagens" className="relative z-20 -mt-10 lg:-mt-20">
        <Ecommerce />
      </div>
    </main>
  )
}