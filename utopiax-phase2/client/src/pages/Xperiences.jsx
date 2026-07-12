import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const PAGE_SIZE = 6

// PLACEHOLDER — Lorem ipsum, replace with real content
const XPERIENCES = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  title: `Xperience ${i + 1}`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}))

function Xperiences() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(XPERIENCES.length / PAGE_SIZE)

  const visible = XPERIENCES.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div>
      <PageHero
        eyebrow="Xperiences"
        title="Xperiences"
        lead="Browse our current lineup of keynotes, bootcamps and retreats."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* TODO: replace with data fetched from API */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <div key={item.id} className="rounded-2xl border border-gray-200 p-6">
                <div className="mb-4 h-40 rounded-xl bg-gray-100" />
                <h3 className="font-display text-lg font-bold text-brand-black">
                  {item.title}
                </h3>
                {/* PLACEHOLDER — Lorem ipsum, replace with real content */}
                <p className="mt-2 font-body text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-full border border-gray-300 px-4 py-2 font-body text-sm font-medium text-brand-black disabled:opacity-40"
            >
              Previous
            </button>
            <span className="font-body text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-full border border-gray-300 px-4 py-2 font-body text-sm font-medium text-brand-black disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Xperiences
