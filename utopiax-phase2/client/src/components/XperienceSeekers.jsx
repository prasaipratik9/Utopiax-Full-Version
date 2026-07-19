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
          className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-3"
        >
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="text"
              name="firstName"
              required
              placeholder="First Name*"
              aria-label="First Name"
              className="flex-1 rounded-full border-0 px-5 py-3 font-body text-brand-maroon placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last Name*"
              aria-label="Last Name"
              className="flex-1 rounded-full border-0 px-5 py-3 font-body text-brand-maroon placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email*"
              aria-label="Email address"
              className="flex-1 rounded-full border-0 px-5 py-3 font-body text-brand-maroon placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            className="self-center rounded-full bg-brand-maroon px-6 py-3 font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:self-start"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  )
}

export default XperienceSeekers
