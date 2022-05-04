import SeloTray from '../components/seloTray'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home'

export default function Example() {
  return (
    <div>
      <Nav />
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
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Somos especialistas na criação </span>{ ' ' }
                  <span className="block text-violet-600 xl:inline">de lojas virtuais de alta performance.</span>
                </h1>
                <p className="mt-3 text-base font-semibold text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Layouts modernos, integração com os maiores marketplaces e
                  os melhores recursos para personalizar seu e-commerce.

                </p>
                
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://res.cloudinary.com/lucascampos/image/upload/v1628080930/bg-dev_hucmqi.svg"
            alt=""
          />
        </div>
      </div>
      <Home />
      <Footer />
      <SeloTray />
    </div>

  )
}

