import React from 'react'
import './index.css'
import profilePic from '../../assets/linkedin6Pic.jpg'
import hello from '../../assets/hello.png'


const About = () => {
  return (
    <div className="about-container">
        <div className="about-content">
            <img className="profile-pic" src={profilePic} alt="Professional headshot"  />
            <div className="hello">
                  <img src={hello}/>
                </div>
            <div>Full Stack Web Developer | React Specialist | OOP | Node.js & Express | SQL & NoSQL</div>
            <div>Extra info</div>
        </div>

    </div>
  )
}

export default About