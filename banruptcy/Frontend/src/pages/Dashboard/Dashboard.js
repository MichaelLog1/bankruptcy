import React from 'react'
import Sidenav from "../../Components/SideNav/SideNav"
import Calendar from "../../Components/Calendar/Calendar"
import Visuals from "../../Components/Visuals/Visuals"
import TopNav from "../../Components/TopNav/index"
import "./Dashboard.css"


function Dashboard() {

    return (
      <div>
        <div class="components">
          <Sidenav></Sidenav>
          <Calendar></Calendar>
          <Visuals></Visuals>
        </div>
      </div>
      
    );
  }
  
  export default Dashboard;