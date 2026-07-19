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
    `whitespace-nowrap rounded-full px-4 py-2 font-body text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-brand-rose text-white shadow-[0_4px_14px_rgba(255,100,82,0.4)]'
        : 'text-brand-maroon hover:bg-brand-rose/10 hover:text-brand-rose'
    }`

  const mobileLinkClasses = ({ isActive }) =>
    `rounded-2xl px-5 py-3 font-display text-lg font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-brand-rose text-white shadow-[0_4px_14px_rgba(255,100,82,0.4)]'
        : 'text-brand-maroon hover:bg-brand-rose/10 hover:text-brand-rose'
    }`

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-brand-rose/15 bg-white/85 px-6 py-3 shadow-[0_8px_30px_rgba(255,100,82,0.15)] backdrop-blur-md">
        <Link to="/" className="group flex items-center gap-2 font-display text-xl font-bold text-brand-black">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-rose opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-red" />
          </span>
          Utopia<span className="text-brand-red">X</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="relative flex h-6 w-6 flex-shrink-0 flex-col items-center justify-center lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-brand-maroon transition-all duration-300 ${
              isOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-brand-maroon transition-all duration-300 ${
              isOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="mx-auto mt-2 flex max-w-6xl flex-col gap-2 rounded-3xl border border-brand-rose/15 bg-white/95 p-4 shadow-[0_8px_30px_rgba(255,100,82,0.18)] backdrop-blur-md lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={mobileLinkClasses}
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
