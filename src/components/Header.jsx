import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      expand="lg"
      className="shadow position-fixed top-10 start-50 translate-middle-x rounded-3 px-4 py-2 my-4 z-3 custom-navbar"
      style={{ backgroundColor: '#F5E8C7' }}
    >
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="d-flex ">
            <Nav.Link as={Link} to="/" className="fw-medium text-black">
              Home
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/about" className="fw-medium text-white">
              About
            </Nav.Link> */}
            <Nav.Link as={Link} to="/cv" className="fw-medium text-black">
              CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
