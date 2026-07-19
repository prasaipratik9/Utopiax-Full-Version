function XperienceSeekers() {
  return (
    <section className="bg-brand-rose px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
          Xperience Seekers
        </h2>
        <p className="mt-2 font-body text-white/80">
          For the latest programs, events, workshops and news.
        </p>
        {/* TODO: wire up to email list / backend once available */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Email address"
            aria-label="Email address"
            className="flex-1 rounded-full border-0 px-5 py-3 font-body text-brand-maroon placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="rounded-full bg-brand-maroon px-6 py-3 font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  )
}

export default XperienceSeekers
