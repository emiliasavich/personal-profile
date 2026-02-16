import { Component } from 'react';
import './Portfolio.css';
import anatomyquest from './assets/anatomyquest.png'
import object_detection from './assets/object_detection.jpg'
import video_rag from './assets/video_rag.png'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: anatomyquest,
          image_style: "contain",
          title: "AnatomyQuest",
          description: "Co-founded an educational nonprofit to measurably improve anatomical education",
          technologies: ["Next.js", "Teaching", "Management"],
          live_demo: "https://anatomyquest.org",
          view_code: "https://github.com/emiliasavich/AnatomyQuest"
        },
        {
          project_image: video_rag,
          image_style: "cover",
          title: "Creating a RAG Model",
          description: "Built a RAG model that returns the most relevant video clip to a user's query",
          technologies: ["Python", "AI", "RAG", "MongoDB"],
          live_demo: "https://youtu.be/lM9bFxFe8KI",
          view_code: "https://github.com/pleyva2004/Video_RAG_Model"
        },
        {
          project_image: object_detection,
          image_style: "cover",
          title: "Object Detection",
          description: "Fine-tuned an object detection model to classify and count vehicles traveling on a highway (Task 3 in code)",
          technologies: ["Python", "AI", "Object Detection"],
          live_demo: "https://youtu.be/eynRprFRVgQ",
          view_code: "https://github.com/emiliasavich/CS370-Assignments/blob/main/assignments/assignment3/01-assignment-3.ipynb"
        }
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
          this.state.projects.map((project, i) => {
            return (
              <div className="portfolio-item" key={'portfolio-item-' + i}>
                <div className="item-image">
                  <img src={project.project_image} alt="Project image" className={"img-" + project.image_style}/>
                </div>
                <div className="item-text">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="item-skills">
                    {
                      project.technologies.map((t, j) => {
                        return (
                          <div key={'portfolio-'+i+'-technology-'+j}>{t}</div>
                        );
                      }
                      ) 
                    }
                  </div>
                  <div className="buttons">
                    <button className="live-demo"><a href={project.live_demo}>Live Demo</a></button>
                    <button className="view-code"><a href={project.view_code}>View Code</a></button>
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
