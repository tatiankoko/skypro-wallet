import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./components/GlobalStyle.styled.js";
import {AuthProvider} from "./context/AuthContext.jsx";
import {TransactionsProvider} from "./context/TransactionsContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* BrowserRouter позволяет управлять маршрутизацией в приложении */}
      <BrowserRouter>
          <GlobalStyle />
          <AuthProvider>
              <TransactionsProvider>
                  <App />
              </TransactionsProvider>
          </AuthProvider>
      </BrowserRouter>
  </StrictMode>,
)
