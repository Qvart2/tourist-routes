import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import AddRoutePage from './pages/AddRoutePage.jsx'
import HomePage from './pages/HomePage.jsx'
import RoutePage from './pages/RoutePage.jsx'
import RoutesPage from './pages/RoutesPage.jsx'

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/routes/:routeId" element={<RoutePage />} />
          <Route path="/add-route" element={<AddRoutePage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
