import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      expand="lg"
      className=" shadow position-fixed top-10 start-50 translate-middle-x rounded-3 px-4 py-2 my-4  z-3"
      style={{ backgroundColor: '#2D3250 '}}

    >
      <Container className="justify-content-center">
        <Nav className="d-flex gap-3">
          <Nav.Link as={Link} to="/" className="fw-medium text-white ">
            Home
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/about" className="fw-medium text-white">
            About
          </Nav.Link> */}
          <Nav.Link as={Link} to="/cv" className="fw-medium text-white">
            CV
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
