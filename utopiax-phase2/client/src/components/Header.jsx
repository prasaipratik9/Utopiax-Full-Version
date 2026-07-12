import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'OpenMindX', to: '/openmindx' },
  { label: 'IdeationWorX', to: '/ideationworx' },
  { label: 'LumiereX', to: '/lumierex' },
  { label: 'Xperiences', to: '/xperiences' },
  { label: 'Media', to: '/media' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `font-body text-sm font-medium transition-colors hover:text-brand-red ${
      isActive ? 'text-brand-red' : 'text-brand-black'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold text-brand-black">
          Utopia<span className="text-brand-red">X</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-brand-black" />
          <span className="h-0.5 w-6 bg-brand-black" />
          <span className="h-0.5 w-6 bg-brand-black" />
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-4 border-t border-gray-200 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
