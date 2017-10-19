import React, { Component } from "react"
import { Row, Input, Select } from "react-materialize"

export default class AddFacility extends Component {
    render() {
        return (
            <div>
                <br />
                <Row>
                    <Input type="text" label="Facility Name" s={6} />
                    <Input type="email" label="Email Address" s={6} />
                    <Input type="text" label="Phone Number" s={6} />
                    <Input type="text" label="DHO" s={6} />
                </Row>
            </div>
        )
    }
}
