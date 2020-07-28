import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const KEY = "fdea8557b0e2177f8e1932e664c0aa8e"; // ACCESS KEY
const CITY = "Vancouver"; // apparently I can only access Vancouver because of Free Subscription Plan.
const API = "http://api.weatherstack.com/forecast?access_key=" + KEY + "&query=" + CITY; // API

// function call starts here
function App() {
  let data; // local variable

  axios.post(API).then(res => { // post API call and get response
    if (res.data.error === "undefined" || res.data.success === false) {
      setTimeout(() => {console.log("Refreshing");window.location.reload();}, 2000) // if callback is broken or error refresh after 2 seconds
    } else {
      console.log(res); // show full response data
      data = res.data; // assign the received data
    }
  });

  // Displays
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Page will auto refresh if no response received in 2 seconds. <br/>
        Press F12 to view Console Output
      </header>
    </div>
  );
}

export default App;
