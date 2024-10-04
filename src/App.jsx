import React from 'react';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
// import Login from './components/Login';

function App() {
  const [authUser, setAuthUser] = useAuth(); // useAuth needs to be invoked as a function
  
  console.log(authUser);
  
  return (
    <>
      {/* Applying dark mode globally */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/course' 
            element={authUser ? <Courses /> : <Navigate to="/SignUp" />} 
          />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
