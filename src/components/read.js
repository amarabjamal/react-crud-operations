import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'

const Read = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://6105feac48c6fd0017089f7a.mockapi.io/fakeData')
            .then(response => {
                console.log(response.data);
                console.log(response.headers);
                console.log(response.status);
                setAPIData(response.data);
            })
    }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map( data => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Yes' : 'No'}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read;