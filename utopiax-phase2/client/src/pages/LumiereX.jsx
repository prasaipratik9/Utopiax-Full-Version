import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import XperienceSeekers from '../components/XperienceSeekers.jsx'
import RecentPosts from '../components/RecentPosts.jsx'

const TESTIMONIALS = [
  'Thank you for creating possibility through mind, body and spirit. It has been amazing.',
  'Thank you for a transformational experience – flying high.',
]

// TODO: replace hardcoded cards with API data
const FEATURED = [
  {
    tag: 'LumiereX',
    location: 'Philippines',
    status: 'Bookings now open',
    title: 'Unleash Possibility — Philippines Retreat',
    body: 'This week is for those with a fire in their belly and passion in their heart. Those who want to leave a legacy through serving others will find opportunity in the Village Empowerment Programs.',
  },
  {
    tag: 'LumiereX',
    location: 'Ithaca, Greece',
    status: 'Expressions of interest open',
    title: 'Unlocking Creativity and Innovation — A Greek Island Retreat',
    body: 'Amplify your potential, improve your productivity and increase your power for idea generation. Expand your leadership and collaboration capacity. Create the future. Reset with yoga.',
  },
]

function LumiereX() {
  return (
    <div>
      <PageHero
        eyebrow="LumiereX"
        title="Retreats"
        lead="LumiereX offers retreats and Xperiences that inspire growth of Body, Mind, Heart and Soul. Our retreats are focused on the individuation of each participant. Each Xperience is unique."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-6 font-body text-lg leading-relaxed text-gray-700">
          <p>
            Retreats are inclusive of the latest in research; the discovery of the head brain,
            heart brain and gut brain; the acknowledgement of intuition; the science behind
            'we are what we think'. We are ever-mindful that science proves what we
            intrinsically know to be true. That which has been true for many hundreds of
            years.
          </p>
          <p>
            Our focus is on purpose and presence, intent and impact, reflection and
            revolution, and standing secure in the space you want to occupy.
          </p>
          <p>
            The earth has a magnetic field aligned with its axis of rotation and the compass
            has four cardinal points that align with that field. Humans have four centres of
            influence that need to be aligned so we can live in optimum health and happiness.
          </p>
          <p>
            We are the sum of our four centres of influence — Body, Mind, Heart and Soul. When
            all four centres are aligned, we operate at our potential. Home (Body), Work
            (Mind), Passion (Heart) and Purpose (Soul) need to be evaluated, developed and
            nurtured so we find 'success' and fulfilment. When these four centres are aligned,
            the impossible becomes possible, the improbable becomes probable.
          </p>
          <p>
            Our goals are Transformation — Mind Shifts — Connection. With each other and with
            our environment.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {TESTIMONIALS.map((quote, idx) => (
            <blockquote
              key={idx}
              className="rounded-2xl border-l-4 border-brand-rose bg-gray-50 p-6 font-display text-lg italic text-brand-maroon shadow-[0_8px_30px_rgba(255,100,82,0.08)]"
            >
              "{quote}"
            </blockquote>
          ))}
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
                Featured Retreats
              </h2>
            </header>
            <Link
              to="/xperiences"
              className="hidden font-body text-sm font-semibold text-brand-rose transition-opacity hover:opacity-75 sm:inline-block"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {FEATURED.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <span className="mb-4 inline-block w-fit rounded-full bg-red-50 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-brand-rose">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-maroon">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wide text-gray-400">
                  {item.location}
                </p>
                <p className="mt-1 font-body text-sm font-semibold text-brand-rose">
                  {item.status}
                </p>
                <p className="mt-3 flex-1 font-body text-sm text-gray-500">{item.body}</p>
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

export default LumiereX
