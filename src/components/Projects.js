import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class Projects extends Component {


  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    
    return (
      <div className="projects">
        <h1>My Projects</h1>
        <Slider {...settings}>
            <div className="project-p">
                <p>A inventory management system for liquor stores. Includes data visualization of inventory's rate of return and number of inventories per liquor type. User Authentication with Bcrypt and JWT on the back-end. This site can be tested using <span className="project-h3">test@test.com(email) test123(password).(Warning: loading may be slow due to Heroku free hosting)</span>.</p>
                <h3 className="project-h3">
                  <a href="https://github.com/phuynh7577/inventory_client" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
                  &nbsp; &amp; &nbsp;
                  <a href="https://github.com/phuynh7577/inventory_api" target="_blank" rel="noopener noreferrer">Back-end Repo</a>
                  <br></br>
                  <br></br> 
                  React |&nbsp; | Ruby on rails
                </h3>
                <a href="https://liquor-iq.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./liquor.png" alt="my landing page" className="project-img"/></a>
            </div>
            <div className="project-p">
                <p>A web application for a nail salon which includes user authentication, allowing the owner of the app the ability to create, edit, delete services and brands they offer. <span className="project-h3">(Warning: loading may be slow due to Heroku free hosting)</span></p>
                <h3 className="project-h3">
                  <a href="https://github.com/phuynh7577/hollywood_nail" target="_blank" rel="noopener noreferrer">Front &amp; Back-end</a>
                  <br></br>
                  <br></br>
                  EJS |&nbsp; | Node Express
                </h3>
                <a href="https://www.hollywoodnailsalons.com/home" target="_blank" rel="noopener noreferrer"><img src="./hollywood.png" alt="my landing page" className="project-img"/></a>
            </div>
            <div className="project-p">
                <p>A web application that allows users to submit help requests for the state they live in. This app fetches data from a third party API to display COVID19 information per state, and requests are stores to our Node and Express back-end. <span className="project-h3">(Warning: loading may be slow due to Heroku free hosting)</span></p>
                <h3 className="project-h3">
                  <a href="https://github.com/phuynh7577/asis-me" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
                  &nbsp; &amp; &nbsp;
                  <a href="https://github.com/leeanneahammond/project_three_backend" target="_blank" rel="noopener noreferrer">Back-end Repo</a>
                  <br></br>
                  <br></br>
                  React |&nbsp; | Node Express
                </h3>
                <a href="https://asis-me.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./asisme.png" alt="my landing page" className="project-img"/></a>
            </div>
            <div className="project-p">
                <p>A web application which allows the user to add and view dog recipes. Allows user to create, read, and update. <span className="project-h3">Link to my back-end: https://recipesfortotoapi.herokuapp.com/recipes/. (Warning: loading may be slow due to Heroku free hosting)</span></p>
                <h3 className="project-h3">
                  <a href="https://github.com/phuynh7577/recipe_client" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
                  &nbsp; &amp; &nbsp;
                  <a href="https://github.com/phuynh7577/recipe_api" target="_blank" rel="noopener noreferrer">Back-end Repo</a>
                  <br></br>
                  <br></br>
                  React |&nbsp; | Ruby on Rails
                </h3>
                <a href="https://recipesfortoto.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./recipe.png" alt="my landing page" className="project-img"/></a>
            </div>
            <div className="project-p">
                <p>A web application that fteches data from Realtor.com's API to display homes for sale in Rhode Island. User can filter through price ranges and much more to find their perfect home.</p>
                <h3 className="project-h3">
                  <a href="https://github.com/phuynh7577/phuynh7577.github.io" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
                  <br></br><br></br>
                  HTML &amp; CSS |&nbsp; | JQuery
                </h3>
                <a href="https://phuynh7577.github.io/" target="_blank" rel="noopener noreferrer"><img src="./benreel.png" alt="my landing page" className="project-img"/></a>
            </div>
        </Slider>
      </div>
    )
  }
}

export default Projects;