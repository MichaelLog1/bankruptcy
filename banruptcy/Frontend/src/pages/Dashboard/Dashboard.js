import React from 'react'
import Sidenav from "../../Components/SideNav/SideNav"
import Calendar from "../../Components/Calendar/Calendar"
import Visuals from "../../Components/Visuals/Visuals"
import "./Dashboard.css"


function Dashboard() {

    return (
      <div class="components">
        <Sidenav></Sidenav>
        <Calendar/>
        <Visuals></Visuals>
      </div>
      
    );
  }
  
  export default Dashboard;