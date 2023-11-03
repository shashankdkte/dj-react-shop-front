import React from 'react'
import { Container,Nav,NavDropdown,Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userAction';
import SearchBox from './SearchBox';
import DepartmentNav from './DepartmentNav';
import NavList from './NavList';
function Header() {

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout())
  }

  
  return (
    <header>

      <Navbar collapseOnSelect>
        <Container className='header'>
          <LinkContainer to={'/'}   className='navbar__logo-section'>
        <Navbar.Brand>Rivly</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <DepartmentNav/>
            <SearchBox />
            <Nav>
              <div className="navbar_cart-button-section">

            <LinkContainer to={`/cart`} className='cart-icon-container'>
            <Nav.Link href="#home"><i className="fa fa-shopping-cart"></i></Nav.Link>
                </LinkContainer>
                <div class="cart-count">
              <span>2</span>
            </div>
              </div>
              <div class="navbar_amount-section">
            <p class="amount-user-icon">R</p>
            <p class="amount-user-content">$0.00</p>
          </div>
              {userInfo ? (<NavDropdown title={userInfo.name} id='username'>
                
                <LinkContainer to='/profile'>
            <NavDropdown.Item >Profile</NavDropdown.Item>
                </LinkContainer>
            
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                
                </NavDropdown>
                )
                : (<LinkContainer to='/login'>
                  
            <Nav.Link className='navbar_profile-section'><i className="fas fa-user"></i> Login</Nav.Link>
               </LinkContainer>
                )
                }
             {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}


          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavList/>
      </Navbar>
    </header>
  )
}

export default Header