import { MegaphoneIcon } from '@heroicons/react/24/outline'

export default function BannerHead() {
  return (
    <div className="bg-teal-500">
      <div className="mx-auto max-w-7xl py-1 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex  items-center mr-6">
            <span className="flex rounded-lg bg-gradient-to-tr from-sky-800 to-teal-500 motion-safe:animate-pulse p-2">
              <MegaphoneIcon className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">Veja nosso nova opção para Revenda!</span>
              <span className="hidden md:inline">Novidade! Veja nosso nova opção para Revenda.</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="/revenda"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-2 py-1 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Saiba mais
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}
