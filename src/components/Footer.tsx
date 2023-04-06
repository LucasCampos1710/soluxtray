import Image from "next/image";
import Link from 'next/link'

export default function Footer() {
  return(
    <footer className="relative mt-16 bg-deep-purple-accent-400">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              title="Solux Creative"
              className="inline-flex items-center"
            >
              <Image 
                src="https://res.cloudinary.com/lucascampos/image/upload/v1645131437/Logo-Solux-Creative-Branco.2665e34.fd79d246bdb7afe0a235aa53d946f5be_adlnqc.png" alt="Logo Solux Creative"
                width={120}
                height={80}
              />
              
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                A Solux Creative tem em seu DNA, o avanço tecnológico e capacita seus clientes/parceiros para utilizar a plataforma de e-Commerce da
                  maneira mais prática possível e sem complicações, com profissionais com mais de 30 anos de experiência em Tecnologia de Ponta.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Paginas
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/ecommerce"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    e-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/revenda"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Plano de Revenda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clientes"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Clientes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Contato
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Fale com um Consultor
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://api.whatsapp.com/send?phone=5512974047543"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://api.whatsapp.com/send?phone=5512991059844"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Financeiro
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-de-privacidade"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Política de Privacidade

                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2023 Solux Creative. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <Link
              href="#"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <Image 
              src="https://res.cloudinary.com/lucascampos/image/upload/v1670419633/seal-1-square_yevzgn.svg"
              width={80}
              height={80}
              alt="logo certificação tray" />
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  )
}