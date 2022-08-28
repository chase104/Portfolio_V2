import React from 'react';
import './index.css';
import githubIcon from'../../assets/github_icon.png';
import linkedinIcon from'../../assets/linkedin_icon.png';
import resumeIcon from'../../assets/resume_icon.png';

const Links = () => {
  return (
    <div className="links-bottom-container no-select">
        <a href="https://github.com/chase104?tab=repositories" target="_" className="link-container no-decoration">
            <img className="link-img" src="https://imgs.search.brave.com/1q5lkxLxV9HahvVtXoNCpJghlFnp1x8ZSOyYuWil6VM/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvZG93bmxv/YWQvd2hpdGUvZ2l0/aHViLTEwLTUxMi5w/bmc" alt="github icon"/>
        </a>
        <a href="https://www.linkedin.com/in/chase-van-halen-8068a5108/" target="_" className="link-container no-decoration">
            <img   className="link-img" src={linkedinIcon} alt="LinkedIn icon"/>
        </a>
        <a href="https://drive.google.com/file/d/1GOQX4EUJopKd5wh2y9t21dFR3LI53q50/view?usp=sharing" target="_" className="link-container no-decoration">
            <img  className="link-img" src={resumeIcon} alt="resume icon" />
        </a>
    </div>

    
  )
}

export default Links