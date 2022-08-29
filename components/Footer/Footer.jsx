export default function Footer() {
  return (
    <footer className="w-full  border-t-2 border-bg bg-gradient-to-b from-zinc-100 to-violet-300">

      <div className="lg:flex justify-center items-center text-center lg:gap-28 py-10">
        <div className="mb-5 lg:mb-0">
          <h1 className="font-semibold">Contato</h1>
          <p className="text-violet-700 font-semibold">Whatsapp: <a href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20e-commerce" className="text-gray-500 text-base">(12) 9 9131-6484</a></p>
          <p className="text-violet-700 font-semibold">Email:<a href="mailto:contato@soluxcreative.com.br" className="text-gray-500 text-base">contato@soluxcreative.com.br</a></p>
        </div>
        <div className="mb-5 lg:mb-0">
          <h1 className="font-semibold" >Suporte</h1>
          <p className="text-violet-700 font-semibold">Whatsapp: <a href="https://api.whatsapp.com/send?phone=5512996121785" className="text-gray-500 text-base">(12) 9 9612-1785</a></p>
          <p className="text-violet-700 font-semibold">Email:<a href="mailto:suporte@soluxcreative.com.br" className="text-gray-500 text-base">suporte@soluxcreative.com.br</a></p>
        </div>
        <div>
          <h1 className="font-semibold">Financeiro</h1>
          <p className="text-violet-700 font-semibohttps://res.cloudinary.com/lucascampos/image/upload/v1628081474/Logo-Solux-Creative-Color_scwv0r.pngld">Whatsapp: <a href="https://api.whatsapp.com/send?phone=5512991059844" className="text-gray-500 text-base">(12) 9 9105-9844</a></p>
          <p className="text-violet-700 font-semibold">Email:<a href="mailto:financeiro@soluxcreative.com.br" className="text-gray-500 text-base">financeiro@soluxcreative.com.br</a></p>
        </div>
      </div>

      < div className="flex items-center justify-center">
        <span>Powered by{ ' ' }
          <img src="" alt="Lucas Campos" className="h-20 ml-2" />
        </span>
      </div>

    </footer>

  )
}