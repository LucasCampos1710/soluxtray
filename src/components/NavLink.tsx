"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  children: string
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  const activeHref = usePathname()
  
  return (
    <Link
      data-active={activeHref === href}
      className=" text-zinc-900 hover:bg-gradient-to-tr from-violet-500 to-cyan-600 hover:text-white transition-colors px-3 py-2 mt-1 rounded-md text-sm font-medium border-b border-white/10 data-[active=true]:border-cyan-400"
      href={href}
    >
    {children}
    </Link>
  )
}