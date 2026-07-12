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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-bold text-brand-black">
            What We Do
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Link
                key={pillar.to}
                to={pillar.to}
                className="group flex flex-col rounded-2xl border border-gray-200 p-8 transition-colors hover:border-brand-red"
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
    </div>
  )
}

export default Home
