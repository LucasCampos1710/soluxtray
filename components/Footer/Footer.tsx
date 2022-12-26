import Image from "next/image";

export default function Footer() {
  return (
    // <footer className="w-full  border-t-2 border-bg bg-gradient-to-b from-zinc-100 to-violet-300">

    //   <div className="lg:flex justify-center items-center text-center lg:gap-28 py-10">
    //     <div className="mb-5 lg:mb-0">
    //       <h1 className="font-semibold">Contato</h1>
    //       <p className="text-violet-700 font-semibold">Whatsapp: <a href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce" className="text-gray-500 text-base">(12) 9 9131-6484</a></p>
    //       <p className="text-violet-700 font-semibold">Email:<a href="mailto:contato@soluxcreative.com.br" className="text-gray-500 text-base">contato@soluxcreative.com.br</a></p>
    //     </div>
    //     <div className="mb-5 lg:mb-0">
    //       <h1 className="font-semibold" >Suporte</h1>
    //       <p className="text-violet-700 font-semibold">Whatsapp: <a href="https://api.whatsapp.com/send?phone=5512996121785" className="text-gray-500 text-base">(12) 9 9612-1785</a></p>
    //       <p className="text-violet-700 font-semibold">Email:<a href="mailto:suporte@soluxcreative.com.br" className="text-gray-500 text-base">suporte@soluxcreative.com.br</a></p>
    //     </div>
    //     <div>
    //       <h1 className="font-semibold">Financeiro</h1>
    //       <p className="text-violet-700 font-semibold">Whatsapp: <a href="https://api.whatsapp.com/send?phone=5512991059844" className="text-gray-500 text-base">(12) 9 9105-9844</a></p>
    //       <p className="text-violet-700 font-semibold">Email:<a href="mailto:financeiro@soluxcreative.com.br" className="text-gray-500 text-base">financeiro@soluxcreative.com.br</a></p>
    //     </div>
    //   </div>

    //   < div className="flex items-center justify-center">
    //     <span>Powered by{ ' ' }
    //       <img src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png" alt="Lucas Campos" className="h-20 ml-2" />
    //     </span>
    //   </div>

    // </footer>

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
            <a
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
              
            </a>
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
                  <a
                    href="/ecommerce"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    e-Commerce
                  </a>
                </li>
                <li>
                  <a
                    href="/revenda"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Plano de Revenda
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Parceiros
                  </a>
                </li> */}
                <li>
                  <a
                    href="/clients"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Clientes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Contato
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Fale com um Consultor
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5512996121785"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Suporte
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5512991059844"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Financeiro
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Politica de Privacidade

                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Certificações
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Tray
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Jet commerce
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2022 Solux Creative. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/tray"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <Image 
              src="https://res.cloudinary.com/lucascampos/image/upload/v1670419633/seal-1-square_yevzgn.svg"
              width={80}
              height={80}
              alt="logo certificação tray" />
            </a>
            {/* <a
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
