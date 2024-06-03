import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { CgFacebook, CgInstagram } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return <Container style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    <Row style={{ textAlign: 'center' }}>
      <h2>Contact me</h2>
    </Row>
    <Row style={{ padding: '48px' }}>
      <Col sm={6} style={{ flexDirection: 'column', alignItems: 'center' }}>
        <img src="artist2.jpg" width={'75%'} />
      </Col>
      <Col>
        <Row>
          <h3>
            Find me on Instagram and Facebook, or reach out to me over email!
          </h3>
        </Row>
        <Row>
          <Col>
            <BsInstagram size={'48px'} />
          </Col><Col>
            <CgFacebook size={'48px'} />
          </Col><Col>
            <MdEmail size={'48px'} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>;
};

export default Contact;