import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

export default class App extends Component {
   render() {
     return (
       <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<News key="general" pageSize={5} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>}></Route>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route>
          <Route path="/general" element={<News key="general" pageSize={5} country="in" category="general"/>}></Route>
          <Route path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>}></Route>
          <Route path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>}></Route>
          <Route path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}></Route>
          <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
       </div>
     )
   }
 }
 
 