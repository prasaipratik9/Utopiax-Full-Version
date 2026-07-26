import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import CardArt from '../components/CardArt.jsx'

const FILTERS = ['All', 'Press', 'Video', 'Photos']

const CATEGORY_ART = { Press: 'press', Video: 'video', Photos: 'camera' }

// PLACEHOLDER — Lorem ipsum, replace with real content
const MEDIA_ITEMS = [
  { id: 1, category: 'Press', title: 'Lorem ipsum dolor sit amet' },
  { id: 2, category: 'Video', title: 'Consectetur adipiscing elit' },
  { id: 3, category: 'Photos', title: 'Sed do eiusmod tempor incididunt' },
  { id: 4, category: 'Press', title: 'Ut labore et dolore magna aliqua' },
  { id: 5, category: 'Video', title: 'Ut enim ad minim veniam' },
  { id: 6, category: 'Photos', title: 'Quis nostrud exercitation ullamco' },
]

function Media() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleItems =
    activeFilter === 'All'
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <div>
      <PageHero
        eyebrow="Media"
        title="Media"
        lead="Press coverage, videos and photos from UtopiaX Xperiences."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2 font-body text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'border-brand-rose bg-brand-rose text-white shadow-[0_4px_14px_rgba(255,100,82,0.3)]'
                    : 'border-gray-300 text-brand-maroon hover:border-brand-rose hover:text-brand-rose'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* TODO: replace with data fetched from API */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
              >
                <div className="mb-4 h-40 overflow-hidden rounded-xl">
                  <CardArt variant={CATEGORY_ART[item.category]} className="h-full w-full" />
                </div>
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-brand-rose">
                  {item.category}
                </p>
                {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
                <h3 className="mt-2 font-display text-lg font-bold text-brand-maroon">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Media
