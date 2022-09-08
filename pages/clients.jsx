import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'
import SeloTray from '../components/seloTray'

const callouts = [
  {
    name: 'Lolô Bolsas',
    description: 'Loja especializada em bolsas personalizadas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1660656730/2022-08-16_3_vcajjx.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Lolô Bolsas criada pela Solux Creative',
    href: 'https://www.lolobolsas.com.br',
  },
  {
    name: 'Central Doces',
    description: 'Umas das melhores lojas de confeitaria da região de São José dos Campos',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_5_hlkgof.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da central doces criada pela Solux Creative',
    href: 'https://www.lojacentraldoces.com.br',
  },
  {
    name: 'Maria Calopsita',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1643038351/2022-01-24_1_foko9c.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.mariacalopsita.com.br',
  },
  {
    name: 'blue Lord',
    description: 'Marca contemporânea com inspiração britânica que compartilha em suas coleções a essência do polo equestre',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649273620/2022-04-06_1_wslecd.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Blue Lord criada pela Solux Creative',
    href: 'https://www.bluelord.com.br',
  },
  {
    name: 'Casa da Madeira',
    description: 'A Casa da Madeira é uma empresa que fabrica suas próprias peças, voltado para o consumidor final ou lojistas, oferecendo uma gama completa de produtos dentro do seu segmento de atuação',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_2_yvsvji.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Casa da Madeira criada pela Solux Creative',
    href: 'https://www.casadamadeira.com.br',
  },
  {
    name: 'Toledo Surf',
    description: 'Loja virtual do surfista Filipe Toledo.',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1660656290/2022-08-16_bhmjgg.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Filipe Toledo pela Solux Creative',
    href: 'https://www.filipetoledo.com.br',
  },
  {
    name: 'TNC',
    description: 'Loja especializada em vendas de Óculos',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274845/2022-04-06_4_meomp1.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Tnc&co criada pela Solux Creative',
    //href: 'https://www.tncsunglass.com.br',
  },
  {
    name: 'All Presents',
    description: 'Loja especializada em objetos de decoração, acessórios e presentes.',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_5_wdmnlc.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da All Presentes criada pela Solux Creative',
    href: 'https://www.lojaallpresentes.com.br',
  },
  {
    name: 'Loja Yumi Pesca',
    description: 'Loja especializada em vendas de artigos para pesca',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_6_xlxr0r.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Yumi Pesca criada pela Solux Creative',
    href: 'https://www.lojayumipesca.com.br',
  },
   {
    name: 'LAF Atacado',
    description: 'Loja especializada em vendas de castanhas, cereias e etc...',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_8_bf2kqj.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da LAF ATACADO/VAREJO criada pela Solux Creative',
    //href: 'https://www.lafatacado.com.br',
  },
  {
    name: 'Familia Pet',
    description: 'Loja especializada em vendas de produtos para Pets',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_9_nhatfm.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da FAMILIA PET criada pela Solux Creative',
    href: 'https://www.familiapetstore.com.br',
  },
  {
    name: 'Basico UD',
    description: 'Loja especializada em vendas de produtos de utilidades domésticas e decorações.',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_10_prddfm.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Basico UD criada pela Solux Creative',
    href: 'https://www.basicoud.com.br',
  },
  {
    name: 'Tactus Store',
    description: 'Nossa loja chega para demonstrar que a elegância e requinte se complementam à  beleza interior de toda mulher',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_12_fpjm1j.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Tactus Store criada pela Solux Creative',
   // href: 'https://www.tactusstore.com.br',
  },
  {
    name: 'Coco Beach',
    description: 'Coco Beach vendas de VAREJO moda praia e casual.',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_13_je85x8.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Coco beach criada pela Solux Creative',
    href: 'https://www.cocobeach.com.br',
  },
  {
    name: 'Padaria O Segredo dos Doces',
    description: 'Site instituicional para a Padaria O Segredo dos Doces',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_14_vq3wo7.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Padaria O segredfoi dos doces criada pela Solux Creative',
    href: 'https://www.osegredodosdoces.com.br',
  },
  {
    name: 'Oca Store',
    description: 'Somos designers de produtos, especializados em estética e anatomia do produto.',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_15_f5ecuz.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Oca Store criada pela Solux Creative',
    href: 'https://www.ocastore.com.br',
  },
  {
    name: 'Agencia Somos a Fabula',
    description: 'Site institucional para a Agência Somos a Fabula',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1660656730/2022-08-16_2_azlynx.png',
    imageAlt: 'Imagem do site da Agencia Somos a Fabula criada pela Solux Creative',
    href: 'https://www.somosafabula.com.br',
  },
  {
    name: 'RL Ar-condicionado',
    description: 'Site para a empresa RL Ar-condicionado',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_18_ubutno.png',
    imageAlt: 'Imagem do site do RL Ar-condicionado criada pela Solux Creative',
    href: 'https://www.rlarcondicionado.com.br',
  },
  {
    name: 'Dona Mineira',
    description: 'Site institucional para a Dona Mineira',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274848/2022-04-06_19_eofjvc.png',
    imageAlt: 'Imagem do site  da Dona Mineira criada pela Solux Creative',
    href: 'https://www.donamineira.com',
  },
  {
    name: 'Doc Soluções',
    description: 'Site institucional para a Doc Soluções',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649275689/2022-04-06_20_sad2fp.png',
    imageAlt: 'Imagem do site da Doc Soluções criada pela Solux Creative',
    // href: 'https://www..com.br',
  },
]

export default function Clients() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <Nav />
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900">Nossos Clientes </h2>

              <div className="mt-6 mb-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="w-full h-full object-center object-cover"
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

      <Footer />
      <SeloTray />
    </div>

  )
}
