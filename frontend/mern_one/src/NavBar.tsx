import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarX() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MyWEB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/LogIn">LogIn</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/LogOut">LogOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default NavbarX;