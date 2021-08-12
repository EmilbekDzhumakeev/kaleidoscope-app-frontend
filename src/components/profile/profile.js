import React, { useState } from 'react';
import Avatar from './avatar/avatar';
import UserInfo from './userInfo/userInfo';
import './profile.css'

const Profile = (props) => {
   
   return (
      <div className='profile'>
         <h3>Profile</h3>
         <UserInfo loggedInUser={props.loggedInUser} />


      </div>
   )
}

export default Profile;