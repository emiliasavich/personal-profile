import { Component } from 'react';
import './About.css';
import profilePic from './assets/profile_photo.png'

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h1 className="info-title">About Me</h1>
        <div className="about-container">
          <div className="image-container">
            <img src={profilePic} alt="Profile Picture" className="profile-pic"/>
          </div>
          <div className="text-container">
            <p>Aspiring physician currently creating <a href="anatomyquest.org">AnatomyQuest</a>: a nonprofit that builds quality educational software accessible to all students.</p>
            <p>Senior data science major at NJIT who will be starting Rutgers’ New Jersey Medical School this summer.</p>
            <p>Tutors select courses at the Ying Wu College of Computing.</p>
            <div>
              <h4 className="skills-title">Skills & Technologies</h4>
              <div className="skills-container">
                <div>C</div>
                <div>Python</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>JS</div>
                <div>R</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
