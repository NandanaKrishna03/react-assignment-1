import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbarexample from './nav.jsx'
import ProductListing from './ProductList.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbarexample/>
    <ProductListing />
    
  </StrictMode>,
)