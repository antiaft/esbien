import { Helmet } from 'react-helmet-async'
import { useIntl } from 'react-intl'
import Analytics from './Analytics'

export default function Meta() {
  const intl = useIntl()
  // TODO real meta data (image, url)
  const title = intl.formatMessage({ id: 'meta.title' })
  const description = intl.formatMessage({ id: 'meta.description' })
  const keywords = intl.formatMessage({ id: 'meta.keywords' })
  const image = ''
  const url = ''

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#324EEF" />
        <meta name="theme-color" content="#324EEF" />
      </Helmet>
      <Analytics />
    </>
  )
}
