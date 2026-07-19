import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import XperienceSeekers from '../components/XperienceSeekers.jsx'

// TODO: replace hardcoded cards with API data
const KEYNOTES = [
  {
    tag: 'OpenMindX',
    title: 'SingularityU Australia Summit',
    body: "Brings together the world's top speakers and experts on exponentially accelerating technologies.",
  },
  {
    tag: 'OpenMindX',
    title: 'Creativity, Innovation & Business 101',
    body: "Traditional ways of doing things won't cut it anymore. A keynote on how teams — in-house or outsourced — learn to find the gaps and innovate solutions.",
  },
  {
    tag: 'OpenMindX',
    title: "Don't Ask Don't Get — The Science of Askology",
    body: 'What are the common traits of successful people, businesses and organisations? A keynote on embedding the behaviours behind Askology into everyday practice.',
  },
]

// TODO: replace hardcoded cards with API data
const RECENT_POSTS = [
  {
    tag: 'ARTICLE',
    date: '16 May · Innovation',
    title: "I'm Allowing Me to Be Me",
    body: 'A look at authenticity and transparency at work, and what it means to show up the same way everywhere.',
  },
  {
    tag: 'ARTICLE',
    date: '13 May · Innovation',
    title: 'A Family Legacy of Failure and Success',
    body: 'Failure is a lesson, not a closed door — as long as something is learnt from it.',
  },
  {
    tag: 'ARTICLE',
    date: '28 Apr · Innovation',
    title: 'Celebrating Success One Failure at a Time',
    body: 'Succeeding in business means redefining what "failure" means — and that takes courage.',
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
            <p className="mt-3 font-body text-gray-600">Email us at hello@utopiax.global</p>
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
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <span className="mb-4 inline-block w-fit rounded-full bg-red-50 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-brand-rose">
                  {keynote.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-maroon">
                  {keynote.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm text-gray-500">{keynote.body}</p>
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

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-rose">
              From the blog
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-maroon">Recent Posts</h2>
          </header>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {RECENT_POSTS.map((post, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-brand-rose shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                    {post.tag}
                  </span>
                </div>
                <div className="px-6 pb-6">
                  <p className="mt-4 font-body text-xs text-gray-400">{post.date}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-brand-maroon">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-gray-500">{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OpenMindX
