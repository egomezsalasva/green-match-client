import React from 'react'
import ReactDOM from 'react-dom'
import  { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import { QuestionsProvider } from './contexts/QuestionsContext'

ReactDOM.render(
  <React.StrictMode>
    <QuestionsProvider>
      <Router>
        <App />
      </Router>
    </QuestionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
