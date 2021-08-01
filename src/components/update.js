import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

const Update = () => {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6105feac48c6fd0017089f7a.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        })
        .then(() => {
            history.push('/read')
        })
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={e => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Update</Button>
        </Form>
    )
}

export default Update