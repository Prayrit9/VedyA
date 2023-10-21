import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from './results.jsx'
import Login from './login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </MantineProvider>
  </React.StrictMode>,
)
