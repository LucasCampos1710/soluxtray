import { Metadata } from "next";
import Image from "next/image";

const callouts = [
  {
    name: "Toledo Surf",
    description: "Loja virtual do surfista campeão Filipe Toledo.",
    imageSrc: "https://res.cloudinary.com/lucascampos/image/upload/v1660656290/2022-08-16_bhmjgg.png",
    imageAlt: "Imagem da loja virtual(e-commerce) da Filipe Toledo pela Solux Creative",
    href: "https://www.filipetoledosurfstore.com.br",
  },
  {
    name: "Diário de Taubaté e Região",
    description: "Site do jornal de Taubaté e região.",
    imageSrc: "https://res.cloudinary.com/lucascampos/image/upload/v1733765305/Captura_de_tela_2024-12-09_141631_l1i9cj.png",
    imageAlt: "Imagem do site da Agencia Somos a Fabula criada pela Solux Creative",
    href: "https://www.diariodetaubateregiao.com.br/dt/",
  },
  {
    name: "Brother´s Marine",
    description: "Site institucional da empresa Brother´s Marine, especializada em manutenção Náutica (Em construção).",
    imageSrc: "https://res.cloudinary.com/lucascampos/image/upload/v1739553871/caxennsmnvz78fy1zave.png",
    imageAlt: "Imagem do site Brother´s Marine criada pela Solux Creative",
    href: "https://www.brothersmarine.com.br",
  },
  {
    name: "Maria Calopsita",
    description: "Loja especializada em vendas de produtos para Calopsitas.",
    imageSrc: "https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png",
    imageAlt: "Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative",
    href: "https://www.mariacalopsita.com.br",
  },
  {
    name: "Casa da Madeira",
    description: "A Casa da Madeira é uma empresa que fabrica suas próprias peças, voltado para o consumidor final ou lojistas, oferecendo uma gama completa de produtos dentro do seu segmento de atuação.",
    imageSrc: "https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_2_yvsvji.png",
    imageAlt: "Imagem da loja virtual(e-commerce) da Casa da Madeira criada pela Solux Creative",
    href: "https://www.casadamadeira.com.br",
  },
  {
    name: "Brondani Advogados Associados",
    description: "Site institucional da empresa Brondani Advogados Associados.",
    imageSrc: "https://res.cloudinary.com/lucascampos/image/upload/v1750950839/Captura_de_tela_2025-06-26_121146_yqlp6u.png",
    imageAlt: "Imagem do site institucional da Brondani Advogados Associados",
    href: "#",
  },
  {
    name: "Doc Soluções",
    description: "Site institucional para a Doc Soluções (Site em Construção).",
    imageSrc: "https://res.cloudinary.com/lucascampos/image/upload/v1649275689/2022-04-06_20_sad2fp.png",
    imageAlt: "Imagem do site da Doc Soluções criada pela Solux Creative",
    href: "#",
  },
];

export const metadata: Metadata = {
  title: "Clientes - Solux Creative",
  description: "Conheça as empresas que confiam na Solux Creative para impulsionar suas vendas online e institucionais.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans pt-[80px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-violet-950 py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/40 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-semibold tracking-wide mb-6 backdrop-blur-md">
            Portfólio
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-300">confiam</span> em nós
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-violet-100/80">
            Conheça alguns dos projetos e lojas virtuais de alta performance desenvolvidos pela equipe Solux Creative.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative z-20 -mt-10 lg:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {callouts.map((callout) => (
              <a 
                key={callout.name} 
                href={callout.href} 
                target={callout.href !== "#" ? "_blank" : undefined}
                rel={callout.href !== "#" ? "noopener noreferrer" : undefined}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/40 border border-zinc-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500"
              >
                <div className="relative h-64 w-full bg-zinc-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {callout.name}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm flex-1">
                    {callout.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
