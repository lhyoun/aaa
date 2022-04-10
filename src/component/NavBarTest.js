import React from 'react';
import { Carousel } from 'react-bootstrap'
const NavBarTest = ({ imageList }) => {

	return (
		<>
			<div style={{ position: 'absolute', width: '300px', bottom: '200px', left: '500px', backgroundColor: 'white', padding: '50px' }}>NavBarTest에서 네비게이션 만들기
			<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/collage.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/skyview01.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/collage.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</div>
		</>
		// <NavBar bg="light" expand="lg">
		// 	<Container>
		// 		<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		// 		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		// 		<Navbar.Collapse id="basic-navbar-nav">
		// 			<Nav className="me-auto">
		// 				<Nav.Link href="#home">Home</Nav.Link>
		// 				<Nav.Link href="#link">Link</Nav.Link>
		// 				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
		// 					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		// 					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		// 					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		// 					<NavDropdown.Divider />
		// 					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		// 				</NavDropdown>
		// 			</Nav>
		// 		</Navbar.Collapse>
		// 	</Container>
		// </NavBar>
	);
};

export default NavBarTest;