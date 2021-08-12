import React from 'react'
import Profile from '../profile/profile'
import './main.css'


const Main = (props) => {
   return (
      <div className='main'>
        
            <Profile  loggedInUser={props.loggedInUser}  />
           
      </div>
   )
}

export default Main
