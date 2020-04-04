import Head from 'next/head'

const MainHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="A recipe discovery app powered by Next.js."
    />
    <meta name="author" content="samuraikun" />
    <meta name="keyword" content="next, react, typescript, js, graphql, apollo" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="https://github.com/samuraikun/nextjs-graphql-apollo-typescript-app" />
    <meta property="og:image" content="/logo.svg" />
    <meta
      property="og:description"
      content="A recipe discovery app powered by Next.js."
    />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
  </Head>
)

export default MainHead
