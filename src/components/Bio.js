import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <aside className="aside-left">
            <img src="../profilepic.jpg" alt="my face"/>
        </aside>
        <aside className="aside-right">
            <h1>Phi Huynh <span className="bio-span">| |</span> <span>Software Engineer</span></h1>

            <a href="https://www.linkedin.com/in/phi-huynh" target="_blank" rel="noopener noreferrer"><img src="./linkedin.png" alt="linkedin logo" width="38"/></a>

            <a href="https://github.com/phuynh7577" target="_blank" rel="noopener noreferrer"><img src="./github.png" alt="github logo" width="32"/></a>
            
            <a href="mailto: phuynh7577@gmail.com" target="_blank" rel="noopener noreferrer"><img src="./email.png" alt="github logo" width="34"/></a>

            <p>I'm a software engineer who enjoys learning new things. I have good working knowledge of both front-end and back-end development using the MERN stack and ruby on rails. I value honesty and hardwork, but also stand for quality. During my free time I enjoy building my skills as a developer. I enjoy working with a team to learn from one another. Sometimes being on a team feels like it's your team versus the world, and that is where our combined skills can make a project whole. Checkout my <a className="word-link" href="https://www.linkedin.com/in/phi-huynh" target="_blank" rel="noopener noreferrer">LinkedIn</a> &amp; <a className="word-link" href="https://github.com/phuynh7577" target="_blank" rel="noopener noreferrer">Github</a>. If you'd like to chat about my journey, please feel free to reach out via email: <a className="word-link" href="mailto: phuynh7577@gmail.com" target="_blank" rel="noopener noreferrer">Phuynh7577@gmail.com.</a></p>
        </aside>
        {/* &nbsp; */}
      </div>
    )
  }
}

export default Bio;