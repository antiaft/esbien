import { Routes, Route } from 'react-router'
import Meta from '@components/Meta/Meta'
import Home from './Home/Home'
import Legal from './Legal/Legal'
import Privacy from './Privacy/Privacy'
import Services from './Services/Services'
import Consulting from './Services/Sections/Consulting/Consulting'
import Creation from './Services/Sections/Creation/Creation'
import Editing from './Services/Sections/Editing/Editing'
import Writing from './Services/Sections/Writing/Writing'
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'
import ScrollToTop from '@components/ScrollToTop/ScrollToTop'
import NotFound from './NotFound/NotFound'
import ErrorPage from '@components/ErrorBoundary/ErrorPage/ErrorPage'

const App = () => (
  <ErrorBoundary fallback={<ErrorPage />}>
    <Meta />
    <ScrollToTop />
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/services" element={<Services />}>
        <Route path="consulting" element={<Consulting />} />
        <Route path="creation" element={<Creation />} />
        <Route path="editing" element={<Editing />} />
        <Route path="writing" element={<Writing />} />
      </Route>
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </ErrorBoundary>
)

export default App
