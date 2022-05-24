import { useState } from 'react';

// import styles of this component
import styles from '../Forms.module.css'

// import other component to use
import FormInput from '../FormInput/FormInput';

// import other pkg to use
import PropTypes from 'prop-types';
import { v4 as uniqid } from 'uuid';
import { Container, Button, Form } from 'react-bootstrap';

const RegisterForm = ({ onRegister }) => {
    const [submit, setSubmit] = useState(false)

    return (
        <Container className='d-flex justify-content-center align-items-center vh-100 px-5'>
            <Form noValidate className={styles.form}>
                <h2>Register</h2>

                <FormInput 
                    className="mt-5 mb-4"
                    controlId="usernameInp"
                    name="username"
                    text="Username"
                    placeholder="Enter your username"
                    valid={false}
                    invalid={false}
                />

                <FormInput 
                    className="mb-4"
                    controlId="emailInp"
                    name="email"
                    text="Email"
                    placeholder="Enter your Email"
                    valid={false}
                    invalid={false}
                />

                <FormInput 
                    className="mb-4"
                    type="date"
                    controlId="birthdayInp"
                    name="birthday"
                    text="birthday"
                    placeholder="Enter your birthday date"
                    valid={false}
                    invalid={false}
                />

                <FormInput 
                    className="mb-4"
                    type="password"
                    controlId="passwordInp"
                    name="password"
                    text="Password"
                    placeholder="Enter your Password"
                    valid={false}
                    invalid={false}
                />

                <FormInput 
                    className="mb-4"
                    type="password"
                    controlId="confirmPasswordInp"
                    name="confirmPassword"
                    text="Confirm Password"
                    placeholder="Enter your Confirm Password"
                    valid={false}
                    invalid={false}
                />

                <Button 
                    onClick={() => this.props.onLogin('login')}
                    className='shadow-none mt-4 p-0'
                    type="button"
                    variant="">
                    you have an account ?
                </Button>

                <Button 
                    className={`${styles["submit-btn"]} w-100`} 
                    variant="primary" 
                    type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterForm