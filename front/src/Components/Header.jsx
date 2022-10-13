import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../Actions/userAction';

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfro} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="/"><Link to='/' >Navbar scroll</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav.Link><Link to='/mynotes'>My Notes</Link></Nav.Link>
                        <NavDropdown title="Kamran" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick = {logoutHandler}>
                                LogOut
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;