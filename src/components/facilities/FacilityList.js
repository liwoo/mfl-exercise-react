import React, { Component } from "react"
import { Table, Button, Icon } from "react-materialize"
import axios from "axios"
import moment from "moment"
import { Link } from "react-router-dom"

class FacilityList extends Component {
    constructor() {
        super()
        this.state = {
            apiRootUrl: "http://localhost:3000/api",
            facilities: []
        }
    }

    componentWillMount() {
        this.fetchFacilities()
    }

    fetchFacilities() {
        let facilities = []

        axios.get(`${this.state.apiRootUrl}/facilities`).then(response => {
            response.data.forEach(facility => {
                let model = {
                    name: facility.name,
                    district: "",
                    email: facility.email,
                    phone: facility.phone,
                    dateOpened: moment(facility.date_opened).format(
                        "MMM Do YYYY"
                    ),
                    ownership: ""
                }

                const district = axios.get(
                    `${this.state
                        .apiRootUrl}/facilities/${facility.id}/district`
                )

                const owner = axios.get(
                    `${this.state.apiRootUrl}/facilities/${facility.id}/owner`
                )

                Promise.all([district, owner])
                    .then(values => {
                        model.district = values[0].data.name
                        model.owner = values[1].data.name
                        facilities.push(model)
                        this.setState({ facilities })
                    })
                    .catch(err => console.error(err))
            })
        })
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn btn-primary" to="/facilities/add">
                    Add New Facility
                </Link>
                <Table striped>
                    <thead>
                        <tr>
                            <th data-field="id">Facility Name</th>
                            <th data-field="name">District</th>
                            <th data-field="price">Email</th>
                            <th data-field="price">Phone</th>
                            <th data-field="price">Date Opened</th>
                            <th data-field="price">Ownership</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.facilities.map(facility => {
                            return (
                                <tr key={facility.email}>
                                    <td>{facility.name.toUpperCase()}</td>
                                    <td>{facility.district.toUpperCase()}</td>
                                    <td>{facility.email.toUpperCase()}</td>
                                    <td>{facility.phone.toUpperCase()}</td>
                                    <td>{facility.dateOpened.toUpperCase()}</td>
                                    <td>{facility.owner.toUpperCase()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default FacilityList
