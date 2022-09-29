import Image from "next/image";

export default function Index() {
  return (
    <>
      <main >
        <div className="min-h-screen">
          <div className="min-h-screen bg-[url('https://res.cloudinary.com/lucascampos/image/upload/v1664486140/bg-ecommerce_xa6lub.png')] bg-cover bg-no-repeat">
            <div className="flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.png"
                width={300}
                height={150}
              />
            </div>
            <div className="bg-gradient-to-r from-zinc-50/50 to-zinc-200 flex flex-col w-2/5 h-96 justify-center items-center absolute left-1/2 mt-4 rounded-2xl shadow-lg shadow-slate-400/50">
                <span className="outline outline-offset-4 p-1 outline-teal-300 rounded-full mb-10 motion-safe:animate-bounce">Sua oportunidade chegou</span>
              <div className="  text-center text-black ">
                <strong className="text-4xl">A forma mais fácil e acessível para você vender online</strong>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <a className="shadow-lg shadow-teal-500/60 bg-gradient-to-r from-cyan-500 to-green-300 rounded-md p-2 text-white   hover:ring hover:ring-cyan-400 hover:motion-safe:animate-bounce transition" href="/home">Quero um e-commerce</a>
                <a className=" shadow-lg shadow-sky-500/60 bg-gradient-to-r from-sky-600 to-green-400 rounded-md p-2 text-white   hover:ring hover:ring-cyan-400 hover:motion-safe:animate-bounce transition" href="/revenda">Quero ser uma Revenda</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

