import React, { Component } from "react"
import { Navbar, NavItem, Icon } from "react-materialize"
import FacilityList from "./FacilityList"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: "Master Health Facility Reigster Malawi",
            facilities: [
                {
                    name: "Alice HC",
                    district: "Blantyre",
                    email: "amsusukwa@yahoo.com",
                    phone: "01 3241243",
                    dateOpened: "18 July 2010",
                    ownership: "Private"
                },
                {
                    name: "Maxwell & Co",
                    district: "Blantyre",
                    email: "maxmillian@gmail.com",
                    phone: "01 123456",
                    dateOpened: "21 Aug 2007",
                    ownership: "Public"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Navbar
                    style={{ padding: "0px 10px" }}
                    right
                    className="green darken-4"
                    brand="MFL"
                >
                    <NavItem>HOME</NavItem>
                    <NavItem>ABOUT</NavItem>
                    <NavItem className="active">FACILITIES</NavItem>
                    <NavItem>FEEDBACK</NavItem>
                    <NavItem>HELP</NavItem>
                </Navbar>
                <FacilityList facilities={this.state.facilities} />
            </div>
        )
    }
}

export default App
