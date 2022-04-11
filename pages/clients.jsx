import Nav from '../components/Nav/Nav'
import SeloTray from '../components/seloTray'

const callouts = [
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
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.bluelord.com.br',
  },
  {
    name: 'Casa da Madeira',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_2_yvsvji.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.casadamadeira.com.br',
  },
  {
    name: 'Toledo Surf',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274845/2022-04-06_3_wnkd1y.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.filipetoledo.com.br',
  },
  {
    name: 'TNC',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274845/2022-04-06_4_meomp1.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.tncsunglass.com.br',
  },
  {
    name: 'All Presents',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_5_wdmnlc.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.lojaallpresentes.com.br',
  },
  {
    name: 'Loja Yumi Pesca',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_6_xlxr0r.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.lojayumipesca.com.br',
  },
  {
    name: 'Econorte',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_7_uzu6ka.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.lojaeconorte.com.br',
  },
  {
    name: 'LAF Atacado',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_8_bf2kqj.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.lafatacado.com.br',
  },
  {
    name: 'Familia Pet',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274846/2022-04-06_9_nhatfm.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.familiapetstore.com.br',
  },
  {
    name: 'Basico UD',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_12_fpjm1j.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.basicoud.com.br',
  },
  {
    name: 'Tactus Store',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_12_fpjm1j.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.tactusstore.com.br',
  },
  {
    name: 'Coco Beach',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_13_je85x8.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.cocobeach.com.br',
  },
  {
    name: 'Padaria O Segredo dos Doces',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_14_vq3wo7.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.osegredodosdoces.com.br',
  },
  {
    name: 'Oca Store',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_15_f5ecuz.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.ocastore.com.br',
  },
  {
    name: 'Agencia Somos a Fabula',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_16_hzf3qh.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.somosafabula.com.br',
  },
  {
    name: 'RL Ar-condicionado',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274847/2022-04-06_18_ubutno.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.rlarcondicionado.com.br',
  },
  {
    name: 'Dona Mineira',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649274848/2022-04-06_19_eofjvc.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
    href: 'https://www.donamineira.com',
  },
  {
    name: 'Doc Soluções',
    description: 'Loja especializada em vendas de produtos para Calopsitas',
    imageSrc: 'https://res.cloudinary.com/lucascampos/image/upload/v1649275689/2022-04-06_20_sad2fp.png',
    imageAlt: 'Imagem da loja virtual(e-commerce) da Maria Calopsita criada pela Solux Creative',
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
                      <a href={callout.href}>
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

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center text-purple-800"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.svg" alt="Lucas Campos" className="h-10 ml-2" />
        </a>
      </footer>
      <SeloTray />
    </div>

  )
}
