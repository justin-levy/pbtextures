import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return <Container>
    <Row>
      <Col sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="artist.jpg" style={{
          height: '100vh',
          objectFit: 'cover',
          width: '100%'
        }} />
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
    <Row style={{ margin: '32px 64px', gap: '32px' }}>
      <Col sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="art/art1.jpg" style={{
          height: '50vh',
          objectFit: 'cover',
          width: '100%'
        }} />
      </Col>
      <Col>
        <img src="art/art2.jpg" style={{
          height: '50vh',
          objectFit: 'cover',
          width: '100%'
        }} />
      </Col>
    </Row>
    <Row style={{ margin: '32px 64px', gap: '32px' }}>
      <Col sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="art/art1.jpg" style={{
          height: '60vh',
          objectFit: 'cover',
          width: '100%'
        }} />
      </Col>
      <Col>
        <img src="art/art2.jpg" style={{
          height: '60vh',
          objectFit: 'cover',
          width: '100%'
        }} />
      </Col>
    </Row>
    <Row style={{ margin: '32px 64px', gap: '32px' }}>
      <Col sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="art/art1.jpg" style={{
          height: '60vh',
          objectFit: 'cover',
          width: '100%'
        }} />
      </Col>
      <Col>
        <img src="art/art2.jpg" style={{
          height: '60vh',
          objectFit: 'cover',
          width: '100%'
        }} />
      </Col>
    </Row>
  </Container>;
};

export default Home;