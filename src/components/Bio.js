import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
        <div className="bio">
          <div className="aside-right">
              <h3>SOFTWARE ENGINEER</h3>
              <h1>Phi</h1>
              <h1>Huynh</h1>

              <a href="https://www.linkedin.com/in/phi-huynh" target="_blank" rel="noopener noreferrer"><img src="./linkedin.png" alt="linkedin logo" width="38"/></a>

              <a href="https://github.com/phuynh7577" target="_blank" rel="noopener noreferrer"><img src="./github.png" alt="github logo" width="32"/></a>
              
              <a href="mailto: phuynh7577@gmail.com" target="_blank" rel="noopener noreferrer"><img src="./email.png" alt="github logo" width="34"/></a>
          </div>

          <div className="aside-left">
              <img className="profilepic" src="../profile3.png" alt="my face" height="520"/>
          </div>
          {/* &nbsp; */}
        </div>
    )
  }
}

export default Bio;