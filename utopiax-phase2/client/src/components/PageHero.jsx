function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="relative overflow-hidden bg-brand-black px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_0%,rgba(250,62,50,0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-brand-red">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {lead && (
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-gray-300">{lead}</p>
        )}
      </div>
    </section>
  )
}

export default PageHero
