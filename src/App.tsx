import Home from './routes/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './routes/NotFound/NotFound'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Suspense } from 'react'
import messagesEs from './locales/es.json'
import messagesGal from './locales/gal.json'
import { IntlProvider } from 'react-intl'
import Spinner from './components/Spinner/Spinner'
import Privacy from './routes/Privacy/Privacy'
import { useTranslations } from './hooks/useTranslations'
import Legal from './routes/Legal/Legal'
import Services from './routes/Services/Services'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import './App.css'

const messages = {
  es: messagesEs,
  gal: messagesGal
}

const App = () => {
  const { currentLocale } = useTranslations()
  return (
    <ErrorBoundary key={currentLocale}>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
          <Routes>
            <Route path="/esbien" index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </IntlProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App