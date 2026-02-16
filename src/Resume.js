import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science Computing, with Honors",
      school: "New Jersey Institute of Technology",
      details: [
        "2023-2026",
        "4.0/4.0"
      ]
    },
    {
      degree: "High School Diploma",
      school: "Marine Academy of Technology and Environmental Science (MATES)",
      details: [
        "2019-2023",
        "98.922/100.0",
        "Valedictorian"
      ]
    }
  ];

  const experience = [
    {
      title: "AnatomyQuest Co-Founder",
      company: "AnatomyQuest, Inc.",
      period: "January 2026 - Present",
      responsibilities: [
        "Co-founded a nonprofit focused on creating measurable improvements in student learning outcomes",
        "Helped design the website with a strong emphasis on user experience and accessibility",
        "Cultivated partnerships by reaching out to educators and professionals for feedback and project support"
      ]
    },
    {
      title: "Tutor",
      company: "New Jersey Institute of Technology",
      period: "January 2026 - Present",
      responsibilities: [
        "Teaches students foundational concepts in data mining, data structures, and assembly programming",
        "Fosters a welcoming environment where students feel comfortable asking questions",
        "Works with students to identify and strengthen their weaknesses"
      ]
    },
    {
      title: "Vice President of Habitat for Humanity Club",
      company: "New Jersey Institute of Technology",
      period: "February 2024 - Present",
      responsibilities: [
        "Organizes four to five volunteering events per semester",
        "Coordinates with the broader Habitat for Humanity organization to run events",
      ]
    },
    {
      title: "Substitute Teacher",
      company: "Little Egg Harbor School District",
      period: "January 2024",
      responsibilities: [
        "Oversees preschool through sixth grade classes while the teacher is absent",
        "Maintains a calm, safe, and supportive learning environment for students",
        "Explains academic concepts and helps students resolve interpersonal conflicts"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["C", "Python", "HTML", "CSS", "JavaScript", "R"],
    "Frameworks & Libraries": ["React"],
    "Tools & Technologies": ["Git", "VS Code"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      {edu.details.map((detail, i) => {
                        return (
                          <span key={'edu-'+index+'-detail-'+i}>{detail}</span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
