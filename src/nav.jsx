import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-info" style={{ backgroundColor: '#2874f0'}}>
      <Container fluid>
        <Navbar.Brand href="#" className='ms-5' >Flipzon</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Products"
              className="me-2"
              style={{ width: '500px' }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="#action1" className='ms-5'>Home</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown title="More" className='ms-5' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Notification Preference</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               24x7 Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Advertise
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6" className='ms-5'>My Cart</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;