import { Link } from 'react-router-dom'

const PILLARS = [
  {
    heading: 'SPEAKING',
    blurb:
      "Christina delivers keynotes that will challenge you to step into your future and dare you to impact the world.",
    to: '/openmindx',
  },
  {
    heading: 'PROGRAMS',
    blurb: 'We are Creativity and Innovation catalysts, inspiring business growth through Experience.',
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
    tag: 'IdeationWorX',
    title: 'SingularityU Australia Global Impact Challenge',
    body: 'What moonshot can you imagine that would solve a global grand challenge using exponential technology?',
  },
  {
    tag: 'OpenMindX',
    title: 'SingularityU Australia Summit',
    body: "Brings together the world's top speakers and experts on exponentially accelerating technologies.",
  },
  {
    tag: 'LumiereX',
    title: 'Unleash Possibility — Philippines Retreat',
    body: 'For those with a fire in their belly and passion in their heart, leaving a legacy through service in the Village Empowerment Programs.',
  },
  {
    tag: 'LumiereX',
    title: 'Unlocking Creativity and Innovation — A Greek Island Retreat',
    body: 'Amplify your potential and expand your leadership and collaboration capacity on Ithaca, Greece.',
  },
  {
    tag: 'IdeationWorX',
    title: 'Design Thinking Workshops',
    body: 'Customer-centric problem-solving strategies for SMEs, departments and corporates — we come to you.',
  },
  {
    tag: 'OpenMindX',
    title: 'Creativity, Innovation & Business 101',
    body: 'How can we encourage teams, in-house or outsourced, to think creatively, find the gaps and innovate solutions?',
  },
]

// TODO: replace hardcoded cards with API data
const MEDIA_CARDS = [
  {
    tag: 'ARTICLE',
    date: '16 Jul · Innovation',
    title: "Why AI Can't Do the Most Important Thing We Do...",
    body: 'On the difference between being reliably right and the kind of productive wrongness that creates something genuinely new.',
  },
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
]

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-maroon px-6 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(255,100,82,0.28),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(255,100,82,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-brand-rose">
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
            className="mt-8 inline-block rounded-full bg-brand-rose px-8 py-3 font-body font-semibold text-white shadow-[0_4px_14px_rgba(255,100,82,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-lg leading-relaxed text-gray-600">
            We curate Xperiences that get people and organisations thinking differently, so they
            can create fearless change — through innovative programs, inspiring keynotes and
            unique retreats. Our aim is to open hearts and minds to what's possible, so together
            we change the world. That's our Moonshot.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-rose">
              Our pillars
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-maroon">
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
                className="group flex flex-col rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-red-50/50 p-10 shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-rose/30 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <h3 className="font-display text-xl font-bold tracking-wide text-brand-maroon">
                  {pillar.heading}
                </h3>
                <p className="mt-4 flex-1 font-body text-gray-600">{pillar.blurb}</p>
                <span className="mt-6 font-body font-semibold text-brand-rose">
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
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-rose">
              Body · Mind · Heart · Soul
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-maroon">
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
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-[0_8px_30px_rgba(255,100,82,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(255,100,82,0.15)]"
              >
                <p className="font-display text-2xl font-bold text-brand-rose">{centre.label}</p>
                <p className="mt-2 font-body text-sm text-gray-500">{centre.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-rose">
              Featured
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-maroon">
              Upcoming Xperiences
            </h2>
          </header>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {XPERIENCES.map((xperience, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <span className="mb-4 inline-block w-fit rounded-full bg-red-50 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-brand-rose">
                  {xperience.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-maroon">
                  {xperience.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm text-gray-500">{xperience.body}</p>
                <Link
                  to="/xperiences"
                  className="mt-6 inline-block font-body text-sm font-semibold text-brand-rose transition-opacity hover:opacity-75"
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
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-rose">
              From the blog
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-maroon">Recent Media</h2>
          </header>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-brand-rose shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                    {card.tag}
                  </span>
                </div>
                <div className="px-6 pb-6">
                  <p className="mt-4 font-body text-xs text-gray-400">{card.date}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-brand-maroon">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-gray-500">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-maroon px-6 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(255,100,82,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold">Ready to add your factor X?</h2>
          <p className="mt-4 font-body text-gray-300">
            Book a complimentary conversation with our team.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-brand-rose px-8 py-3 font-body font-semibold text-white shadow-[0_4px_14px_rgba(255,100,82,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
