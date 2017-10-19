import React, { Component } from "react"
import FacilityList from "../facilities/FacilityList"
import Navbar from "./Navbar"
import AddFacility from "../facilities/AddFacility"
import "./App.css"
import { Route, Switch } from "react-router-dom"

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: "Master Health Facility Reigster Malawi"
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route
                            path="/home"
                            render={() => <div>This is Home</div>}
                        />
                        <Route
                            exact
                            path="/facilities"
                            component={FacilityList}
                        />
                        <Route
                            exact
                            path="/facilities/add"
                            component={AddFacility}
                        />
                        <Route
                            exact
                            path="/"
                            render={() => <div>This is Dashboard</div>}
                        />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
