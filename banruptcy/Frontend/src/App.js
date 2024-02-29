import React from "react";
import './App.css';
import SideNav from './SideNav/SideNav'
import Calendar from './Calendar/Calendar'

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <SideNav></SideNav>
      <Calendar></Calendar>
    </div>
    
  );
}

export default App;
