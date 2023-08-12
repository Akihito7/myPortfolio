import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ScreenSelectedProvider } from './contexts/screenSelected';

import { RoutesX } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenSelectedProvider>
      <RoutesX />
    </ScreenSelectedProvider>
  </React.StrictMode>
)
