import { Component } from 'react'

// import other component
import Titles from '../../Titles/Titles'
import FormInput from '../../Forms/FormInput/FormInput'
// import other pkg
import { Form, Button, Row, Col } from 'react-bootstrap'

class UserChangePassword extends Component {
    render() {
        return (
            <>
                <Titles title="Welcome to the change password" text="change your password as you want" />

                <Form className="mt-5">
                    <FormInput 
                        inpClass='px-3 py-2'
                        className="p-0"
                        formName="currentPassword"
                        formId="current-password-input"
                        formLabel="Current Password"
                        formPlaceHolder="Enter your Current Password"
                        formType="Password"
                        size='sm'
                        errMsg="enter the current password field correctly"
                        successMsg="done"
                    />
                    <FormInput 
                        as={Col}
                        inpClass='px-3 py-2'
                        className="p-0 mt-3"
                        formName="newPassword"
                        formId="new-password-input"
                        formLabel="New Password"
                        formPlaceHolder="Enter your New Password"
                        formType="password"
                        size="sm"
                        errMsg="enter the new password field correctly"
                        successMsg="done"
                    />
                    <FormInput 
                        as={Col}
                        inpClass='px-3 py-2'
                        className="p-0 mt-3"
                        formName="ConfirmNewPassword"
                        formId="confirm-new-password-input"
                        formLabel="Confirm New Password"
                        formPlaceHolder="Enter your Confirm New Password"
                        formType="password"
                        size="sm"
                        errMsg="enter the confirm new password field correctly"
                        successMsg="done"
                    />
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

export default UserChangePassword