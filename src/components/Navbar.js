// import React, { Component } from 'react';
// import '../index';
// import {Link} from 'react-router-dom'


// class Navbar extends Component {
//   render() {
//     return (
//       <div className="navbar">
//           <Link to="/projects" className="nav-link"><span className="nav-span"> </span> Projects</Link>
//           <Link to="/experiences" className="nav-link"><span className="nav-span"></span> Experiences</Link>
//           <Link to="/skills" className="nav-link"><span className="nav-span"></span> Skills</Link>
//           <a href="https://docdro.id/BcJ5RCy" target="_blank" rel="noopener noreferrer" className="nav-link"><span className="resume">Resume</span></a>
//       </div>
//     )
//   }
// }

// export default Navbar;

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <div className="burgerking">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <img src="../salute.png" alt="soldier saluting"/>
        <h1 onClick={handleClose}>X</h1>
        <div className="li">
          <MenuItem onClick={handleClose}><a href="#contact">CONTACT</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#about">ABOUT</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#projects">PROJECTS</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#experience">EXPERIENCE</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#skills">SKILLS</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="https://docdro.id/BcJ5RCy" target="_blank" rel="noopener noreferrer" className="nav-link">RESUME</a></MenuItem>
        </div>
      </Menu>
    </div>
  );
}