import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './components/Header'
function App() {
  const isAuthenticated=false;
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    

  )
}

export default App
