import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import DataProvider from './context/DataContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DataProvider>
    <App />
    </DataProvider>
    </BrowserRouter>
  </StrictMode>,
)
