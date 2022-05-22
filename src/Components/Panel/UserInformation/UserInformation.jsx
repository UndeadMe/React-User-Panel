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
                            formName="firstName"
                            formId="first-name-input"
                            formLabel="First Name"
                            formPlaceHolder="Enter your first name"
                            formType="text"
                            size='sm'
                            errMsg="enter the first name field correctly"
                            successMsg="done"
                        />
                        <FormInput 
                            as={Col}
                            inpClass='px-3 py-2'
                            className="p-0 ms-5"
                            formName="lastName"
                            formId="last-name-input"
                            formLabel="Last Name"
                            formPlaceHolder="Enter your Last Name"
                            formType="text"
                            size="sm"
                            errMsg="enter the Last Name field correctly"
                            successMsg="done"
                        />
                    </Row>
                    <Row className="mt-4 px-3">
                        <FormInput 
                            as={Col}
                            inpClass='px-3 py-2'
                            className="p-0"
                            formName="email"
                            formId="email-input"
                            formLabel="Email"
                            formPlaceHolder="Enter your Email"
                            formType="text"
                            size='sm'
                            errMsg="enter the email field correctly"
                            successMsg="done"
                        />
                        <FormInput 
                            as={Col}
                            inpClass='px-3 py-2'
                            className="p-0 ms-5"
                            formName="birthday"
                            formId="birthday-input"
                            formLabel="birthday"
                            formPlaceHolder="Enter your birthday"
                            formType="date"
                            size="sm"
                            errMsg="enter the birthday field correctly"
                            successMsg="done"
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