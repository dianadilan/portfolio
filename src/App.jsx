import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DozeCase from './pages/DozeCase'
import KlimatlarCase from './pages/KlimatlarCase'
import ScrollToTop from './pages/ScrollToTop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doze" element={<DozeCase />} />
        <Route path="/klimatlar" element={<KlimatlarCase />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App