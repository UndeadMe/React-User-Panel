import { useState } from 'react';

// import styles of this component
import styles from '../Forms.module.css'

// import other component to use
import FormInput from '../FormInput/FormInput';

// import other pkg to use
import { useFormik } from 'formik';
import * as Yup from 'yup'
import PropTypes from 'prop-types';
import { v4 as uniqid } from 'uuid';
import { Container, Button, Form } from 'react-bootstrap';

const RegisterForm = ({ onRegister }) => {
    const [submit, setSubmit] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            birthday: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('please enter your username')
                .max(15, 'your username must be 15 characters or less')
                .min(4, 'your username must be 4 characters or more'),
            email: Yup.string().email('invalid email').required('Please enter your email'),
            birthday: Yup.date().required('please enter your birthday date')
                .min('1922-01-01', 'your birthday date must be 1922-01-01 or more')
                .max('2022-05-22', 'invalid birthday date'),
            password: Yup.string().required('please enter your password')
                .min(8, 'your password must be 8 characters or more')
                .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'invalid password'),
            confirmPassword: Yup.string().required('please enter your confirm password')
                .oneOf([Yup.ref('password')], 'your confirm password must match'),
        }),
        onSubmit: (values, actions) => {
            console.log(values)
        }
    })
    
    return (
        <Container className='d-flex justify-content-center align-items-center vh-100 px-5'>
            <Form noValidate className={styles.form} onSubmit={formik.handleSubmit}>
                <h2>Register</h2>

                <FormInput 
                    className="mt-5 mb-4"
                    controlId="usernameInp"
                    name="username"
                    text="Username"
                    placeholder="Enter your username"
                    invalid={submit && formik.errors.username ? true : false}
                    errMsg={formik.errors.username}
                    valid={submit && !formik.errors.username ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('username')}
                />

                <FormInput 
                    className="mb-4"
                    controlId="emailInp"
                    name="email"
                    text="Email"
                    placeholder="Enter your Email"
                    invalid={submit && formik.errors.email ? true : false}
                    errMsg={formik.errors.email}
                    valid={submit && !formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')}
                />

                <FormInput 
                    className="mb-4"
                    type="date"
                    controlId="birthdayInp"
                    name="birthday"
                    text="birthday"
                    placeholder="Enter your birthday date"
                    invalid={submit && formik.errors.birthday ? true : false}
                    errMsg={formik.errors.birthday}
                    valid={submit && !formik.errors.birthday ? true : false}
                    {...formik.getFieldProps('birthday')}
                />

                <FormInput 
                    className="mb-4"
                    type="password"
                    controlId="passwordInp"
                    name="password"
                    text="Password"
                    placeholder="Enter your Password"
                    invalid={submit && formik.errors.password ? true : false}
                    errMsg={formik.errors.password}
                    valid={submit && !formik.errors.password ? true : false}
                    {...formik.getFieldProps('password')}
                />

                <FormInput 
                    className="mb-4"
                    type="password"
                    controlId="confirmPasswordInp"
                    name="confirmPassword"
                    text="Confirm Password"
                    placeholder="Enter your Confirm Password"
                    invalid={submit && formik.errors.confirmPassword ? true : false}
                    errMsg={formik.errors.confirmPassword}
                    valid={submit && !formik.errors.confirmPassword ? true : false}
                    {...formik.getFieldProps('confirmPassword')}
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
                    onClick={() => setSubmit(true)}
                    variant="primary" 
                    type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterForm