import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'


function Header() {
 const user = useSelector(selectUser)
 const dispatch = useDispatch()

 const signOut = () => {
  auth.signOut().then(() => {
   dispatch(logout())
  })
 }


 return (
  <div className="header">
   <div className="header__left">
    <IconButton>
     <MenuIcon />
    </IconButton>
    <img src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png" alt="gmail" />
   </div>
   <div className="header__middle">
    <SearchIcon />
    <input placeholder="Search email" type="text" />
    <ArrowDropDownIcon className="header__inputCaret" />
   </div>
   <div className="header__right">
    <IconButton>
     <AppsIcon />
    </IconButton>
    <IconButton>
     <NotificationsIcon />
    </IconButton>
    <Avatar src={user?.photoUrl} onClick={signOut} />
   </div>
  </div>
 )
}

export default Header
