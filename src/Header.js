import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    
    function logout() {
        localStorage.clear()
        navigate('/login');
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">GiftGP</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        {
                            // localStorage.getItem('user-info') ?
                                <>
                                    
                                    <Link to="/addproduct" >Add Product</Link>
                                    <Link to="/updateproduct" >Update Product</Link>
                                {/* </>
                                :
                                <> */}
                                    <Link to="/login" >Login</Link>
                                    <Link to="/register" >Register</Link>
                                </>
                        }

                    </Nav>
                   
                        <Nav>
                            <NavDropdown title={'userInfo'}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                       
                   
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;