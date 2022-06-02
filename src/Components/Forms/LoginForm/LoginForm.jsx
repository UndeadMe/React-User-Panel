import { useState } from 'react'

// import styles of this component
import styles from '../Forms.module.css'

// import other component
import FormInput from '../FormInput/FormInput'

// import other pkgs
import { Container, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import PropTypes from 'prop-types'

// import utils 
import { getStorage, setUserId, updateStorage } from '../../../utils/storage'

const LoginForm = ({ onRegister, onLogin }) => {
    const [submit, setSubmit] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: object({
            username: string().required('please enter your username')
                .max(15, 'your username must be 15 characters or less')
                .min(4, 'your username must be 4 characters or more'),
            email: string().email('invalid email').required('please enter your email'),
            password: string().required('please enter your password')
                .min(8, 'your password must be 8 characters or more')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'invalid password'),
        }),
        onSubmit: ({ username, email, password }, { setFieldError }) => {
            const users = getStorage('users')
            const myVerifyUser = users && users.find(user => user.username === username)
            
            if (users && myVerifyUser) {
                if (myVerifyUser.email === email && myVerifyUser.password === password)
                    login(myVerifyUser)
                else if (myVerifyUser.email !== email)
                    setFieldError('email', `your email isn't true`)
                else 
                    setFieldError('password', `your password isn't correct`)
            } else
                setFieldError('username', 'your username not found')
        }
    })

    const login = (myVerifyUser) => {
        const users = getStorage('users')
        updateStorage(users, myVerifyUser, true)
        setUserId(myVerifyUser.id)
        onLogin()
    }

    return (
        <Container fluid className={`${styles.container} d-flex justify-content-center align-items-center px-5`}>
            <Form noValidate className={styles.form} onSubmit={formik.handleSubmit}>
                <h2>Login</h2>

                <FormInput
                    className="mb-4 mt-5"
                    name="username"
                    controlId="username-input"
                    text="Username"
                    placeholder="Enter your Username"
                    errMsg={formik.errors.username || ''}
                    successMsg="done"
                    invalid={submit && formik.errors.username ? true : false}
                    valid={submit && !formik.errors.username ? true : false}
                    {...formik.getFieldProps('username')}
                />

                <FormInput  
                    className="mb-4"
                    name="email"
                    controlId="email-input"
                    text="Email"
                    placeholder="Enter your Email"
                    errMsg={formik.errors.email || ''}
                    successMsg="done"
                    invalid={submit && formik.errors.email ? true : false}
                    valid={submit && !formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')}
                />

                <FormInput
                    className="mb-4"
                    name="password"
                    controlId="password-input"
                    text="Password"
                    placeholder="Enter your Password"
                    type="password"
                    errMsg={formik.errors.password || ''}
                    successMsg="done"
                    invalid={submit && formik.errors.password ? true : false}
                    valid={submit && !formik.errors.password ? true : false}
                    {...formik.getFieldProps('password')}
                />

                <Button 
                    onClick={() => onRegister('register')}
                    className='shadow-none mt-4 p-0'
                    type="button"
                    variant="">
                    you dont' have any account ?
                </Button>

                <Button 
                    className={`${styles["submit-btn"]} w-100`} 
                    onClick={() => setSubmit(true)}
                    disabled={submit && !formik.isValid ? true : false}
                    variant="primary" 
                    type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

// validate the component
LoginForm.propTypes = {
    onRegister: PropTypes.func.isRequired, 
    onLogin: PropTypes.func.isRequired,
}

export default LoginForm