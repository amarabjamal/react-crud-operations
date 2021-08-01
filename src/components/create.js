import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
        axios.post('https://6105feac48c6fd0017089f7a.mockapi.io/fakeData',{
            firstName,
            lastName,
            checkbox
        })
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={e => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={e => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={e => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    )
}

export default Create