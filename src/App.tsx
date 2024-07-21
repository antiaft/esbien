import Home from './routes/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './routes/NotFound/NotFound'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Suspense } from 'react'
import messagesEs from './locales/es.json'
import { IntlProvider } from 'react-intl'
import Spinner from './components/Spinner/Spinner'
import type { Language } from './types'

import './App.css'

const messages = {
  es: messagesEs
}

const App = ({ locale }: { locale: Language }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </IntlProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App