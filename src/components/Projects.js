import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 750,
    width: "80%",
    marginTop: 50,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-25px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'none',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const Projects = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  
  return (
    <div className="projects-card" id="projects">
      <h1>Projects</h1>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={
            './liquor.png'
          }
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'React | | Ruby on Rails'}
            heading={'Inventory Management'}
            body={
              "Includes data visualization and user authentication. Test account: test@test.com test123. User can create/update/delete."
            }
          />
          <Button className={buttonStyles}><a href="https://liquor-iq.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go To Site</a></Button>
          <br></br>
          <br></br>
          <Button className={buttonStyles}><a href="https://github.com/phuynh7577/inventory_client" target="_blank" rel="noopener noreferrer">Go To Source</a></Button>
        </CardContent>
      </Card>

      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={
            './asisme.png'
          }
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'React | | Node Express'}
            heading={'Covid-19 App'}
            body={
              "A web application that consumes a 3rd party API as well as full CRUD capabilities. User can create/update/delete help requests. "
            }
          />
          <Button className={buttonStyles}><a href="https://asis-me.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go To Site</a></Button>
          <br></br>
          <br></br>
          <Button className={buttonStyles}><a href="https://github.com/phuynh7577/asis-me" target="_blank" rel="noopener noreferrer">Go To Source</a></Button>
        </CardContent>
      </Card>

      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={
            './hollywood.png'
          }
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'EJS | | Node Express'}
            heading={'Nail Salon'}
            body={
              "A web application for a local nail salon with user authentication and full CRUD. User can create/update /delete services and brands."
            }
          />
          <Button className={buttonStyles}><a href="https://www.hollywoodnailsalons.com/home" target="_blank" rel="noopener noreferrer">Go To Site</a></Button>
          <br></br>
          <br></br>
          <Button className={buttonStyles}><a href="https://github.com/phuynh7577/hollywood_nail" target="_blank" rel="noopener noreferrer">Go To Source</a></Button>
        </CardContent>
      </Card>

      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={
            './recipe.png'
          }
        />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={'React | | Ruby on Rails'}
            heading={'Dog Recipe App'}
            body={
              "An application for dog lovers whom enjoy feeding homemade recipes. In this app you can post new recipes to share with others."
            }
          />
          <Button className={buttonStyles}><a href="https://recipesfortoto.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go To Site</a></Button>
          <br></br>
          <br></br>
          <Button className={buttonStyles}><a href="https://github.com/phuynh7577/recipe_client" target="_blank" rel="noopener noreferrer">Go To Source</a></Button>
        </CardContent>
      </Card>
    </div>
  );
});

export default Projects



























// class Projects extends Component {


//   render() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };

    
//     return (
//       <div className="projects">
//         <h1>My Projects</h1>
//         <Slider {...settings}>
//             <div className="project-p">
//                 <p>A inventory management system for liquor stores. Includes data visualization of inventory's rate of return and number of inventories per liquor type. User Authentication with Bcrypt and JWT on the back-end. This site can be tested using <span className="project-h3">test@test.com(email) test123(password).(Warning: loading may be slow due to Heroku free hosting)</span>.</p>
//                 <h3 className="project-h3">
//                   <a href="https://github.com/phuynh7577/inventory_client" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
//                   &nbsp; &amp; &nbsp;
//                   <a href="https://github.com/phuynh7577/inventory_api" target="_blank" rel="noopener noreferrer">Back-end Repo</a>
//                   <br></br>
//                   <br></br> 
//                   React |&nbsp; | Ruby on rails
//                 </h3>
//                 <a href="https://liquor-iq.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./liquor.png" alt="my landing page" className="project-img"/></a>
//             </div>
//             <div className="project-p">
//                 <p>A web application for a nail salon which includes user authentication, allowing the owner of the app the ability to create, edit, delete services and brands they offer. <span className="project-h3">(Warning: loading may be slow due to Heroku free hosting)</span></p>
//                 <h3 className="project-h3">
//                   <a href="https://github.com/phuynh7577/hollywood_nail" target="_blank" rel="noopener noreferrer">Front &amp; Back-end</a>
//                   <br></br>
//                   <br></br>
//                   EJS |&nbsp; | Node Express
//                 </h3>
//                 <a href="https://www.hollywoodnailsalons.com/home" target="_blank" rel="noopener noreferrer"><img src="./hollywood.png" alt="my landing page" className="project-img"/></a>
//             </div>
//             <div className="project-p">
//                 <p>A web application that allows users to submit help requests for the state they live in. This app fetches data from a third party API to display COVID19 information per state, and requests are stores to our Node and Express back-end. <span className="project-h3">(Warning: loading may be slow due to Heroku free hosting)</span></p>
//                 <h3 className="project-h3">
//                   <a href="https://github.com/phuynh7577/asis-me" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
//                   &nbsp; &amp; &nbsp;
//                   <a href="https://github.com/leeanneahammond/project_three_backend" target="_blank" rel="noopener noreferrer">Back-end Repo</a>
//                   <br></br>
//                   <br></br>
//                   React |&nbsp; | Node Express
//                 </h3>
//                 <a href="https://asis-me.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./asisme.png" alt="my landing page" className="project-img"/></a>
//             </div>
//             <div className="project-p">
//                 <p>A web application which allows the user to add and view dog recipes. Allows user to create, read, and update. <span className="project-h3">Link to my back-end: https://recipesfortotoapi.herokuapp.com/recipes/. (Warning: loading may be slow due to Heroku free hosting)</span></p>
//                 <h3 className="project-h3">
//                   <a href="https://github.com/phuynh7577/recipe_client" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
//                   &nbsp; &amp; &nbsp;
//                   <a href="https://github.com/phuynh7577/recipe_api" target="_blank" rel="noopener noreferrer">Back-end Repo</a>
//                   <br></br>
//                   <br></br>
//                   React |&nbsp; | Ruby on Rails
//                 </h3>
//                 <a href="https://recipesfortoto.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./recipe.png" alt="my landing page" className="project-img"/></a>
//             </div>
//             <div className="project-p">
//                 <p>A web application that fteches data from Realtor.com's API to display homes for sale in Rhode Island. User can filter through price ranges and much more to find their perfect home.</p>
//                 <h3 className="project-h3">
//                   <a href="https://github.com/phuynh7577/phuynh7577.github.io" target="_blank" rel="noopener noreferrer">Front-end Repo</a>
//                   <br></br><br></br>
//                   HTML &amp; CSS |&nbsp; | JQuery
//                 </h3>
//                 <a href="https://phuynh7577.github.io/" target="_blank" rel="noopener noreferrer"><img src="./benreel.png" alt="my landing page" className="project-img"/></a>
//             </div>
//         </Slider>
//       </div>
//     )
//   }
// }

// export default Projects;