# UtopiaX — Phase 2

Full-stack rebuild of the UtopiaX website. React frontend, Node.js/Express backend, PostgreSQL via Supabase.

> **Status:** Frontend in progress — building out pages to demo to the client before backend integration begins.

## Tech Stack

- **Frontend:** React (functional components + hooks), React Router — deployed on Vercel
- **Backend:** Node.js + Express — deployed on Render
- **Database:** PostgreSQL (Supabase)
- **Auth:** JWT
- **Media:** Cloudinary
- **Email:** Nodemailer
- **Payments:** Stripe

## Project Structure

```
utopiax-phase2/
├── client/                 ← React frontend (Vercel)
│   └── src/
│       ├── pages/          ← Public pages (Home, OpenMindX, IdeationWorX, LumiereX, etc.)
│       ├── pages/admin/    ← Admin dashboard pages
│       ├── components/     ← Shared components (header, footer, cards)
│       ├── context/        ← AuthContext (global auth state)
│       └── utils/api.js    ← Axios instance
├── server/                 ← Express backend (Render)
│   └── src/
│       ├── db/             ← PostgreSQL connection + migrations
│       ├── middleware/     ← JWT auth middleware
│       ├── routes/         ← All API routes
│       └── utils/          ← Email helper (Nodemailer)
└── README.md
```

## Pages

| Route             | Page          | Notes                                                                 |
|--------------------|---------------|------------------------------------------------------------------------|
| `/`                 | Home          | Pillar cards for OpenMindX, IdeationWorX, LumiereX                    |
| `/openmindx`        | OpenMindX     | Speaking — now also covers Programs (absorbed from old IdeationWorX)   |
| `/ideationworx`     | IdeationWorX  | Repurposed — Startup Bootcamps & Innovation Strategy (**content pending**, see note below) |
| `/lumierex`         | LumiereX      | Retreats — unchanged from live site                                    |
| `/xperiences`       | Xperiences    | Programs & events, paginated                                          |
| `/media`            | Media         | Articles / video / audio, filterable                                  |
| `/about`            | About         | Founder, team, values                                                  |
| `/contact`          | Contact       | Enquiry form                                                          |

### Content note

Client requested a content restructure from the live site:
- **OpenMindX** absorbs the old IdeationWorX ("Programs") content
- **IdeationWorX** is repurposed to cover Startup Bootcamps and Innovation Strategy
- **LumiereX** stays as-is

The new IdeationWorX copy is a **placeholder** — the intended source (Christina's personal website) is currently down while another team rebuilds it. Do not treat current IdeationWorX copy as final; swap it out once real content is provided.

## Local Setup

### 1. Database (Supabase)
1. Create a free project at [supabase.com](https://supabase.com)
2. Copy the connection string from **Settings → Database**
3. Add it to `server/.env` as `DATABASE_URL`
4. Run the migration: `cd server && npm run migrate`

### 2. Server
```bash
cd server
cp .env.example .env   # fill in your values
npm install
npm run migrate        # creates all tables
npm run dev            # starts on port 5000
```

### 3. Client
```bash
cd client
cp .env.example .env   # set REACT_APP_API_URL
npm install
npm start               # starts on port 3000
```

## Environment Variables

**server/.env**
```
DATABASE_URL=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
STRIPE_SECRET_KEY=
```

**client/.env**
```
REACT_APP_API_URL=
REACT_APP_STRIPE_PUBLIC_KEY=
```

## Deployment

### Backend → Render
1. Push `server/` to GitHub
2. New Web Service on render.com
3. Build: `npm install` | Start: `node src/index.js`
4. Add all `.env` variables in the Render dashboard

### Frontend → Vercel
1. Push `client/` to GitHub
2. Import repo on vercel.com
3. Set `REACT_APP_API_URL` to your Render backend URL
4. Deploy

## Roadmap

- [x] Restructure OpenMindX / IdeationWorX content per client request
- [ ] Get real Startup Bootcamps / Innovation Strategy copy from client
- [ ] Build homepage pillar cards + nav
- [ ] Wire pages to backend API instead of static content
- [ ] Postgres schema + migrations (services, products, media, enquiries, users)
- [ ] JWT auth (register/login/roles)
- [ ] Admin dashboard (CMS-style content editing)
- [ ] Stripe integration
- [ ] Cloudinary media uploads
- [ ] Contact form → Nodemailer

## Developer

Solo developer project — BIT student, King's Own Institute, Sydney.
