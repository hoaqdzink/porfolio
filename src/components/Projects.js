import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const experiences = [
    {
      company: "KIENLONGBANK",
      role: "Java Developer",
      period: "08/2024 - Present",
      current: true,
      points: [
        "Contributed to the HRM project under Agile methodology, developing modules for employee records, organizational structure, job positions, attendance, leave management, and employment contracts.",
        "Successfully piloted and delivered the employee records and organizational structure modules to organization-wide go-live within 2 months, supporting 15,000+ employees across 700+ organizational units and regions.",
        "Built an approval processing system using Kafka, CDC (Debezium), and Notification Service, leveraging Change Data Capture to capture and propagate data changes in real time, automate approval workflows and email notifications, and reduce manual processing by 80%.",
        "Developed a core banking simulation system covering payments, savings, and credit accounts using Java Spring Boot 3, PostgreSQL, Kafka, and Redis, achieving a 90% score in the training project evaluation.",
        "Supported task planning and coordination for a 5-member development team, including workload allocation, progress tracking, issue resolution, and technical support to team members when needed."
      ]
    },
    {
      company: "IVS JOIN STOCK COMPANY",
      role: "Java Developer",
      period: "10/2023 - 07/2024",
      link: "https://indivisys.vn/",
      points: [
        "Conducted source code conversion from RPG to Java EE, ensuring accuracy and efficiency.",
        "Utilized MyBatis for stable and efficient connections with PostgreSQL databases, enhancing data retrieval and processing capabilities.",
        "Managed source code with SVN to ensure consistency and effective version control.",
        "Prepared detailed reports for clients, providing clear insights into project progress and results.",
        "Conducted JUnit testing to ensure code quality and early detection of potential bugs, enhancing overall product quality."
      ]
    },
    {
      company: "VNPLUS SOFTWARE DEVELOPMENT CORPORATION",
      role: "Freelancer Tester & Front-End Developer",
      period: "05/2022 - 11/2022",
      link: "https://vnplus.vn/",
      points: [
        "Designing test planning and test cases, monitoring issues that arise during the testing process, collaborating with other teams to improve the product, writing test reports, and presenting assigned tasks.",
        "Programming web design projects for the company using HTML, CSS, JavaScript, AngularJS, Bootstrap, and other relevant languages.",
        "Troubleshooting website and application errors."
      ]
    }
  ];

  const education = [
    {
      school: "Vietnam National University, Ho Chi Minh City (VNU-HCM)",
      program: "Ho Chi Minh City University of Technology (HCMUT)",
      period: "2021 - Present",
      current: true,
      faculty: "Computer Science and Engineering",
      major: "Computer Science",
      gpa: "3.0 / 4.0"
    },
    {
      school: "FPT University",
      program: "FPT Polytechnic Ho Chi Minh",
      period: "2019 - 07/2021",
      faculty: "Information Technology",
      major: "Software Applications",
      gpa: "3.4 / 4.0"
    }
  ];

  const projects = [
    {
      title: "Mega-Shop",
      description: "Java Servlet and JSP, SQL Server. E-commerce website selling model products.",
      imgUrl: projImg1,
      Github: "https://github.com/hoaqdzink/MegaAnimeShop.git",
      Youtube: "https://www.youtube.com/watch?v=gpIEuf8B7c4"
    },
    {
      title: "Booking Travel & Event",
      description: "Java Spring Boots and AngularJS, SQL Server",
      imgUrl: projImg2,
      Github: "https://github.com/hoaqdzink/bookingTravelEvent.git",
      pdf: "https://drive.google.com/file/d/1ut77GrIono-b7kbeSnqkJCs6ShFAxRxz/view?usp=sharing"
    },
    {
      title: "Shoe store",
      description: "Php and MySQL",
      imgUrl: projImg3,
      Github: "https://github.com/hoaqdzink/AssignmentLTW.git",
      pdf: "https://drive.google.com/file/d/1ZwZM9ea_mGVlPjI6b6Tb1TDqEVj7Ybc8/view?usp=sharing"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                {/* ===== Work Experience — Timeline ===== */}
                <div className="exp-block exp-block-first">
                  <h3 className="exp-heading"><span>Work Experience</span></h3>
                  <div className="timeline">
                    {experiences.map((exp, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-marker">
                          <span className="timeline-dot"></span>
                        </div>
                        <div className="timeline-card">
                          <div className="timeline-card-head">
                            <h5 className="timeline-company">{exp.company}</h5>
                            <span className={exp.current ? "timeline-period current" : "timeline-period"}>{exp.period}</span>
                          </div>
                          <div className="timeline-role">
                            <span>{exp.role}</span>
                            {exp.link &&
                              <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.link}</a>}
                          </div>
                          <ul className="timeline-points">
                            {exp.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ===== Education ===== */}
                <div className="exp-block">
                  <h3 className="exp-heading"><span>Education</span></h3>
                  <div className="timeline">
                    {education.map((edu, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-marker">
                          <span className="timeline-dot"></span>
                        </div>
                        <div className="timeline-card">
                          <div className="timeline-card-head">
                            <h5 className="timeline-company">{edu.school}</h5>
                            <span className={edu.current ? "timeline-period current" : "timeline-period"}>{edu.period}</span>
                          </div>
                          <div className="timeline-role">
                            <span>{edu.program}</span>
                          </div>
                          <div className="edu-meta">
                            <span className="edu-tag"><b>Faculty:</b> {edu.faculty}</span>
                            <span className="edu-tag"><b>Major:</b> {edu.major}</span>
                            <span className="edu-tag edu-gpa"><b>GPA:</b> {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ===== Projects — Grid ===== */}
                <div className="exp-block">
                  <h3 className="exp-heading"><span>Projects</span></h3>
                  <Row className="justify-content-center">
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
