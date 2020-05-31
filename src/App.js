import React, { Component } from 'react';
import './index';
import {Route} from 'react-router-dom'

import Bio from "./components/Bio"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"
import Skills from "./components/Skills"


class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Route exact path="/" render={() => <Bio/>}/>
          <Route exact path="/projects" render={() => <Projects/>}/>
          <Route exact path="/experiences" render={() => <Experiences/>}/>
          <Route exact path="/skills" render={() => <Skills/>}/>
          <Footer/>
      </div>
    )
  }
}

export default App;
