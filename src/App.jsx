import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './modules/dashboard/Dashboard'
import Login from './modules/login/Login'
import Home from './modules/home/Home'
import { useSelector } from "react-redux";



function App() {
  const adminAuth = useSelector((state) => state.AuthReducer.admin);
  const userAuth = useSelector((state) => state.AuthReducer.user);


  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/dashboard" element={adminAuth ? <Dashboard />  : <Navigate to='/login' />}></Route>
          <Route path="/home" element={userAuth ? <Home /> : <Navigate to='/login' />}></Route>
          <Route path="/login" element={adminAuth ? <Navigate to='/dashboard' /> : (userAuth ?<Navigate to='/home' /> : <Login/> )}></Route>
          <Route path="*" element={adminAuth ? <Navigate to='/dashboard' /> : (userAuth ? <Navigate to='/home' /> : <Login />)}></Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
