"use client"

import { Inter } from 'next/font/google'
import { CircleWavyCheck, CheckCircle } from 'phosphor-react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
       <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 pt-7 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                  <span className="block xl:inline uppercase">Somos especialistas na criação </span>{' '}
                  <span className="block text-violet-600 xl:inline uppercase">de lojas virtuais de alta performance.</span>
                </h1>
                <div className=" flex pt-10 text-base font-semibold text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <CheckCircle color="#2da99b" size={32} weight="duotone" className="mr-1" />
                  <p>Suporte <strong>Humanizado</strong> em todo o processo</p>
                  
                </div>

                <div className=" flex mt-10 text-base font-semibold text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <CheckCircle color="#2da99b" size={32} weight="duotone" className="mr-1" />
                  <p>Receba <strong>Pagamentos</strong> via Cartão de Crédito, PIX ou Boleto</p>
                </div>

                <div className="flex mt-3 text-base font-semibold text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <CheckCircle color="#2da99b" size={44} weight="duotone" className="mr-1" />
                  <p>Integre com <strong>Marketplaces,</strong> Correios, Melhor Envios, Transportadoras e ERPs.</p>

                </div>

                <div className="flex selection:mt-3 text-base font-semibold text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <CheckCircle color="#2da99b" size={32} weight="duotone" className="mr-1" />
                  <p>Produtos, <strong>Visitas</strong> e Usuários ilimitados.</p>

                </div>

                <div className="pt-6 w-full">
                  <a href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"
                    className="px-10 bg-gradient-to-r from-sky-600 to-green-500 p-3 shadow-lg shadow-sky-500/50 rounded-lg  text-white hover:brightness-125 focus:outline-none focus:shadow-outline"
                  >
                    Fale com um consultor
                    <span className="sr-only">Fale com um consultor</span></a>
                </div>

              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://res.cloudinary.com/lucascampos/image/upload/v1628080930/bg-dev_hucmqi.svg"
            alt=""
            height={2000}
            width={2000}
          />
        </div>
      </div>

      <section className="bg-deep-purple-accent-400">
        <div className="relative overflow-hidden">
          <div className="pt-16 md:pb-80 sm:pt-24  lg:pt-40 lg:pb-48">
            <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-xl">
                <h1 className="text-4xl font font-extrabold tracking-tight text-teal-accent-700 sm:text-6xl">
                  Um mundo de possibilidades para o seu negócio
                </h1>
                <p className="mt-4 text-xl text-white">
                  Conte com o nosso melhor Atendimento,
                  você terá todo o carinho e atenção de nossa equipe para te ajudar a ter sucesso em todo o processo. Nada de robôs, nosso Atendimento é humanizado.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                  >
                    <div className="absolute  sm:top-0 sm:translate-x-8 lg:left-1/3 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 ">
                          <div className=" rounded-lg overflow-hidden opacity-0 lg:opacity-100">
                            <Image
                              src="https://res.cloudinary.com/lucascampos/image/upload/v1651171255/3240_qklgue.png"
                              alt=""
                              className="w-full h-full object-center object-cover"
                              height={2000}
                              width={2000}
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='md:left-48 md:relative bg-gradient-to-tr from-deep-purple-accent-400 to-teal-accent-400  md:rounded-full   md:w-8/12 md:bottom-16 '>
        <div>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-2xl md:ml-10">
              <span className="block">Nos envie uma mensagem contando sua </span>
              <span className="block text-white">necessidade que teremos o prazer em te ajudar.</span>
            </h2>
            <div className="relative md:right-10  mt-8 flex :justify-center :text-center lg:mt-0 lg:flex-shrink-0 ">

            <div className="md:ml- md:inline-flex rounded-md shadow sm:flex sm:justify-center sm:text-center left-17 relative md:left-3">
                <a
                  href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"
                  className="md:inline-flex sm:flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-cyan-500 hover:text-white"
                >
                  Fale com um consultor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-white mb-10 flex justify-center align-center">
        <div className="mt-10 ">
            <div className="relative grid grid-cols-1 gap-6 px-10  md:grid-cols-2">
              <Image
                src='https://res.cloudinary.com/lucascampos/image/upload/v1672073145/3840191_t0j2mg.png'
                width={300}
                height={550}
                className='bg-cover md:ml-28'
                alt="image teste"
              />
              <div className='flex flex-col p-6' >
                <strong className='outline outline-offset-2 outline-cyan-300 rounded-full px-2 mb-4 w-24'>Multicanal</strong>

                <strong className='text-2xl mb-5'>Venda seus produtos em diversos canais</strong>

                <div>
                  <ul>
                    <li className='flex mb-5'>
                      <CircleWavyCheck size={42} color='#2da99b' className='mr-2'/>
                      Seus produtos à venda nas maiores lojas do Brasil como Magalu, Shopee, Mercado Livre e muitas outras.
                      </li>
                    <li className='flex mb-5'>
                      <CircleWavyCheck size={52} color='#2da99b' className='mr-2'/>
                     Habilite a sacolinha do Instagram, Google Shopping e Facebook Shop e exiba seus produtos para milhares de pessoas todos os dias.
                      </li>
                    <li className='flex'>
                      <CircleWavyCheck size={32} color='#2da99b' className='mr-2'/>
                      Venda no computador, tablet ou celular.
                      </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative grid grid-cols-1 gap-6 px-10 mt-10 md:grid-cols-2">
              
              <div className='flex flex-col p-6' >
                <strong className='outline outline-offset-2 outline-cyan-300 rounded-full px-2 mb-4 w-24'>Marketing</strong>

                <strong className='text-2xl mb-5'>Crie diversas promoções e ofereça conteúdos de qualidade</strong>

                <div>
                  <ul>
                    <li className='flex mb-5'>
                      <CircleWavyCheck size={32} color='#2da99b' className='mr-2'/>
                      Landing pages fantásticas.
                      </li>
                    <li className='flex mb-5'>
                      <CircleWavyCheck size={32} color='#2da99b' className='mr-2'/>
                     Ofereça Promoções com cupons de desconto e frete grátis.
                      </li>
                    <li className='flex mb-5'>
                      <CircleWavyCheck size={32} color='#2da99b' className='mr-2'/>
                      Conecte sua loja às redes sociais.
                      </li>
                    <li className='flex mb-5'>
                      <CircleWavyCheck size={42} color='#2da99b' className='mr-2'/>
                      Tenha uma loja otimizada para os mecanismos de busca (SEO) e melhore o seu posicionamento no Google.
                      </li>
                    <li className='flex'>
                      <CircleWavyCheck size={32} color='#2da99b' className='mr-2'/>
                      Tenha seu próprio blog integrado à sua loja virtual.
                      </li>
                  </ul>
                </div>
              </div>
              <Image
                src='https://res.cloudinary.com/lucascampos/image/upload/v1672066778/otimizado-para-marketing-e-seo-800_bxl5zb.webp'
                width={400}
                height={200}
                className='bg-cover md:ml-28'
                alt="Imagem de grafico de vendas e valores totais"
              />
              
            </div>
        </div>
      </section>
    </main>
  )
}
