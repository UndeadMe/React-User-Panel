import { Component } from 'react';
// import styles of this component
import styles from '../Forms.module.css'
// import react bootstrap component
import { Form, Button, Container } from 'react-bootstrap'
// import other component to use
import FormInput from '../FormInput/FormInput';
// import other pkg to use
import PropTypes from 'prop-types';
import { v4 as uniqid } from 'uuid';

class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            birthday: "",
            
            isIterateUsername: false,
            isIterateEmail: false,

            submit: false,
        }

        this.setInputsValues = this.setInputsValues.bind(this)
        this.registerSubmitHandler = this.registerSubmitHandler.bind(this)
        this.validateInput = this.validateInput.bind(this)
        this.validateBirthDayInp = this.validateBirthDayInp.bind(this)
        this.validateConfirmPasswordInp = this.validateConfirmPasswordInp.bind(this)
        this.checkValidity = this.checkValidity.bind(this)
        this.isUserIterate = this.isUserIterate.bind(this)
    }

    setInputsValues(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    registerSubmitHandler(e) {
        e.preventDefault()
        
        const allInpsIsValid = this.checkValidity() // check all the inputs are valid
        
        if (allInpsIsValid) {
            const data = new FormData(e.target)

            const userId = uniqid()
            const userRegistered = {
                id: userId,
                ...Object.fromEntries(data.entries()),
                isLogin: true
            }

            if (this.getStorage("users")) {
                const [isUsernameIterate, isEmailIterate] = this.isUserIterate(userRegistered.username, userRegistered.email)
                if (!isUsernameIterate && !isEmailIterate) {
                    const storage = this.getStorage("users")
                    storage.push(userRegistered)
                    // add new user to storage and init the user-id
                    localStorage.setItem("users", JSON.stringify(storage))
                    localStorage.setItem("id", userId)
                }
            } else {
                localStorage.setItem("users", JSON.stringify([ userRegistered ]))
                localStorage.setItem("id", userId)
            }

            this.props.onRegister()
        }

        this.setState({ submit: true })
    }

    isUserIterate(username, email) {
        const users = this.getStorage('users')
        const isUsernameIterate =  users.some(user => user.username === username)
        const isEmailIterate = users.some(user => user.email === email)
        
        isUsernameIterate ? this.setState({ isIterateUsername: true }) : this.setState({ isIterateUsername: false })
        isEmailIterate ? this.setState({ isIterateEmail: true }) : this.setState({ isIterateEmail: false })

        return [isUsernameIterate, isEmailIterate]
    }

    getStorage(storageName) {
        return JSON.parse(localStorage.getItem(storageName))
    }

    validateInput(pattern, validation, state) {
        if (validation === "valid") {
            if (this.state.submit) {
                return pattern.test(state)
            }
        } else if (validation === "inValid") {
            if (this.state.submit) {
                return !pattern.test(state)
            }
        }
    }

    validateBirthDayInp(validation) {
        if (validation === "valid") {
            if (this.state.submit) {
                return Boolean(this.state.birthday)
            }
        } else if (validation === "inValid") {
            if (this.state.submit) {
                return !Boolean(this.state.birthday)
            }
        }
    }

    validateConfirmPasswordInp(validation) {
        if (validation === "valid") {
            if (this.state.submit) {
                const bool = this.validateInput(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "valid", this.state.confirmPassword)
                return bool && (this.state.password === this.state.confirmPassword)
            }
        } else if (validation === "inValid") {
            if (this.state.submit) {
                const bool = this.validateInput(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "valid", this.state.confirmPassword)
                return !(bool && (this.state.password === this.state.confirmPassword))
            }
        }
    }

    checkValidity() {
        const usernameIsValid = /^[a-zA-Z0-9]+$/.test(this.state.username)
        const emailIsValid = /\S+@\S+\.\S+/.test(this.state.email)
        const birthdayIsValid = Boolean(this.state.birthday)
        const passwordIsValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(this.state.password)
        const confirmPasswordIsValid = this.state.password === this.state.confirmPassword
        return (usernameIsValid && emailIsValid && birthdayIsValid && passwordIsValid && confirmPasswordIsValid)
    }

    render() {
        return (
            <Container className='d-flex justify-content-center align-items-center vh-100 px-5'>
                <Form noValidate onSubmit={this.registerSubmitHandler} className={styles.form}>
                    <h2>Register</h2>

                    {this.state.submit && this.state.isIterateUsername && (
                        <FormInput  
                            className="mb-4 mt-5"
                            formName="username"
                            formId="username-input"
                            formLabel="Username"
                            formPlaceHolder="Enter your Username"
                            formType="text"
                            onChange={this.setInputsValues}
                            value={this.state.username}
                            errMsg="please enter other username"
                            successMsg="done"
                            isValid={false}
                            isInvalid={true}
                        />
                    )}
                    {this.state.isIterateUsername === false && (
                        <FormInput  
                            className="mb-4 mt-5"
                            formName="username"
                            formId="username-input"
                            formLabel="Username"
                            formPlaceHolder="Enter your Username"
                            formType="text"
                            onChange={this.setInputsValues}
                            value={this.state.username}
                            errMsg="enter the username field correctly"
                            successMsg="done"
                            isValid={this.validateInput(/^[a-zA-Z0-9]+$/, "valid", this.state.username)}
                            isInvalid={this.validateInput(/^[a-zA-Z0-9]+$/, "inValid", this.state.username)}
                        />
                    )}
                    {this.state.submit && this.state.isIterateEmail && (
                        <FormInput  
                            className="mb-4"
                            formName="email"
                            formId="email-input"
                            formLabel="Email"
                            formPlaceHolder="Enter your Email"
                            formType="text"
                            onChange={this.setInputsValues}
                            value={this.state.email}
                            errMsg="please enter other email"
                            successMsg="done"
                            isValid={false}
                            isInvalid={true}
                        />
                    )}
                    {this.state.isIterateEmail === false && (
                        <FormInput  
                            className="mb-4"
                            formName="email"
                            formId="email-input"
                            formLabel="Email"
                            formPlaceHolder="Enter your Email"
                            formType="text"
                            onChange={this.setInputsValues}
                            value={this.state.email}
                            errMsg="enter the email field correctly"
                            successMsg="done"
                            isValid={this.validateInput(/\S+@\S+\.\S+/, "valid", this.state.email)}
                            isInvalid={this.validateInput(/\S+@\S+\.\S+/, "inValid", this.state.email)}
                        />
                    )}
                    <FormInput 
                        className="mb-4"
                        formName="birthday"
                        formId="birthday-input"
                        formLabel="Birthday"
                        formType="date"
                        onChange={this.setInputsValues}
                        value={this.state.birthday}
                        errMsg="enter the birthday date field correctly"
                        successMsg="done"
                        isValid={this.validateBirthDayInp("valid")}
                        isInvalid={this.validateBirthDayInp("inValid")}
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
                        onChange={this.setInputsValues}
                        value={this.state.password}
                        isValid={this.validateInput(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "valid", this.state.password)}
                        isInvalid={this.validateInput(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "inValid", this.state.password)}
                    />
                    <FormInput  
                        className="mb-4"
                        formName="confirmPassword"
                        formId="confirm-password-input"
                        formLabel="Confirm Password"
                        formPlaceHolder="Enter your confirm password"
                        formType="password"
                        errMsg="enter the confirm password field correctly"
                        successMsg="done"
                        onChange={this.setInputsValues}
                        value={this.state.confirmPassword}
                        isValid={this.validateConfirmPasswordInp("valid")}
                        isInvalid={this.validateConfirmPasswordInp("inValid")}
                    />

                    <Button 
                        onClick={() => this.props.onLogin('login')}
                        className='shadow-none mt-4'
                        type="button"
                        variant=""
                        style={{ width: "100%" }}>
                        you have an account ?
                    </Button>

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

// validate this component
RegisterForm.propTypes = {
    onRegister: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default RegisterForm