import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import XperienceSeekers from '../components/XperienceSeekers.jsx'
import RecentPosts from '../components/RecentPosts.jsx'
import CardArt from '../components/CardArt.jsx'

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

// TODO: replace hardcoded cards with API data
const FEATURED = [
  {
    tag: 'IdeationWorX',
    title: '2019 SingularityU Australia Global Impact Challenge',
    body: 'What moonshot can you imagine that would solve a global grand challenge using exponential technology?',
    art: 'challenge',
  },
  {
    tag: 'IdeationWorX',
    title: 'Design Thinking Workshops',
    body: 'Customer-centric problem-solving strategies for SMEs, departments and corporates across Medical, Manufacturing, Finance and Education — we come to you.',
    art: 'design',
  },
  {
    tag: 'IdeationWorX',
    title: 'Global Impact: A Future by Design',
    body: 'Sharing what the SingularityU Community is learning about connecting a global network of innovators — biotech, agtech, fintech, medtech, the latest in AI, and a few surprises. Join us for breakfast.',
    art: 'globe',
  },
]

function IdeationWorX() {
  return (
    <div>
      <PageHero
        eyebrow="IdeationWorX"
        title="Programs"
        lead="We are Creativity and Innovation catalysts, inspiring business growth through Experience."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-6 font-body text-lg leading-relaxed text-gray-700">
          <p>
            At UtopiaX we inspire business growth, working with corporates, government
            organisations, SME's and Start-ups. Our products are customised Xperiences and
            include innovation and leadership programs, one-on-one consultations, workshops
            and longer-term sessional programs.
          </p>
          <p>
            IdeationWorX is the bridge between imagination and execution. It is the conception,
            the creation, the formation. It is in the moment before sleep, and in the moment
            before awake. It can be big and bold or simple and elegant, incremental or
            sustainable, disruptive or radical.
          </p>
          <p>Ideas are great. Without execution they are useless. We action ideas.</p>

          <div>
            <h3 className="font-display text-xl font-semibold text-brand-maroon">
              Work with us to:
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WORK_WITH_US.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-rose" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            On your own? Join our Innovation X-Change programs or sign up for a Design
            Thinking Bootcamp. Discover your passion and purpose in a Start With Why Workshop.
          </p>
          <p>
            Manage a team? We engage in an innovation conversation with you and produce a
            training needs analysis. We then customise our workshops and programs to suit your
            specific requirements.
          </p>
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
            "Christina's unique and professional approach has had a positive impact on our
            business, influencing our plans, processes and thinking for the future."
            <footer className="mt-3 font-body text-sm not-italic text-gray-500">
              — Sarah Parry-Jones, Branch Manager, Earp Brothers
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
                Featured Programs
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
            {FEATURED.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <div className="h-44 w-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <CardArt variant={item.art} className="h-full w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8 pt-6">
                  <span className="mb-4 inline-block w-fit rounded-full bg-red-50 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-brand-rose">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-brand-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm text-gray-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <XperienceSeekers />

      <RecentPosts bg="bg-white" />
    </div>
  )
}

export default IdeationWorX
