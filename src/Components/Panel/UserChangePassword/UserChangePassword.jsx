// import other component
import Titles from '../../Titles/Titles'
import FormInput from '../../Forms/FormInput/FormInput'

// import other pkg
import { Form, Button, Col } from 'react-bootstrap'

const UserChangePassword = () => {
    return (
        <>
            <Titles title="Welcome to the change password" text="change your password as you want" />

            <Form className="mt-5">
                <FormInput 
                    type="Password"
                    className="p-0"
                    inpClass='px-3 py-2'
                    name="currentPassword"
                    controlId="current-password-input"
                    text="Current Password"
                    placeholder="Enter your Current Password"
                />
                <FormInput 
                    as={Col}
                    type="password"
                    inpClass='px-3 py-2'
                    className="p-0 mt-3"
                    name="newPassword"
                    controlId="new-password-input"
                    text="New Password"
                    placeholder="Enter your New Password"
                />
                <FormInput 
                    as={Col}
                    type="password"
                    inpClass='px-3 py-2'
                    className="p-0 mt-3"
                    name="ConfirmNewPassword"
                    controlId="confirm-new-password-input"
                    text="Confirm New Password"
                    placeholder="Enter your Confirm New Password"
                />
                <Button variant="primary" className='mt-5 py-2 px-4' type="submit">
                    Update
                </Button>
            </Form>
        </>
    )
}

export default UserChangePassword