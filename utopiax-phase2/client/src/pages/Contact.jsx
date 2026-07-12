import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const INITIAL_FORM = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: POST to /api/contact once backend is wired up
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Have a project, keynote, or retreat in mind? Send us a message."
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-black">
              Contact details
            </h2>
            <ul className="mt-6 space-y-3 font-body text-gray-700">
              <li>hello@utopiax.global</li>
              <li>+61 000 000 000</li>
              <li>Australia</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="font-body text-sm font-medium text-brand-black">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 font-body focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-body text-sm font-medium text-brand-black">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 font-body focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-body text-sm font-medium text-brand-black"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 font-body focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-brand-red px-8 py-3 font-body font-semibold text-white transition-opacity hover:opacity-90"
            >
              Send message
            </button>

            {submitted && (
              <p className="font-body text-sm text-green-600">
                Thanks — we'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
