import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div>
          <div className="skills-h1">
            <h1>My Skills</h1>
          </div>
        <div className="skills" id="skills">
            <div className="skills-tag">
              <span className="tag">MongoDB</span>
              <span className="tag">Express</span>
              <span className="tag">React</span>
              <span className="tag">Node</span>
              <span className="tag">Ruby on Rails</span>
              <span className="tag">Postgres</span>
              <span className="tag">Javascript</span>
              <span className="tag">CSS</span>
              <span className="tag">HTML</span>
              <span className="tag">SASS</span>
              <span className="tag">Bootstrap</span>
              <span className="tag">Git &amp; Github</span>
              <span className="tag">Heroku</span>
          </div>
        </div>
        {/* <div className="skills-img">
            <img src="./mern3.png" alt="mern" width="425"/>
            <img src="./restful.png" alt="restful" width="300"/>
        </div> */}
      </div>
    )
  }
}

export default Skills;