import Image from 'next/image';

const clients = [
  { name: 'Filipe Toledo Surf Store', src: 'https://res.cloudinary.com/lucascampos/image/upload/v1696341927/logo_164874822416855_aawu8g.png' },
  { name: 'Maria Calopsita', src: 'https://res.cloudinary.com/lucascampos/image/upload/v1696341977/logo_161478488133731_jy25uy.png' },
  { name: 'Divinus', src: 'https://res.cloudinary.com/lucascampos/image/upload/v1696342381/1689366147_logo_166663651011117_fo5twp.png' },
  { name: 'Casa da Madeira', src: 'https://res.cloudinary.com/lucascampos/image/upload/v1696349805/logo_163242557743522_vutbv5.png' },
  { name: 'Diário de Taubaté e região', src: 'https://res.cloudinary.com/lucascampos/image/upload/v1733765714/logo_diario_de_taubate_1_gl7qhe.jpg' },
  { name: 'Brother´s Marine', src: 'https://res.cloudinary.com/lucascampos/image/upload/v1739546176/ecgbawsunxx9rakb14d4.png' }
];

export function ClientsMarquee() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-center text-sm font-semibold tracking-wide text-zinc-400 uppercase">
          Empresas que confiam em nossa tecnologia
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="flex space-x-12 sm:space-x-24 animate-marquee min-w-max px-6">
          {/* First set of logos */}
          {clients.map((client, i) => (
            <div key={`client-1-${i}`} className="flex items-center justify-center w-[150px] shrink-0">
              <Image
                src={client.src}
                alt={client.name}
                width={150}
                height={80}
                className="max-h-[80px] w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {clients.map((client, i) => (
            <div key={`client-2-${i}`} className="flex items-center justify-center w-[150px] shrink-0">
              <Image
                src={client.src}
                alt={client.name}
                width={150}
                height={80}
                className="max-h-[80px] w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient fades for the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 max-w-[150px] bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 max-w-[150px] bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
