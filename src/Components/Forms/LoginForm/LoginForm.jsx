import { useState } from 'react'

// import styles of this component
import styles from '../Forms.module.css'
// import other component
import FormInput from '../FormInput/FormInput'
// import other pkgs
import { Container, Form, Button } from 'react-bootstrap'

const LoginForm = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center vh-100 px-5'>
            <Form noValidate className={styles.form}>
                <h2>Login</h2>

                <FormInput
                    className="mb-4 mt-5"
                    name="username"
                    controlId="username-input"
                    text="Username"
                    placeholder="Enter your Username"
                    errMsg="enter the username field correctly"
                    successMsg="done"
                    valid={false}
                    invalid={false}
                />

                <FormInput  
                    className="mb-4"
                    name="email"
                    controlId="email-input"
                    text="Email"
                    placeholder="Enter your Email"
                    errMsg="enter the email field correctly"
                    successMsg="done"
                    valid={false}
                    invalid={false}
                />

                <FormInput
                    className="mb-4"
                    name="password"
                    controlId="password-input"
                    text="Password"
                    placeholder="Enter your Password"
                    type="password"
                    errMsg="enter the password field correctly"
                    successMsg="done"
                    valid={false}
                    invalid={false}
                />

                <Button 
                    className={`${styles["submit-btn"]}`} 
                    variant="primary" 
                    type="submit" 
                    style={{ width: "100%" }}>
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default LoginForm