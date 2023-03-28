import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

const newContactRevFormValidattionSchema = zod.object({
  name: zod.string().min(3, 'Informe o seu nome'),
  email: zod.string().min(3, 'Informe um email'),
  phone: zod.number(),
  city: zod.string().min(3, 'Informe a sua cidade'),
  uf: zod.string().min(2, 'Informe o estado da sua cidade'),
  work: zod.string().min(2, 'Responda sim ou não'),
  nf: zod.string().min(2, 'Responda sim ou não'),
  experience: zod.string(),
})

// interface FormContactData {
//   name: string
//   email: String
//   phone: number
//   city: string
//   uf: string
//   work: string
//   experience: string
// }

type FormContactData = zod.infer<typeof newContactRevFormValidattionSchema>

export default function Revenda() {
  const { register, handleSubmit, watch, reset } = useForm<FormContactData>({
    resolver: zodResolver(newContactRevFormValidattionSchema),
    defaultValues: {
      name: '',
      email: '',
      phone:  0,
      city: '',
      uf: '',
      work: '',
      nf: '',
      experience: ''
    }
  })

  function handleSubmitForm(data: FormContactData) {
    if(data.experience.length < 30) {
      alert('Preencher pelo menos 30 caracteres no campo de experiência')
    } else {  
      window.open(`https://api.whatsapp.com/send?phone=5512991316484&text=Meu%20nome%20é%20${data.name},%20${data.email}%20${data.city}%20${data.uf}%20${data.work}%20${data.nf}%20${data.experience}%20gostaria%20de%20maiores%20informações%20sobre%20revenda`)
      reset();
    }
  }

  const formInput = watch('experience')
  const isSubmitDisabled = !formInput

  return(
    <>
     <Head>
        <title>Revenda Solux</title>
      </Head>
    <div className="bg-white bg-gray-900">
    <div className="bg-deep-purple-accent-700">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/lucascampos/image/upload/v1645131437/Logo-Solux-Creative-Branco.2665e34.fd79d246bdb7afe0a235aa53d946f5be_adlnqc.png"
                  width={300}
                  height={150}
                  alt="logo Solux Creative"
                />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Programa de Revendas</span>
                </span>
              </h2>
              <p className="text-base text-indigo-100 md:text-xl">
                Faça parte do Programa de Revenda da <strong className="uppercase text-teal-accent-400">Solux Creative</strong>
              </p>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20da%20revenda"

                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                Quero ser um Revendedor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  

      <main className="bg-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Novidade
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            </span>
            Conheça as vantagens da Revenda <strong className="uppercase text-teal-accent-400">Solux Creative</strong>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
            Revenda, lucre e venha fazer parte do nosso time!
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-teal-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Ganhe comissão por resultado</h6>
            <p className="text-sm text-gray-900">
              A cada venda você receberá uma comissão que aumenta de acordo com o volume de fechamentos.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-teal-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">A Solux Creative oferece todo suporte ao cliente</h6>
            <p className="text-sm text-gray-900">
              Você só precisa se preocupar em encontrar o cliente certo e fazer a venda que nós cuidamos da implementação, configurações, parametrizações, treinamento e suporte!
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-teal-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Treinamento e capacitação do Parceiro
            </h6>
            <p className="text-sm text-gray-900">
              Você terá todo o suporte, dicas e conteúdos para ajudar a alavancar os negócios.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-teal-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">e-Commerce mais completo do mercado</h6>
            <p className="text-sm text-gray-900">
              Somos a plataforma mais completa e sólida do mercado. Temos um time que trabalha muito para entregar o melhor para os clientes e parceiros.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://api.whatsapp.com/send?phone=5512991316484&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20da%20revenda"

          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
        >
          Quero ser Revenda
        </a>
      </div>
    </div>
      </main>

      
      <section className="bg-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1de9b6" fill-opacity="1" d="M0,224L80,192C160,160,320,96,480,96C640,96,800,160,960,176C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <div className="max-w-3xl relative lg:bottom-[19rem] md:bottom-[15rem]  sm:bottom-14 px-6  py-16 mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-100">
            Somos especialistas na criação de lojas virtuais de alta performance.
            </h1>
        </div>

    <div className="max-w-3xl px-6  mx-auto text-center relative md:bottom-56 bottom-10">
        <h1 className="text-3xl font-semibold text-teal-accent-400">Preencha o formulário abaixo e receba mais informações</h1>
        <p className="max-w-md mx-auto mt-5 text-gray-400">Entre em contato</p>

          <form onSubmit={handleSubmit(handleSubmitForm)} action="" className="flex flex-col mt-8 space-y-3 ">
            <label htmlFor="name" className="text-gray-700 text-left">Nome</label>
            <input id="name" type="text" {...register("name")} className="px-4 py-2  border rounded-md sm:mx-2 bg-gray-900 text-gray-300 border-gray-600 focus:border-teal-accent-400 focus:border-teal-accent-300 focus:outline-none focus:ring focus:ring-teal-accent-300 focus:ring-opacity-40" placeholder="Nome"/>
            
            <label htmlFor="name" className="text-gray-700 text-left">Email</label>
            <input id="email" type="email" {...register("email")} className="px-4 py-2  border rounded-md sm:mx-2 bg-gray-900 text-gray-300 border-gray-600 focus:border-teal-accent-400 focus:border-teal-accent-300 focus:outline-none focus:ring focus:ring-teal-accent-300 focus:ring-opacity-40" placeholder="Email "/>
            
            <label htmlFor="name" className="text-gray-700 text-left">Telefone</label>
            <input id="phone" type="number" {...register("phone")} className="px-4 py-2  border rounded-md sm:mx-2 bg-gray-900 text-gray-300 border-gray-600 focus:border-teal-accent-400 focus:border-teal-accent-300 focus:outline-none focus:ring focus:ring-teal-accent-300 focus:ring-opacity-40" placeholder="Telefone"/>
            
            <label htmlFor="name" className="text-gray-700 text-left">Cidade</label>
            <input id="city" type="text" {...register("city")} className="px-4 py-2  border rounded-md sm:mx-2 bg-gray-900 text-gray-300 border-gray-600 focus:border-teal-accent-400 focus:border-teal-accent-300 focus:outline-none focus:ring focus:ring-teal-accent-300 focus:ring-opacity-40" placeholder="Cidade"/>
            
            <label htmlFor="name" className="text-gray-700 text-left">Estado</label>
            <input id="UF" type="text" {...register("uf")} className="px-4 py-2  border rounded-md sm:mx-2 bg-gray-900 text-gray-300 border-gray-600 focus:border-teal-accent-400 focus:border-teal-accent-300 focus:outline-none focus:ring focus:ring-teal-accent-300 focus:ring-opacity-40" placeholder="Estado"/>
            
            <label htmlFor="name" className="text-gray-700 text-left">Você já trabalha com Digital</label>
            <input id="work" type="text" {...register("work")} className="px-4 py-2  border rounded-md sm:mx-2 bg-gray-900 text-gray-300 border-gray-600 focus:border-teal-accent-400 focus:border-teal-accent-300 focus:outline-none focus:ring focus:ring-teal-accent-300 focus:ring-opacity-40" placeholder="Você ja trabalha na área digital"/>

            <h2 className="text-left text-gray-700">Emite Nota Fiscal?</h2>
            <div className="flex flex-row flex-wrap">
            <input id="name" type="text" {...register("nf")} className="px-4 py-2  border rounded-md sm:mx-2 bg-gray-900 text-gray-300 border-gray-600 focus:border-teal-accent-400 focus:border-teal-accent-300 focus:outline-none focus:ring focus:ring-teal-accent-300 focus:ring-opacity-40" placeholder="Sim ou Não?"/>
            </div>

            <label htmlFor="experience" className="text-left text-gray-700">Resuma sua experiência na área</label>
            <textarea id="experience" {...register("experience")}  className="bg-gray-800 rounded text-gray-100 p-3 focus:outline-none focus:border-teal-accent-700 focus:ring focus:ring-teal-accent-700" placeholder="Conte um pouco sobre sua experiência"></textarea>

            <button disabled={isSubmitDisabled}  type="submit" className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-accent-700 rounded-md sm:mx-2 hover:bg-teal-600 focus:outline-none focus:bg-teal-accent-500 disabled:bg-opacity-5">
                Solicitar mais informações
            </button>
            </form>
    </div>
</section>
      <Footer />
    </div>
    </>
  )
}