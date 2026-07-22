'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/creator', label: 'Creator' },
  { href: '/development', label: 'Development' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/78 backdrop-blur-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg sm:text-xl text-white shrink-0">
            Maskid
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-0.5 sm:gap-2 md:gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.55rem] sm:text-xs md:text-sm font-medium transition-colors relative rounded-md px-1 py-1 md:px-0 md:py-0 ${
                  pathname === item.href
                    ? 'text-blue-300 bg-blue-500/10 md:bg-transparent'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 md:hover:bg-transparent'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-[-8px] left-0 right-0 hidden h-1 bg-gradient-to-r from-blue-400 to-violet-400 md:block"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
