import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './layouts/index'
import './main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='*' element={<>Page Not Found!</>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
