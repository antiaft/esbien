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
import Internal from './routes/Internal/Internal'

import './App.css'

const messages = {
  es: messagesEs,
  gal: messagesGal
}

const App = () => {
  const { currentLocale } = useTranslations()
  return (
    <ErrorBoundary key={currentLocale}>
      <Suspense fallback={<Spinner />}>
        <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/internal" element={<Internal />} />
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