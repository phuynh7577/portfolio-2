import React, { Component } from 'react';
import './index';
import {Route} from 'react-router-dom'

import { spring, AnimatedSwitch } from 'react-router-transition';

import Bio from "./components/Bio"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"
import Skills from "./components/Skills"


class App extends Component {
  render() {

    // we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 50,
    damping: 10,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
    return (
      <div className="App">
          <Navbar/>
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="route-wrapper"
              >
                <Route exact path="/" render={() => <Bio/>}/>
                <Route exact path="/projects" render={() => <Projects/>}/>
                <Route exact path="/experiences" render={() => <Experiences/>}/>
                <Route exact path="/skills" render={() => <Skills/>}/>
            </AnimatedSwitch>
          <Footer/>
      </div>
    )
  }
}



export default App;
