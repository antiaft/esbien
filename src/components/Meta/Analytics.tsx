import { Helmet } from 'react-helmet-async'

export default function Analytics() {
  // TODO: add real googletagmanagerId
  const googletagmanagerId = 'G-XXXXXXXXXX'
  const scriptText = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${googletagmanagerId}');
  `

  return (
    <Helmet>
      <script
        async
        src={
          'https://www.googletagmanager.com/gtag/js?id=' + googletagmanagerId
        }
      ></script>
      <script>{scriptText}</script>
    </Helmet>
  )
}
