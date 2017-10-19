import React from "react"
import { Navbar, NavItem, Icon } from "react-materialize"
import { Link } from "react-router-dom"

export default () => {
    const styles = {
        padding: "0px 10px"
    }
    return (
        <Navbar style={styles} className="green darken-4">
            <div className="container">
                <NavItem>
                    <Link to="/">HOME</Link>
                </NavItem>
                <NavItem>ABOUT</NavItem>
                <NavItem>
                    <Link to="/facilities">FACILITIES</Link>
                </NavItem>
                <NavItem>FEEDBACK</NavItem>
                <NavItem>HELP</NavItem>
            </div>
        </Navbar>
    )
}
