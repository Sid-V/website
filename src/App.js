import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/experience" component={Experience} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/teaching" component={Teaching} />
              <Route path="/courses" component={Courses} />
              <Route path="/spotify" component={Spotify} />
            </Switch>
          </div>
          <Divider />
          <Links />
        </Router>
      </div>
    );
  }
}
