import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/landing/LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
