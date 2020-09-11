import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="about" id="about">
          <div className="aboutme">
                <p class="top-para">
                  I am a fullstack developer with more than six years of experience in the financial and banking industry. I'm proficient in web development. I have worked on a variety of projects where I made use of the following technologies:
                </p>
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

                <p>
                    I'm an excellent communicator and am very passionate about web development. I enjoy working with a team and tackling new problems as they arise. If you would like to work with me, feel free to reach out via email: <a className="word-link" href="mailto: phuynh7577@gmail.com" target="_blank" rel="noopener noreferrer">Phuynh7577@gmail.com.</a> My resume can be downloaded <a class="navbar-brand" href="https://docdro.id/quOXe3G" target="_blank">here</a> and I can also be found on <a className="word-link" href="https://www.linkedin.com/in/phi-huynh" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                </p>
            </div>
        </div>
    )
  }
}

export default About;