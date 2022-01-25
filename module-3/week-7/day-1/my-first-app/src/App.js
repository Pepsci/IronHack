import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom';
import "./components/Card.jsx"
import Card from "./components/Card.jsx";


const cat = {
  name: "Felix",
  age: 2,
  image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
}
function App() {
  return(
<React.Fragment>
  <div className="App">
    <h1>Welcome in react</h1>
    <img src="logo192.png" alt="logo" />
  </div>;
  


  <Card 
  name="Bob"
  age={10}
  image="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />
  <Card 
    {...cat}
  />
    </React.Fragment>
  )
}

export default App;
