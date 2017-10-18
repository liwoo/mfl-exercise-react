import React from "react"
import { Table } from "react-materialize"

const FacilityList = ({ facilities }) => {
    return (
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
                {facilities.map(facility => {
                    return (
                        <tr>
                            <td>{facility.name}</td>
                            <td>{facility.district}</td>
                            <td>{facility.email}</td>
                            <td>{facility.phone}</td>
                            <td>{facility.dateOpened}</td>
                            <td>{facility.ownership}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default FacilityList
