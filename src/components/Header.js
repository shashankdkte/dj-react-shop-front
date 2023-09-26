import React from 'react'
import { Container,Nav,Navbar} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>

    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={'/'} >
        <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={`/cart`}>
            <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/profile'>
            <Nav.Link href="#link"><i className="fas fa-user"></i> Login</Nav.Link>
               </LinkContainer>
                

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header