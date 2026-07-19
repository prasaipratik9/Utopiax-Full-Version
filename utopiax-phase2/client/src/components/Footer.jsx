import { Link } from 'react-router-dom'

const SOCIALS = [
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.1 3.77-2.1C20.9 8.6 21 11.3 21 14.2V21h-4v-6.1c0-1.45-.03-3.3-2.02-3.3-2.03 0-2.34 1.58-2.34 3.2V21H9z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.2 3.57c-2.4 0-4.05 1.47-4.05 4.17V9.9H7.5V13h2.65v8Z" />
      </svg>
    ),
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-maroon text-white">
      <div className="border-b border-white/10 bg-brand-rose/15 px-6 py-4 text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-wide text-brand-rose">
          Xperience Seekers call +61 000 000 000
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-xl font-bold text-white">
              Utopia<span className="text-brand-red">X</span>
            </Link>
            <p className="mt-3 font-body text-sm text-gray-400">
              Creativity and Innovation catalysts.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gray-300">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 font-body text-sm text-gray-400">
              <li>info@utopiax.global</li>
              <li>+61 000 000 000</li>
              <li>Australia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gray-300">
              Follow
            </h3>
            {/* TODO: link socials to real profiles */}
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <span
                  key={social.name}
                  role="button"
                  tabIndex={0}
                  aria-label={social.name}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-rose hover:text-brand-rose"
                >
                  {social.icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center font-body text-xs text-gray-400">
          &copy; {year} UtopiaX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
