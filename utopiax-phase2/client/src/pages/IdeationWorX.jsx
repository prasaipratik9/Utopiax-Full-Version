// PLACEHOLDER — Lorem ipsum, source site down, replace before client sign-off
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const LOREM_PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const LOREM_SHORT =
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

const LOREM_BULLETS = [
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor incididunt',
]

function IdeationWorX() {
  return (
    <div>
      <PageHero
        eyebrow="IdeationWorX"
        title="Startup Bootcamps & Innovation Strategy"
        lead={LOREM_SHORT}
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]">
            <h2 className="font-display text-2xl font-bold text-brand-maroon">
              Startup Bootcamps
            </h2>
            {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
            <p className="mt-4 font-body leading-relaxed text-gray-700">{LOREM_PARAGRAPH}</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]">
            <h2 className="font-display text-2xl font-bold text-brand-maroon">
              Innovation Strategy
            </h2>
            {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
            <p className="mt-4 font-body leading-relaxed text-gray-700">{LOREM_PARAGRAPH}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-brand-maroon">Programs</h2>
          {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
          <ul className="mt-6 space-y-3 font-body text-lg text-gray-700">
            {LOREM_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-rose" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <Link
            to="/xperiences"
            className="inline-block rounded-full border-2 border-brand-maroon px-8 py-3 font-body font-semibold text-brand-maroon transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-maroon hover:text-white"
          >
            View workshops
          </Link>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-brand-rose px-8 py-3 font-body font-semibold text-white shadow-[0_4px_14px_rgba(255,100,82,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Enquire
          </Link>
        </div>
      </section>
    </div>
  )
}

export default IdeationWorX
