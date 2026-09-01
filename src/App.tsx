// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Categoria from './pages/Categoria'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App