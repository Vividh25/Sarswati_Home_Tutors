import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import { Navbar, Nav, Button, Form } from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="navbar" fixed="top">
                <Navbar.Brand href="/" className="brand nav__brand">
                    Saraswati Home Tuitions
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/about">Tutor's Corner</Nav.Link>
                        <Nav.Link href="/">Take Test</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success" href="/register">
                            Register
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
