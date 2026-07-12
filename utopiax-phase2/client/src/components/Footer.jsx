import { Link } from 'react-router-dom'

const SOCIALS = ['Instagram', 'LinkedIn', 'Facebook']

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
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
              <li>hello@utopiax.global</li>
              <li>+61 000 000 000</li>
              <li>Australia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gray-300">
              Follow
            </h3>
            {/* TODO: link socials to real profiles */}
            <ul className="mt-3 space-y-2 font-body text-sm text-gray-400">
              {SOCIALS.map((social) => (
                <li key={social}>
                  <span className="cursor-pointer transition-colors hover:text-brand-red">
                    {social}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center font-body text-xs text-gray-500">
          &copy; {year} UtopiaX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
