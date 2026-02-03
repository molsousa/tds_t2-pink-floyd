import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importando Estilos Globais
import './index.css'

// Importando Bootstrap (CSS e JS Bundle)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importando Ícones do Bootstrap (necessário para o ícone de 'Adicionar Membro')
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)