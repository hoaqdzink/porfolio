import { Col, Row } from "react-bootstrap";
import oracle from "../assets/img/skills/Oracle.PNG";
export const Activities = () => {

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <h3>Activities</h3>
            <p>Some additional certificates I have earned.</p>
            <Row>
              <p style={{textAlign:"left", color: "black"}}>&middot; Oracle Cloud Infrastructure AI Certified Foundations Associate</p>
              <img src={oracle} alt="" />
              <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=79A6433599A2CCCB588C19109B9F1088AAB34760BF8B95D2E7D39DA75257DFFF">(view here)</a>
            </Row>
            <Row>
              <p style={{textAlign:"left", color: "black"}}>&middot; Collaborators  RD-SEAI.</p>
            </Row>
            <Row>
              <p style={{textAlign:"left", color: "black"}}>&middot; Some certificates in frontend and DevOps.
              <a href="https://drive.google.com/drive/u/0/folders/1BIsCK1oWAz5VvO7bZPrRLWRSCBID9RdY">(view here)</a>
              </p> 
            </Row>
          </Row>
        </div>
      </Col>
  )
}
