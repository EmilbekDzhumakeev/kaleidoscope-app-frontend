import React, { useState, useEffect } from 'react'
import Main from './components/main/main';
import AppLogin from './components/appLogin/appLogin';
import axios from 'axios';
import './App.css'


const App = () => { 
   const [users, setUsers] = useState(null);
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
   }) 

   const [loggedInUser, setLoggedInUser] = useState(null);
   const [register, setRegister] = useState(false); 
   const [loggedIn, setLoggedIn] = useState(false);
   const [newUserData, setNewUserData] = useState(null);
   const [logonData, setlogonData] = useState(null);


   /**********************************************************
    *  API ROUTES
    **********************************************************/
    const apiTourGuidePath = 'http://localhost:5000/api/tourGuides';

    const getAllUsers = async () => {
      await axios.get(apiTourGuidePath).then((res) => { setUsers(res.data); console.log(res.data); }).catch((err) => console.log(err));
   }
//////////////////////////////////////////////////////////////
    const postNewUser = async (newUser) => {
       await axios.post(apiTourGuidePath, newUser).then((res) => { console.log(res.data); }).catch(err => {
          if (err.response.status === 400) {
             console.log(err.response.data)
            
          }
       })
    }
//////////////////////////////////////////////////////////////
    const postUserLogin = async (email) => {
      await axios.post(`${apiTourGuidePath}/login`, email).then((res) => { setLoggedInUser(res.data); console.log(res.data) }).catch((err) => { console.log(err); });
   }

   /**********************************************************
   *  USE EFFECTS
   **********************************************************/

    useEffect(() => {
      getAllUsers();
   }, [])

    useEffect(() => {
      postNewUser(newUserData);
   }, [newUserData])

   useEffect(() => {
      console.log('useEffect with postUserLogin ran!')
      postUserLogin(logonData);
   }, [logonData])


/**********************************************************
   *  EVENT HANDLERS
   ***********************************************************/

 const handleLoginAvatarClick = () => {    // Banner component
   //alert('avatar click');
   setLoggedIn(false);
   setLoggedInUser(null);
}
//////////////////////////////////////////////////////
 const handleUserChange = (event) => {     // AppLogin
   event.persist();
   setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
   console.log(newUser);
}

//////////////////////////////////////////////////////

const handleUserSubmit = (event) => {     // AppLogin
   event.preventDefault();
   if (register) {
      console.log('Hit the if condition', register)
      setNewUserData(newUser);   // change triggers post new user actions
      setRegister(false);        // end registration mode
      setNewUser({
         name: '',
         email: '',
         password: '',
      });
   } else {
      console.log('hit the else condition')
      setlogonData({ email: newUser.email })   // change triggers user login actions
      setLoggedIn(true);
      setNewUser({
         name: '',
         email: '',
         password: '',
      });
      document.getElementById('app').style.backgroundColor = '#999999';
      //alert('submit form');
   }
}


   
   /////////////// CONSOLE.LOGS ///////////////// 
   console.log('all users', users);
   console.log('loggedInUser: ', loggedInUser);
   console.log('logonData: ', logonData); 

   return (
      <div id='app' className='App'>
        
         <div className='content'>
            {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit}
               register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}

               {(loggedIn && loggedInUser) && <Main loggedInUser={loggedInUser}    />}

         </div>
         {/* <Footer /> */}
      </div>
   )
}
export default App;
