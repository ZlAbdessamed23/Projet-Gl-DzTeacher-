import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/landing/LandingPage'
import Auth from './Pages/auth/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<LandingPage />} />
        <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
