import { Col, Container, Row } from "react-bootstrap";
import ImageHoverComponent from "../Components/ImageHoverComponent";
import Footer from "../Components/Footer";

const Home = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return <Container>
    <Row>
      <Col sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="artist.jpg" style={{
          height: '100vh',
          objectFit: 'cover',
          width: '100%'
        }} alt="Artist" />
      </Col>
      <Col sm={6} style={{
        display: 'flex', flexDirection: 'column',
        height: '100vh', justifyContent: 'center', alignItems: 'center'
      }}>
        <h2>
          Featured Works
        </h2>
        <h3>
          This is a test
        </h3>
      </Col>
    </Row>
    <button className="down-arrow" onClick={scrollToContent}>
      ↓
    </button>
    <div id="content-section" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h2>Check out some of my latest pieces!</h2>
      <p>Here is the content below the initial section.</p>
    </div>
    <Row style={{ margin: '32px 64px', gap: '32px' }}>
      <ImageHoverComponent img={'art/art1.jpg'} title='Test' />
      <ImageHoverComponent img={'art/art2.jpg'} title='Cross' />
    </Row>
    <Row style={{ margin: '32px 64px', gap: '32px' }}>
      <ImageHoverComponent img={'art/art1.jpg'} title='Test' />
      <ImageHoverComponent img={'art/art2.jpg'} title='Cross' />
    </Row>
    {/* <Row style={{ margin: '32px 64px', gap: '32px' }}>
      <ImageHoverComponent img={'art/art1.jpg'} title='Test' />
      <ImageHoverComponent img={'art/art2.jpg'} title='Cross' />
    </Row> */}
    <Footer />
  </Container>;
};

export default Home;