import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import education from "../assets/img/skills/education.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Github } from "react-bootstrap-icons";

export const Projects = () => {

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
      pdf:"https://drive.google.com/file/d/1ZwZM9ea_mGVlPjI6b6Tb1TDqEVj7Ybc8/view?usp=sharing"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>I have accumulated valuable experience across various areas including work, education, and personal projects. 
                  With a solid foundation from practical work and involvement in diverse projects, I have developed problem-solving skills, 
                  time management, and effective teamwork. By combining extensive academic knowledge with practical experience, 
                  I am ready to contribute and add value to the organization through creativity and dedicated commitment.</p>
                  <p style={{color: "rgb(89 87 87)", fontSize: '15px'}}>Click to view experience</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="Text_Tab">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="Text_Tab">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="Text_Tab">Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="work_experience">
                        <h5><b>&middot; IVS JOIN STOCK COMPANY</b></h5>
                        <a href="https://indivisys.vn/"><span>(https://indivisys.vn/)</span></a>
                        <div class="info">
                            <span style={{marginRight: '20px'}} class="position">Position: Java Developer</span> -
                            <span style={{marginLeft: '20px'}}>Working period: 10/2023 - 7/2024</span>
                        </div>
                      </Row>
                      <Row>
                        <div class="experience">
                            <h6>Below are some experiences I gained at the company:</h6>
                            <ul>
                                <li>Conducted source code conversion from RPG to Java EE, ensuring accuracy and efficiency.</li>
                                <li>Utilized MyBatis for stable and efficient connections with PostgreSQL databases, enhancing data retrieval and processing capabilities.</li>
                                <li>Managed source code with SVN to ensure consistency and effective version control.</li>
                                <li>Prepared detailed reports for clients, providing clear insights into project progress and results.</li>
                                <li>Conducted JUnit testing to ensure code quality and early detection of potential bugs, enhancing overall product quality.</li>
                            </ul>
                        </div>
                      </Row>

                      <Row className="work_experience" style={{marginTop: '50px'}}>
                        <h5><b>&middot; VNPLUS SOFTWARE DEVELOPMENT CORPORATION</b></h5>
                        <a href="https://vnplus.vn/"><span>(https://vnplus.vn/)</span></a>
                        <div class="info">
                            <span style={{marginRight: '20px'}} class="position">Position: Freelancer Tester & Front-End Developer </span> -
                            <span style={{marginLeft: '20px'}}>Working period: 05/2022 - 11/2022</span>
                        </div>
                      </Row>
                      <Row>
                        <div class="experience">
                            <h6>Below are some experiences I gained at the company:</h6>
                            <ul>
                                <li>Designing test planing and test cases , monitoring issues that arise during the testing process, collaborating with other teams to improve the product, writing test reports, and presenting assigned tasks.</li>
                                <li>Programming web design projects for the company using HTML, CSS, JavaScript, AngularJS, Bootstrap, and other relevant languages..</li>
                                <li>Troubleshooting website and application errors.</li>
                            </ul>
                        </div>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="image-container">
                      <img src={education} alt="" className="responsive-image" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
