import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Divider } from "semantic-ui-react";

import WelcomeMessage from "./Welcome.js";
import {Projects} from "./Projects.js";
import Resume from "./Resume.js";
import Navbar from "./Navbar.js";
import {Home} from "./Home.js";
import {Experience} from "./Experience.js";
import Links from "./Links.js";
import {Gallery} from "./Gallery.js";
import {Teaching} from "./Teaching.js";
import {Courses} from "./Courses.js";
import {Spotify} from "./Spotify.js";

//TODO

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Divider hidden />
          <div className="App-content">
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/experience' element={<Experience/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/resume' element={Resume} />
              <Route path='/teaching' element={<Teaching/>} />
              <Route path='/courses' element={<Courses/>} />
              <Route path='/spotify' element={<Spotify/>} />
            </Routes>
          </div>
          <Divider />
          <Links />
        </Router>
      </div>
    );
  }
}
