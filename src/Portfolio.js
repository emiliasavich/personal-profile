import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "./assets/profile_photo.png",
          title: "E-commerce Website",
          description: "A full-stack e-commerce platform built with React and Node.js",
          technologies: ["React", "Node.js", "MongoDB", "CSS3"],
        },
        {
          project_image: "./assets/profile_photo.png",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
        {
          project_image: "./assets/profile_photo.png",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
        {
          project_image: "./assets/profile_photo.png",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
        {
          project_image: "./assets/profile_photo.png",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
        {
          project_image: "./assets/profile_photo.png",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
        {
          project_image: "./assets/profile_photo.png",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h1 className="info-title">My Portfolio</h1>
        <div className="portfolio-container">
          {
          //Use this section to list your projects dynamically from state using the map function
          this.state.projects.map(project => {
            return (
              <div className="portfolio-item">
                <div className="item-image">
                  <img src={project.project_image} alt="Project image"/>
                </div>
                <div className="item-text">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="item-skills">
                    {
                      project.technologies.map(t => {
                        return (
                          <div>{t}</div>
                        );
                      }
                      ) 
                    }
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    );
  }
}

export default Portfolio;
