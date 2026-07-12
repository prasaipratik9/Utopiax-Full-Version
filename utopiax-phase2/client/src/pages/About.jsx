import PageHero from '../components/PageHero.jsx'

// PLACEHOLDER — Lorem ipsum, replace with real content
const LOREM_PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const TEAM = [
  { id: 1, name: 'Team Member One', role: 'Role Title' },
  { id: 2, name: 'Team Member Two', role: 'Role Title' },
  { id: 3, name: 'Team Member Three', role: 'Role Title' },
]

const VALUES = [
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor incididunt',
  'Ut labore et dolore magna aliqua',
]

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="About UtopiaX"
        lead="Creativity and Innovation catalysts working with corporates, government, SMEs and start-ups."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-brand-black">Our Founder</h2>
          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="h-40 w-40 flex-shrink-0 rounded-full bg-gray-100" />
            <div>
              <h3 className="font-display text-xl font-bold text-brand-black">Christina</h3>
              <p className="font-body text-sm text-gray-500">Founder, UtopiaX</p>
              {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
              <p className="mt-4 font-body leading-relaxed text-gray-700">{LOREM_PARAGRAPH}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-bold text-brand-black">
            Meet the team
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-200" />
                <h3 className="mt-4 font-display font-bold text-brand-black">{member.name}</h3>
                <p className="font-body text-sm text-gray-500">{member.role}</p>
                {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
                <p className="mt-2 font-body text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-brand-black">Our values</h2>
          {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
          <ul className="mt-6 space-y-3 font-body text-lg text-gray-700">
            {VALUES.map((value) => (
              <li key={value} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About
