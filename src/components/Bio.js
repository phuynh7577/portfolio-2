import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div className="top">
          <div className="bio">
                <div className="aside-right">
                  <h3>SOFTWARE ENGINEER</h3>
                  <h1>Phi Huynh</h1>
                  <div className="icon-bio">
                      <a href="https://www.linkedin.com/in/phi-huynh" target="_blank" rel="noopener noreferrer"><img src="./linkedin.png" alt="linkedin logo" width="35"/></a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="https://github.com/phuynh7577" target="_blank" rel="noopener noreferrer"><img src="./github.png" alt="github logo" width="35"/></a>
                </div>
          </div>

            <div className="aside-left">
                <img className="profilepic" src="../profile3.png" alt="my face" height="520"/>
            </div>
            {/* &nbsp; */}
          </div>
      </div>
    )
  }
}

export default Bio;