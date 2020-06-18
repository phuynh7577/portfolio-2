import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer" id="contact">
        <div class="center-footer">
            <footer>
              <h2>Let's Talk</h2>
              <a href="mailto: phuynh7577@gmail.com" target="_blank" rel="noopener noreferrer">phuynh7577@gmail.com</a>
              <div className="icons">
                <a href="https://www.linkedin.com/in/phi-huynh" target="_blank" rel="noopener noreferrer"><img src="./linkedin.png" alt="linkedin logo" width="35"/></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/phuynh7577" target="_blank" rel="noopener noreferrer"><img src="./github.png" alt="github logo" width="35"/></a>
              </div>
            </footer>
        </div>
      </div>
    )
  }
}

export default Footer;