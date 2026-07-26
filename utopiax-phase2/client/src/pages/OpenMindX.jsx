import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import XperienceSeekers from '../components/XperienceSeekers.jsx'
import RecentPosts from '../components/RecentPosts.jsx'
import CardArt from '../components/CardArt.jsx'

// TODO: replace hardcoded cards with API data
const KEYNOTES = [
  {
    tag: 'OpenMindX',
    title: 'SingularityU Australia Summit',
    body: "Brings together the world's top speakers and experts on exponentially accelerating technologies.",
    art: 'summit',
  },
  {
    tag: 'OpenMindX',
    title: 'Creativity, Innovation & Business 101',
    body: "Traditional ways of doing things won't cut it anymore. A keynote on how teams — in-house or outsourced — learn to find the gaps and innovate solutions.",
    art: 'business',
  },
  {
    tag: 'OpenMindX',
    title: "Don't Ask Don't Get — The Science of Askology",
    body: 'What are the common traits of successful people, businesses and organisations? A keynote on embedding the behaviours behind Askology into everyday practice.',
    art: 'askology',
  },
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
          <p>
            To book a complimentary appointment with Christina to discuss your specific needs,
            please complete our{' '}
            <Link to="/contact" className="font-semibold text-brand-rose hover:opacity-75">
              enquiry form
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-dashed border-brand-rose/40 bg-red-50 p-8">
            <h3 className="font-display text-xl font-bold text-brand-maroon">Contact Us</h3>
            <p className="mt-3 font-body text-gray-600">Email us at info@utopiax.global</p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-brand-rose px-6 py-2.5 font-body font-semibold text-white shadow-[0_4px_14px_rgba(255,100,82,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>

          <blockquote className="rounded-2xl border-l-4 border-brand-rose bg-gray-50 p-6 font-display text-lg italic text-brand-maroon shadow-[0_8px_30px_rgba(255,100,82,0.08)]">
            "Christina is an Entrepreneurial Futurist and Business Accelerator. Her deep
            expertise is matched by unrivalled passion. She is a gifted mentor who can future
            proof your business."
            <footer className="mt-3 font-body text-sm not-italic text-gray-500">
              — Louise Karch, Author, Namefluence
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <header>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-rose">
                Featured
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-maroon">
                Featured Keynotes
              </h2>
            </header>
            <Link
              to="/xperiences"
              className="hidden font-body text-sm font-semibold text-brand-rose transition-opacity hover:opacity-75 sm:inline-block"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {KEYNOTES.map((keynote, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <div className="h-44 w-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <CardArt variant={keynote.art} className="h-full w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8 pt-6">
                  <span className="mb-4 inline-block w-fit rounded-full bg-red-50 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-brand-rose">
                    {keynote.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-brand-maroon">
                    {keynote.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm text-gray-500">{keynote.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-rose px-8 py-3 font-body font-semibold text-white shadow-[0_4px_14px_rgba(255,100,82,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Book a keynote
            </Link>
          </div>
        </div>
      </section>

      <XperienceSeekers />

      <RecentPosts bg="bg-white" />
    </div>
  )
}

export default OpenMindX
