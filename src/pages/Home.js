import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi! My Name is Sonam</h2>
        <div className="prompt">
          <p>I am a  software engineer based in NYC.</p>
         <a target="#" href="https://www.linkedin.com/in/sonam-tsering/"><LinkedInIcon /></a> 
         <a target="#" href="mailto:tseringsonam34@hotmail.com"><EmailIcon /></a> 
         <a target="#" href="https://github.com/Sonam0123"> <GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, NPM,
              Ionic, BootStrap, MaterialUI, Git, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Python, NodeJS, ExpressJS, Django, MySQL, PostgreSQL, MongoDB,  DigitalOcean
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;