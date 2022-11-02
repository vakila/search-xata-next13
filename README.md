# Searching for retro games with Xata & Next 13

Companion code for the tutorial: [xata.io/blog/search-retro-games](https://xata.io/blog/search-retro-games)

This is a fullstack web app that allows us to search a collection of retro games data to find the old-school console games of our dreams.

In this app we use:
- [Xata](https://xata.io)'s serverless platform to store & retrieve data without needing a database
- React Server & Client Components using [Next.js 13](https://nextjs.org/blog/next-13) and its `app/` directory
- Full-text search with boosting via the Xata SDK

See also:
- Tutorial: [xata.io/blog/search-retro-games](https://xata.io/blog/search-retro-games)
- Livestream [link TBA]
- [search-retro-games](https://search-retro-games.vercel.app), an enhanced version of this app ([source](https://github.com/vakila/search-retro-games))
- [letsplayretro.games](https://letsplayretro.games), an even more full-featured site by [Sara Vieira](https://github.com/saravieira) ([source](https://github.com/saravieira/lets-play-retro-games))

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
