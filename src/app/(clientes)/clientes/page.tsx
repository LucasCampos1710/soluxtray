import { Metadata } from "next";
import Image from "next/image"

const callouts = [
  {
    name: 'Toledo Surf',
    description: 'Loja virtual do surfista campeão Filipe Toledo.',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1660656290/2022-08-16_bhmjgg.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Filipe Toledo pela Solux Creative',
    href: 'https://www.filipetoledosurfstore.com.br',
  },
  {
    name: 'Diário de Taubaté e Região',
    description: 'Site do jornal de Taubaté e região.',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1733765305/Captura_de_tela_2024-12-09_141631_l1i9cj.png',
    imageAlt: 'Imagem do site da Agencia Somos a Fabula criada pela Solux Creative',
    href: 'https://www.diariodetaubateregiao.com.br/dt/',
  },
   {
    name: 'Maria Calopsita',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.mariacalopsita.com.br',
  },
   {
    name: 'Casa da Madeira',
    description: 'A Casa da Madeira é uma empresa que fabrica suas próprias peças, voltado para o consumidor final ou lojistas, oferecendo uma gama completa de produtos dentro do seu segmento de atuação',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_2_yvsvji.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Casa da Madeira criada pela Solux Creative',
    href: 'https://www.casadamadeira.com.br',
  },
  {
    name: 'Villa Engenharia',
    description: 'Site institucional da empresa Villa Engenharia',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1696340128/Captura_de_tela_2023-10-03_103206_bml4xg.png',
    imageAlt: 'Imagem do site institucional da Villa Engenharia',
    href: 'https://www.villaengenhariacaragua.com.br/',
  },
  {
    name: 'Villa Shopping da Construção',
    description: 'Site institucional da empresa Villa',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1677867548/Captura_de_tela_de_2023-03-03_15-13-24_ebgaal.png',
    imageAlt: 'Imagem do site institucional da Villa Shopping da Construção',
    href: 'https://www.villashoppingdaconstrucao.com.br/',
  },
  {
    name: 'Grupo Villa Caragua',
    description: 'Site institucional do Grupo Villa Caragua',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1677867548/Captura_de_tela_de_2023-03-03_15-15-03_j4u6dq.png',
    imageAlt: 'Imagem do site institucional do Grupo Villa Caragua',
    href: 'https://www.grupovillacaragua.com.br/',
  },
  {
    name: 'Divinu´ s',
    description: 'Loja em especializada em artigos para festas (Loja em Construção)',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1673105505/2023-01-07_3_kwydb9.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) do Divinu´ s criada pela Solux Creative',
    href: 'https://www.divinusfestas.com.br',
  },
  {
    name: 'Doc Soluções',
    description: 'Site institucional para a Doc Soluções (Site em Construção)',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649275689/2022-04-06_20_sad2fp.png',
    imageAlt: 'Imagem do site da Doc Soluções criada pela Solux Creative',
    // href: 'https://www..com.br',
  },
]

export const metadata: Metadata = {
  title: 'Clientes',
  description: 'Pagina de clientes da Solux Creative',
};

export default function Page() {
  return (
      <div className="relative bg-white overflow-hidden">
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900">Nossos Clientes </h2>

              <div className="mt-6 mb-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <Image
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="w-full h-full object-center object-cover"
                        height={200}
                        width={500}
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={callout.href} target="_blank">
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="mb-6 text-base font-semibold text-gray-900">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}