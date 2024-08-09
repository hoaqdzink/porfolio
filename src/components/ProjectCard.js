import { Col } from "react-bootstrap";
import github from "../assets/img/GitHub-Logo.wine.svg";
import youtube  from "../assets/img/nav-icon4.svg";
import pdts from "../assets/img/pdf.svg";
export const ProjectCard = ({ title, description, imgUrl, Github, Youtube, pdf }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          {/* icon */}
          <div className="icon-project">
            {Github && <a href={Github}><img src={github} alt="GitHub" /></a>}
            {Youtube && <a href={Youtube}><img src={youtube} alt="YouTube" /></a>}
            {pdf && <a href={pdf}><img src={pdts} alt="PDF" /></a>}
          </div>
        </div>
      </div>
    </Col>
  )
}
