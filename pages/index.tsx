import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import PoliticPrivacity from "../components/Popup/PoliticPrivacity";
import { parseCookies, setCookie } from "nookies"


export default function Index({cookies}) {
const [isCookiesVisible, setIsCookiesVisible] = useState(true)

// PoliticPrivacity.getInitialProps = async function(ctx) {
//  cookies = parseCookies(ctx)

//   setCookie(ctx, "fromGetInitialProps", "value", {
//     maxAge: 30 * 24 * 60 * 60,
//     path: "/"
//   })

//   return { cookies }
// }

function handleCookieClick() {
  setIsCookiesVisible(false)
}

  return (
    <>
    <PoliticPrivacity 
      visible={isCookiesVisible}
      onClose={handleCookieClick}
      getInitialProps={cookies}
    />
      <main >
        <div className="min-h-screen">
          <div className="min-h-screen bg-[url('https://res.cloudinary.com/lucascampos/image/upload/v1664486140/bg-ecommerce_xa6lub.png')] bg-cover bg-no-repeat">
            <div className="flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                width={300}
                height={150}
                alt='img compra online'
              />
            </div>
            <div className="bg-gradient-to-r from-zinc-50/50 to-zinc-200 flex flex-col md:w-2/5 sm:w-4/5 h-96 justify-center items-center absolute md:left-1/2 mt-4 rounded-2xl shadow-lg shadow-slate-400/50">
                <span className="outline outline-offset-4 p-1 outline-teal-300 rounded-full mb-10 motion-safe:animate-bounce">Sua oportunidade chegou</span>
              <div className="  text-center text-black ">
                <strong className="md:text-4xl sm:text-2xl">A forma mais fácil e acessível para você vender online</strong>
              </div>

              <div className="md:grid md:grid-cols-2 flex flex-col md:gap-4 mt-8">
                <a className="mb-5 shadow-lg shadow-teal-500/60 bg-gradient-to-r from-cyan-500 to-green-300 rounded-md p-2 text-white   hover:ring hover:ring-cyan-400 hover:motion-safe:animate-bounce transition " href="/home">Quero um e-commerce</a>
                <a className="mb-5 shadow-lg shadow-sky-500/60 bg-gradient-to-r from-sky-600 to-green-400 rounded-md p-2 text-white   hover:ring hover:ring-cyan-400 hover:motion-safe:animate-bounce transition" href="/revenda">Quero ser uma Revenda</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

