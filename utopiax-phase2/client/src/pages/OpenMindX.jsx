import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const WORK_WITH_US = [
  'Launch new ideas or develop new products',
  'Stimulate critical thinking and creativity',
  'Mandate individual responsibility and thought leadership',
  'Impact the market, the economy and the local community',
  'Manage opportunities and challenges',
  'Implement fearless change',
  'Integrate accountability and social responsibility',
  'Unleash the capacity for imagination and improvisation',
]

function OpenMindX() {
  return (
    <div>
      <PageHero
        eyebrow="OpenMindX"
        title="Speaking"
        lead="To change the world you have to have vision. You need to dream out loud and think big. You need to open your mind and let ideas flow."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-6 font-body text-lg leading-relaxed text-gray-700">
          <p>
            Christina delivers keynotes that will challenge you to change your future and
            impact the world. When she isn't creating innovation programs and Xperiences, she
            is sharing knowledge at conferences and workplace gatherings.
          </p>
          <p>
            Anything is possible. Christina's keynotes are purposeful, honest and real. They
            are interactive and entertaining.
          </p>
          <p>
            Christina has presented and facilitated at Vivid Ideas, SingularityU Australia
            Summit, Creative Innovation, PCOC and other national and international events.
          </p>
          <p>
            Listed are our designed keynotes. Christina's insatiably curious mind means she is
            always learning and therefore introducing new material, new Xperiences and new
            ways to work a future we are proud to leave as a legacy for future generations.
          </p>
          <p>Christina designs customised presentations by request.</p>

          <blockquote className="rounded-2xl border-l-4 border-brand-red bg-gray-50 p-6 font-display text-xl italic text-brand-black shadow-[0_8px_30px_rgba(250,62,50,0.08)]">
            "Christina is an Entrepreneurial Futurist and Business Accelerator. Her deep
            expertise is matched by unrivalled passion. She is a gifted mentor who can future
            proof your business."
            <footer className="mt-3 font-body text-sm not-italic text-gray-500">
              — Louise Karch, Author, Namefluence
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-brand-black">Programs</h2>
          <div className="mt-6 space-y-6 font-body text-lg leading-relaxed text-gray-700">
            <p>
              We are Creativity and Innovation catalysts. At UtopiaX we inspire business
              growth, working with corporates, government organisations, SME's and Start-ups.
              Our products are customised Xperiences and include innovation and leadership
              programs, one-on-one consultations, workshops and longer-term sessional
              programs.
            </p>
            <p>
              IdeationWorX is the bridge between imagination and execution. It is the
              conception, the creation, the formation. It is in the moment before sleep, and
              in the moment before awake. It can be big and bold or simple and elegant,
              incremental or sustainable, disruptive or radical.
            </p>
            <p>Ideas are great. Without execution they are useless. We action ideas.</p>

            <div>
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Work with us to:
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {WORK_WITH_US.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Manage a team? We engage in an innovation conversation with you and produce a
              training needs analysis. We then customise our workshops and programs to suit
              your specific requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-bold text-brand-black">
            Featured Keynotes
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* TODO: map from API */}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-red px-8 py-3 font-body font-semibold text-white shadow-[0_4px_14px_rgba(250,62,50,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Book a keynote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OpenMindX
