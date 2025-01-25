import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import ViewAllEmployee from './components/ViewAllEmployee'
import ViewEmployee from './components/ViewEmployee'
import DeleteEmployee from './components/DeleteEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import Header from './components/Header'
import Login from './components/Login'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='add' element={<AddEmployee />} />
        <Route path='EditEmployee' element={<EditEmployee />} />
        <Route path='view' element={<ViewEmployee />} />
        <Route path='/EditEmployee/:id' element={<EditEmployee />} />
        <Route path='/DeleteEmployee/:id' element={<DeleteEmployee />} />
         <Route path="/UpdateEmployee/:id" element={<UpdateEmployee />} />
         <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
};

export default App;
