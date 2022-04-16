import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import ContactUs from './components/ContactUs/ContactUs';
import PageNotFound from './components/PageNotFound/PageNotFound';


const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App