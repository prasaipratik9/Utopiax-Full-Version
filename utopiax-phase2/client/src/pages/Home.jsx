import { Link } from 'react-router-dom'

const PILLARS = [
  {
    heading: 'SPEAKING',
    blurb:
      "Christina delivers keynotes that will challenge you to step into your future and dare you to impact the world.",
    to: '/openmindx',
  },
  {
    heading: 'STARTUP BOOTCAMPS',
    // PLACEHOLDER — Lorem ipsum, replace with real content
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    to: '/ideationworx',
  },
  {
    heading: 'RETREATS',
    blurb: 'Each Retreat Experience is unique and purpose-designed. Grow in Body, Mind, Heart and Soul.',
    to: '/lumierex',
  },
]

const CENTRES = [
  { label: 'Body', subtitle: 'Home' },
  { label: 'Mind', subtitle: 'Work' },
  { label: 'Heart', subtitle: 'Passion' },
  { label: 'Soul', subtitle: 'Purpose' },
]

// TODO: replace hardcoded cards with API data
const XPERIENCES = [
  {
    tag: 'CHALLENGE',
    title: 'SingularityU Australia Global Impact Challenge',
    body: 'What moonshot can you imagine that would solve a global grand challenge using exponential technology?',
  },
  {
    tag: 'SUMMIT',
    title: 'SingularityU Australia Summit',
    body: "The world's top speakers and experts on exponentially accelerating technologies.",
  },
  {
    tag: 'RETREAT',
    title: 'Unleash Possibility — Philippines Retreat',
    body: 'For those with fire in their belly. Village Empowerment Programs for legacy through service.',
  },
]

// TODO: replace hardcoded cards with API data
const MEDIA_CARDS = [
  {
    tag: 'VIDEO',
    date: 'Feb 2025 · Innovation',
    title: 'SingularityU Australia Summit — Opening Keynote',
    body: 'Christina on exponential technologies and the future of innovation.',
  },
  {
    tag: 'ARTICLE',
    date: 'Jan 2025 · Creativity',
    title: 'Vivid Ideas — Dream Out Loud',
    body: 'Why imagination is the first technology — and how teams can practice moonshot thinking.',
  },
  {
    tag: 'AUDIO',
    date: 'Dec 2024 · Leadership',
    title: 'The Science of Askology — Podcast',
    body: 'A conversation on embedding bold asks into everyday leadership.',
  },
]

function Home() {
  return (
    <div>
      <section className="bg-brand-black px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-brand-red">
            UtopiaX
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
            Dream out loud. Think big.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-gray-300">
            Creativity and Innovation catalysts — we inspire business growth through keynotes,
            bootcamps and retreats designed to open minds and action ideas.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 font-body font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-red">
              Our pillars
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-black">
              Three ways we work with you
            </h2>
            <p className="mt-3 max-w-xl font-body text-gray-500">
              Speaking, ideation workshops, and transformational retreats — each designed for
              individuation and real impact.
            </p>
          </header>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Link
                key={pillar.to}
                to={pillar.to}
                className="group flex flex-col rounded-3xl border border-gray-200 p-10 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl font-bold tracking-wide text-brand-black">
                  {pillar.heading}
                </h3>
                <p className="mt-4 flex-1 font-body text-gray-600">{pillar.blurb}</p>
                <span className="mt-6 font-body font-semibold text-brand-red">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-red">
              Body · Mind · Heart · Soul
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-black">
              Four centres of influence
            </h2>
            <p className="mt-3 max-w-2xl font-body text-gray-500">
              When Home, Work, Passion and Purpose align, the impossible becomes possible.
            </p>
          </header>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {CENTRES.map((centre) => (
              <div
                key={centre.label}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <p className="font-display text-2xl font-bold text-brand-red">{centre.label}</p>
                <p className="mt-2 font-body text-sm text-gray-500">{centre.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-red">
              Featured
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-black">
              Upcoming Xperiences
            </h2>
          </header>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {XPERIENCES.map((xperience, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 inline-block w-fit rounded-full bg-gray-100 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-brand-red">
                  {xperience.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-black">
                  {xperience.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm text-gray-500">{xperience.body}</p>
                <Link
                  to="/xperiences"
                  className="mt-6 inline-block font-body text-sm font-semibold text-brand-red hover:opacity-75"
                >
                  View all Xperiences &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-red">
              From the blog
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-black">Recent Media</h2>
          </header>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-brand-red shadow-sm">
                    {card.tag}
                  </span>
                </div>
                <div className="px-6 pb-6">
                  <p className="mt-4 font-body text-xs text-gray-400">{card.date}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-brand-black">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-gray-500">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
