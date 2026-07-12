import PageHero from '../components/PageHero.jsx'

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

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-bold text-brand-black">
            Featured Retreats
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* TODO: map from API */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LumiereX
