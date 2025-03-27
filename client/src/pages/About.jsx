import '../styles/About.css'
import csharp from "../assets/skillIcons/CSharp.svg";
import net from "../assets/skillIcons/NET.svg";
import javascript from "../assets/skillIcons/JavaScript.svg";
import react from "../assets/skillIcons/React.svg";
import css from "../assets/skillIcons/CSS3.svg";
import bootstrap from "../assets/skillIcons/Bootstrap.svg";
import html from "../assets/skillIcons/HTML5.svg";
import python from "../assets/skillIcons/Python.svg";
import docker from "../assets/skillIcons/Docker.svg";
import mysql from "../assets/skillIcons/MySQL.svg";

const About = () => {

    const skills = [
        { icon: csharp, name: "C#" },
        { icon: net, name: "Dotnet" },
        { icon: javascript, name: "JavaScript" },
        { icon: react, name: "React" },
        { icon: css, name: "CSS" },
        { icon: bootstrap, name: "Bootstrap" },
        { icon: html, name: "HTML" },
        { icon: python, name: "Python" },
        { icon: docker, name: "Docker" },
        { icon: mysql, name: "MySQL" },
    ];

    return ( 
        <div className="about-container">
            <div className="about-content container">
                <h2 className="col-12 row">About</h2>
                <div className="row row-no-gutters">
                    <div className="col-12 col-md-5 about-profile">
                        <img src="./src/assets/ring(full).jpg" alt="Gavin Saacke PFP" />
                        <h4>Gavin Saacke</h4>
                        <p>Moultrie Mobile</p>
                    </div>
                    <div className="col-12 col-md-7 about-body">
                        <p>Gavin Saacke is a Software Engineer and Senior Student-Athlete at the University of Alabama, specializing in full-stack development and data analytics. While studying Management Information Systems, he combines technical expertise with a track record of excellence as a Division I Athlete in Track & Field and Cross Country.

                        <br></br><br></br>With experience in C#, .NET, JavaScript, React, and more, Gavin has built and deployed software solutions, including client management software and data-driven web applications. As a Software Engineer with Moultrie Mobile, he contributes to backend development, API design, and test automation.

                        <br></br><br></br>Beyond software, Gavin has been recognized for both academics (UA Presidential Scholarship, Dean's List, SEC Academic Honor Roll, National Merit Commended Scholar) and athletics (All-SEC Freshman Cross Country Award Winner, Twice an NCAA Cross Country Division I Championships Participant, SEC Cross Country Championship Team Title); he pursues excellence in his passions.</p>
                    </div>
                </div>
                <div className="col-12 skill-container">
                    <h4>Skills</h4>
                    <div className='skill-icons'>
                    {skills.map((skill) => (
                        <>
                            {/* <p>{skill.name}</p> */}
                            <img className="skill-icon col-1" src={skill.icon} alt={skill.name} />
                        </>
                    ))}
                    </div>
                </div>
            </div>
            
            <div className="about-bg"></div>
        </div>
        
     );
}
 
export default About;