import { Component } from 'react'

// import other component
import FormInput from '../../Forms/FormInput/FormInput';
import Titles from '../../Titles/Titles';
// import other pkg
import { Form, Row, Col, Button } from 'react-bootstrap';


class UserInformation extends Component {
    render() {
        return (
            <>
                <Titles title='Welcome to the Information' text="check or change your information as you want" />
                
                <Form>
                    <Row className="mt-5 px-3">
                        <FormInput 
                            as={Col}
                            inpClass='px-3 py-2'
                            className="p-0"
                            name="firstName"
                            controlId="first-name-input"
                            text="First Name"
                            placeholder="Enter your first name"
                            size='md'
                            invalid={false}
                            valid={false}
                        />
                        <FormInput 
                            as={Col}
                            inpClass='px-3 py-2'
                            className="p-0 ms-5"
                            name="lastName"
                            controlId="last-name-input"
                            text="Last Name"
                            placeholder="Enter your Last Name"
                            invalid={false}
                            valid={false}
                        />
                    </Row>
                    <Row className="mt-4 px-3">
                        <FormInput 
                            as={Col}
                            inpClass='px-3 py-2'
                            className="p-0"
                            name="email"
                            controlId="email-input"
                            text="Email"
                            placeholder="Enter your Email"
                            invalid={false}
                            valid={false}
                        />
                        <FormInput 
                            as={Col}
                            inpClass='px-3 py-2'
                            className="p-0 ms-5"
                            name="birthday"
                            controlId="birthday-input"
                            text="birthday"
                            placeholder="Enter your birthday"
                            type="date"
                            invalid={false}
                            valid={false}
                        />
                    </Row>
                    <Button 
                        variant="primary" className='mt-5 py-2 px-4' 
                        type="submit">
                        Update
                    </Button>
                </Form>
            </>
        )
    }
}

export default UserInformation