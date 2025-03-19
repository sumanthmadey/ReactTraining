import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from './Components/Button.jsx';
import SpanComp from './Components/SpanComp.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/btn" element={< Button buttonName="sumanth" />}>  </Route>
        <Route path="/" element={< App />}> </Route>
        <Route path="/span" element={< SpanComp />}> </Route>





      </Routes>
    </BrowserRouter>

  </StrictMode >,
)
