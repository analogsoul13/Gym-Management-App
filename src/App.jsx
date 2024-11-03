import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Authentication from './pages/Authentication'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/authentication' element={<Authentication/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default App
