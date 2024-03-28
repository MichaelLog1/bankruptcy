import React from "react";
import './App.css';
import SideNav from './SideNav/SideNav'
import Calendar from './Calendar/Calendar'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = React.useState(null);
  const submitHandler = e => {
    e.preventDefault()
    axios.post('http://localhost:8080/signup', {username: username, password: password})
    .then((data) => {
      console.log(data)
      setUsername('')
      setPassword('')
    })
  }
  //Code above basically declares the values that will be passed from frontend to backend - Josh 


  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <SideNav></SideNav>
      <input id='example' type='text' value={username} onChange ={(e) => setUsername(e.target.value)}></input>
      //Replace username with password and setUsername with setPassword and vice verse
      <Calendar></Calendar>
    </div>
  );
}

export default App;
