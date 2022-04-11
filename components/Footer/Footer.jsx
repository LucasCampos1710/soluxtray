export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center text-purple-800"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{ ' ' }
        <img src="/logo.svg" alt="Lucas Campos" className="h-10 ml-2" />
      </a>
    </footer>

  )
}