import React, { useState, useEffect } from 'react'

import Main from './components/main/main';
import AppLogin from './components/appLogin/appLogin';

import axios from 'axios';
import './App.css'


const App = () => {
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
   })
   const [register, setRegister] = useState(false); 
   const [loggedIn, setLoggedIn] = useState(false);

   
   /////////////// CONSOLE.LOGS /////////////////
   return (
      <div id='app' className='App'>
        
         <div className='content'>
            {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit}
               register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}

         </div>
         {/* <Footer /> */}
      </div>
   )
}
export default App;
