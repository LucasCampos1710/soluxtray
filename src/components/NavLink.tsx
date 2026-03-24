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
      className="text-zinc-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-300 px-4 py-2 rounded-full text-sm font-semibold data-[active=true]:text-violet-700 data-[active=true]:bg-violet-100"
      href={href}
    >
    {children}
    </Link>
  )
}