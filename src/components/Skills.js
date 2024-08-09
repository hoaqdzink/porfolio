
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap";

// hình ảnh
import javaCore from "../assets/img/skills/logoJava.png";
import c from "../assets/img/skills/logo c++.png";
import javaScript from "../assets/img/skills/logoJavaScript.png";
import SpringBoots from "../assets/img/skills/logo java Spring boot.png";
import javaServlet from "../assets/img/skills/logo java servlet.png";

import restFulApi from "../assets/img/skills/logo restFul Api.png";
import reactJs from "../assets/img/skills/logo react.png";
import angulerjs from "../assets/img/skills/logo AngularJs.png";
import bootstrap from "../assets/img/skills/logo bootstrap.png";
import thymeleaf from "../assets/img/skills/logo thymeleaf.png";

import sqlserver from "../assets/img/skills/logo SQL server.png";
import postgre from "../assets/img/skills/logo PostgreSQL.png";
import MongoDB from "../assets/img/skills/Logo MongoDB.png";
import firebase from "../assets/img/skills/logo FireBase.png";
import svn from "../assets/img/skills/logo SVN.png";

import docker from "../assets/img/skills/logo Docker.png";
import cicd from "../assets/img/skills/logo CICD.jfif";
import jenkins from "../assets/img/skills/logo Jenkins.png";
import k8s from "../assets/img/skills/k8s.png";
import github from "../assets/img/skills/logo GitHub.png";

export const Skills = () => {

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
                          <Row className='Skills'>
                            <Col>
                              <ul className="skills-list">
                                <li>
                                  <span>Java Core</span>
                                  <img src={javaCore} alt="" />
                                </li>
                                <li>
                                  <span>C++</span>
                                  <img style={{width: '48px'}} src={c} alt="" />
                                </li>
                                <li>
                                  <span>JavaScript</span>
                                  <img src={javaScript} alt="" />
                                </li>
                                <li>
                                  <span>Spring Boot</span>
                                  <img style={{width: '95px'}} src={SpringBoots} alt="" />
                                </li>
                                <li>
                                  <span>Java Servlet</span>
                                  <img style={{width: '100px'}} src={javaServlet} alt="" />
                                </li>
                              </ul>
                            </Col>
                            <Col>
                              <ul className="skills-list">
                                <li>
                                  <span>RESTful API</span>
                                  <img style={{width: '55px'}}  src={restFulApi} alt="" />
                                </li>
                                <li>
                                  <span>ReactJS</span>
                                  <img style={{width: '40px'}}  src={reactJs} alt="" />
                                </li>
                                <li>
                                  <span>AngularJS</span>
                                  <img style={{width: '71px'}}  src={angulerjs} alt="" />
                                </li>
                                <li>
                                  <span>Bootstrap</span>
                                  <img src={bootstrap} alt="" />
                                </li>
                                <li>
                                  <span>Thymeleaf</span>
                                  <img src={thymeleaf} alt="" />
                                </li>
                              </ul>
                            </Col>
                            <Col>
                              <ul className="skills-list">
                                <li>
                                  <span>SQL Server</span>
                                  <img style={{width: '40px'}} src={sqlserver} alt="" />
                                </li>
                                <li>
                                  <span>PostgreSQL</span>
                                  <img style={{width: '40px'}} src={postgre} alt="" />
                                </li>
                                <li>
                                  <span>MongoDB</span>
                                  <img style={{width: '72px'}} src={MongoDB} alt="" />
                                </li>
                                <li>
                                  <span>Firebase</span>
                                  <img  style={{width: '40px'}} src={firebase} alt="" />
                                </li>
                                <li>
                                  <span>SVN</span>
                                  <img src={svn} alt="" />
                                </li>
                              </ul>
                            </Col>
                            <Col>
                              <ul className="skills-list">
                                <li>
                                  <span>Docker</span>
                                  <img style={{width: '43px'}} src={docker} alt="" />
                                </li>
                                <li>
                                  <span>CI/CD</span>
                                  <img style={{width: '37px'}} src={cicd} alt="" />
                                </li>
                                <li>
                                  <span>Jenkins</span>
                                  <img style={{width: '63px'}} src={jenkins} alt="" />
                                </li>
                                <li>
                                  <span>K8S</span>
                                  <img src={k8s} alt="" />
                                </li>
                                <li>
                                  <span>Github</span>
                                  <img src={github} alt="" />
                                </li>
                              </ul>
                            </Col>
                          </Row>
                       </Container>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
