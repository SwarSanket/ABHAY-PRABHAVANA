import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import FounderMess from './components/founder-message/FounderMess.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/founder-message' element={<FounderMess/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
