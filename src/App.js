import React, { Component } from 'react';
import './index';

import Bio from "./components/Bio"
import About from "./components/About"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"


class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Navbar/> */}
          <Bio/>
          <About/>
          <Projects/>
          {/* <Experiences/> */}
          <Footer/>
      </div>
    )
  }
}



export default App;
