import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {

  const learning = ["AWS", "Kubernetes", "System Design", "AI-DLC", "Microservices"];

  const skillGroups = [
    {
      category: "Programming",
      skills: ["Java", "C++", "JavaScript (NestJS)"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Spring Boot 3", "Kafka", "Git", "Docker", "Agile/Scrum"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "SQL Server", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["EC2", "S3", "CI/CD", "Linux", "Nginx"],
      note: "Basic knowledge"
    },
    {
      category: "Soft Skills",
      skills: ["Problem-Solving", "Teamwork", "Communication", "System Design", "AI-DLC"]
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My skills have been developed through various jobs and projects <br /> I have participated in during my time at school and in the companies I have worked for.
                <br />These experiences have helped me accumulate and refine my skills: </p>
              <Container>
                <Row className="skill-groups">
                  {skillGroups.map((group, index) => (
                    <Col md={6} className="skill-group-col" key={index}>
                      <div className="skill-group">
                        <h5 className="skill-group-title">
                          {group.category}
                          {group.note && <span className="skill-group-note">{group.note}</span>}
                        </h5>
                        <div className="skill-chips">
                          {group.skills.map((skill, i) => (
                            <span className="skill-chip" key={i}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </Col>
                  ))}

                  <Col md={6} className="skill-group-col">
                    <div className="skill-group learning-bx">
                      <h5 className="skill-group-title learning-title">
                        <span className="learning-pulse"></span>
                        Currently Learning &amp; Focus
                      </h5>
                      <div className="skill-chips">
                        {learning.map((item, i) => (
                          <span className="skill-chip learning-chip" key={i}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
