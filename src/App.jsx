import React from 'react';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
//import Login from './components/Login';

function App() {
  return (
    <>
      {/* Applying dark mode globally */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/SignUp' element={<SignUp />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
