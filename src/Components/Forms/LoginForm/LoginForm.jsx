import { Component } from 'react'

// import styles of this component
import styles from '../Forms.module.css'
// import other component
import FormInput from '../FormInput/FormInput'
// import other pkgs
import { Container, Form, Button } from 'react-bootstrap'

class LoginForm extends Component {
    render() {
        return (
            <Container className='d-flex justify-content-center align-items-center vh-100 px-5'>
                <Form noValidate onSubmit={this.loginHandler} className={styles.form}>
                    <h2>Login</h2>

                    <FormInput
                        className="mb-4 mt-5"
                        formName="username"
                        formId="username-input"
                        formLabel="Username"
                        formPlaceHolder="Enter your Username"
                        formType="text"
                        // onChange={this.setInputsValues}
                        // value={this.state.username}
                        errMsg="enter the username field correctly"
                        successMsg="done"
                        // isValid={this.validateInput(/^[a-zA-Z0-9]+$/, "valid", this.state.username, 'username')}
                        // isInvalid={this.validateInput(/^[a-zA-Z0-9]+$/, "inValid", this.state.username, 'username')}
                    />

                    <FormInput  
                        className="mb-4"
                        formName="email"
                        formId="email-input"
                        formLabel="Email"
                        formPlaceHolder="Enter your Email"
                        formType="text"
                        // onChange={this.setInputsValues}
                        // value={this.state.email}
                        errMsg="enter the email field correctly"
                        successMsg="done"
                        // isValid={this.validateInput(/\S+@\S+\.\S+/, "valid", this.state.email, 'email')}
                        // isInvalid={this.validateInput(/\S+@\S+\.\S+/, "inValid", this.state.email, 'email')}
                    />

                    <FormInput
                        className="mb-4"
                        formName="password"
                        formId="password-input"
                        formLabel="Password"
                        formPlaceHolder="Enter your Password"
                        formType="password"
                        errMsg="enter the password field correctly"
                        successMsg="done"
                        // onChange={this.setInputsValues}
                        // value={this.state.password}
                        // isValid={this.validateInput(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "valid", this.state.password, 'password')}
                        // isInvalid={this.validateInput(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "inValid", this.state.password, 'password')}
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
}

export default LoginForm