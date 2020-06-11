import React, { Component } from 'react';
import '../index';
import {Link} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <Link to="/"><span className="nav-span">[&nbsp; </span> Profile,</Link>
          <Link to="/projects" className="nav-link"><span className="nav-span"> </span> Projects,</Link>
          <Link to="/experiences" className="nav-link"><span className="nav-span"></span> Experiences,</Link>
          <Link to="/skills" className="nav-link"><span className="nav-span">&nbsp;</span> Skills,</Link>
          <a href="https://docdro.id/bGdXS2C" target="_blank" rel="noopener noreferrer" className="nav-link">Resume &nbsp;<span className="nav-span">&nbsp;]</span></a>
      </div>
    )
  }
}

export default Navbar;