import { Container, Row, Col } from "react-bootstrap";
import { Activities } from "./Activities";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Activities />
          <Col size={12} sm={6}>
            <h4 style={{color:'white'}}> <b>&lt;HoaqDzink&gt;</b> </h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-start">
            <div className="ContactInfor">
              <p>Contact information</p>
              <ul className="Contact-infor">
                <li>Nguyen Hoang Vinh</li>
                <li>Email: vinhnh.dev@gmail.com</li>
                <li>Phone: +84 999 89 849</li>
                <li>Address: Ho Chi Minh</li>
              </ul>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
