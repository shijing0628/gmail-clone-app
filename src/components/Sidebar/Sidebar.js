import React from 'react'
import './Sidebar.css'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from '../SidebarOption/SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';



function Sidebar() {
 return (
  <div className="sidebar">
   <Button className="sidebar__compose" startIcon={<AddIcon fontSize="large" />} >Compose</Button>

   <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
   <SidebarOption Icon={StarIcon} title="Starred" number={54} />
  </div>
 )
}

export default Sidebar
