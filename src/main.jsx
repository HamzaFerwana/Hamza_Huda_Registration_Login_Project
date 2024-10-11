
import { createRoot } from 'react-dom/client'
import './index.css'
import Registration from './pages/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/HomePage'


createRoot(document.getElementById('root')).render(

  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  </>

)

// npm install react-router-dom
