import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EntryPoint from './Components/EntrytPoint.js/EntryPoint'
import Login1 from './Components/Login/Login1';
import Login2 from './Components/Login/Login2';
import Form from './Components/Signup/Form';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Form1 from './Components/UserDashboard/UserConnection/Form1';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import UserBillSave from './Components/AdminDashboard/UserBillSave/UserBillSave';
import UserList from './Components/AdminDashboard/UserList';
import Userbill from './Components/UserBill/Userbill';
import AdminWaterConnApp from './Components/AdminDashboard/AdminWaterConnApp';
import Schedule from './Components/UserDashboard/WaterSchedule/Schedule';
import EditUser from './Components/AdminDashboard/EditUser/EditUser';
{/* import Update from './Components/AdminDashboard/UpdateUserList/Update'; */}


function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path='/' element={<EntryPoint/>}/>

      <Route path='/Login/Login1' element={<Login1/>}/>
         <Route path='/Login/Login2' element={<Login2/>}/> 
         
         <Route path='/Signup/Form' element={<Form/>}/>
        


         <Route path='/UserDashboard/UserDashboard' element={<UserDashboard/>}/> 
         <Route path='/UserDashboard/UserConnection/Form1' element={<Form1/>}/>

         <Route path='/AdminDashboard/AdminDashboard' element={<AdminDashboard/>}/>
         <Route path='/AdminDashboard/UserBillSave/UserBillSave' element={<UserBillSave/>}/>
         <Route path='/AdminDashboard/UserList' element={<UserList/>}/>
         <Route path='/UserBill/Userbill' element={<Userbill/>}/>
         <Route path='/AdminDashboard/AdminWaterConnApp' element={<AdminWaterConnApp/>}/>
         <Route path='/UserDashboard/WaterSchedule/Schedule' element={<Schedule/>}/> 
         <Route path='/AdminDashboard/EditUser/EditUser/:id' element={<EditUser />}
          />
         {/* <Route path='/AdminDashboard/UserList/Update' element={<Update/>}/> */}




 
          
        
          


      </Routes>
      </Router>

    </div>
  );
}

export default App;
