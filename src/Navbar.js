import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
class Nav extends Component {

    render() {
        return (
            <Navbar bg="secondary" variant="dark" style={{ padding: "16px" }}>
                <Navbar.Brand href="#home">Find the odd one out</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Work by: <a href="#home">Group Alpha</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Nav;
