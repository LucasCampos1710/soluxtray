import { useEffect } from "react"
import { parseCookies, setCookie, destroyCookie} from  "nookies"

interface CookiesVisibleProps {
  visible: boolean;
  onClose: () => void;
  getInitialProps: () => [];
}

  function handleClick() {
    const cookies = parseCookies()
      console.log({cookies})

      setCookie(null, "fromClient", 'value', {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        })
  }


   function handleClearCookie() {
    destroyCookie(null, "fromClient")
    console.log(destroyCookie)
  }

export default function PoliticPrivacity({ visible, onClose, getInitialProps }: CookiesVisibleProps) {
  

        useEffect(() => {
   function handleKeyDown(event: KeyboardEvent) {
      

      if (event.key === "Enter") {
        
        onClose();
        getInitialProps();
      }
      
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      return removeEventListener("keydown", handleKeyDown);
    }
  }, [onClose, getInitialProps]);

  if (!visible) {
    return null;
  }


  return (
    <>
      <section 
      className="bg-gray-300 text-gray-700 p-5">
        <strong className="">
          Usamos cookies em nosso site para oferecer a você a experiência mais relevante, lembrando suas preferências e visitas repetidas. Ao clicar em <strong>“Aceitar os termos”</strong>, você concorda com a nossa Politica de Privacidade. No entanto, você pode clicar no botão "Rejeitar os Cookies" para rejeitar o uso de cookies.
        </strong>

        <div className="flex space-between gap-4 mt-4">
          <a href="/privacy-policy" className="p-2 text-gray-800 hover:opacity-60">Ver Politica de Privacidade</a>

        <button 
        type="button" 
        onClick={() => {
          onClose()
          handleClick();
        }}
        
        className="bg-teal-accent-700 hover:bg-opacity-60 text-gray-100 p-2 rounded-lg">
          Aceitar os termos
        </button>
        <button 
        type="button" 
        onClick={() => {
          onClose();
          handleClearCookie()
        }}
        
        className=" hover:text-opacity-70 text-gray-800 p-2 rounded-lg">
          Rejeitar os Cookies
        </button>
        </div>
      </section>
    </>
  )
}