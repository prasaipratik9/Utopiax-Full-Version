import CardArt from './CardArt.jsx'

// TODO: replace hardcoded posts with API data
const POSTS = [
  {
    tag: 'ARTICLE',
    date: '16 May · Innovation',
    title: "I'm Allowing Me to Be Me",
    body: 'A look at authenticity and transparency at work, and what it means to show up the same way everywhere.',
    art: 'identity',
  },
  {
    tag: 'ARTICLE',
    date: '13 May · Innovation',
    title: 'A Family Legacy of Failure and Success',
    body: 'Failure is a lesson, not a closed door — as long as something is learnt from it.',
    art: 'legacy',
  },
  {
    tag: 'ARTICLE',
    date: '28 Apr · Innovation',
    title: 'Celebrating Success One Failure at a Time',
    body: 'Succeeding in business means redefining what "failure" means — and that takes courage.',
    art: 'courage',
  },
]

function RecentPosts({ bg = 'bg-gray-50' }) {
  return (
    <section className={`${bg} px-6 py-28`}>
      <div className="mx-auto max-w-6xl">
        <header className="max-w-xl">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-brand-rose">
            From the blog
          </p>
          <h2 className="font-display text-4xl font-bold text-brand-maroon">Recent Posts</h2>
        </header>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(255,100,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,100,82,0.18)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <CardArt variant={post.art} className="h-full w-full" />
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-brand-rose shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                  {post.tag}
                </span>
              </div>
              <div className="px-6 pb-6">
                <p className="mt-4 font-body text-xs text-gray-400">{post.date}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-brand-maroon">
                  {post.title}
                </h3>
                <p className="mt-2 font-body text-sm text-gray-500">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentPosts
