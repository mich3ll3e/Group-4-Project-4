import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from './Components/navbar';
import Footer from './Components/footer';
import Login from './Components/login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
