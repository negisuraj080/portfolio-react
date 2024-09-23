import React from "react";
import "./About.css";
import logo from "../../assets/logo.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-tittle">
        <h1>About me</h1>
        <img src={logo} alt="" />
      </div>
      <div className="about1">
        <div className="about-para">
        <p>
        I am a passionate Frontend Developer with a strong foundation in HTML, CSS, Tailwind CSS, JavaScript, and React.js. Having recently completed my studies, I am eager to apply my skills and collaborate with dynamic teams to contribute to impactful projects and grow within the industry
        </p>
        <p>My passion for frontend development is evident in the enthusiasm and dedication I bring to each project, as I continuously strive to learn and improve my skills through hands-on experience and creative problem-solving.</p>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS</p><hr style={{width:'50%'}}/>
          </div>
          <div className="about-skill">
            <p>Tailwind CSS</p><hr style={{width:'70%'}}/>
          </div>
          <div className="about-skill">
            <p>JavaScript</p><hr style={{width:'60%'}}/>
          </div>
          <div className="about-skill">
            <p>React JS</p><hr style={{width:'50%'}}/>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
