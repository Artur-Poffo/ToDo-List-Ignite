import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { GlobalsStyles } from './styles/globals'
import theme from './styles/themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

      <GlobalsStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
