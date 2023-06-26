import React from 'react'
import ReactDOM from 'react-dom/client'
import {Projects} from './Pages/Projects'
import './index.css'
import { Initial } from './Pages/Initial'
import {AboutMe} from './Pages/AboutMe'
import { RoutesX } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesX />
  </React.StrictMode>
)
