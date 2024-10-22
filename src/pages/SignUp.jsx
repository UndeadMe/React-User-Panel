import { useState } from 'react'

import styles from '../styles/pages/SignUp.module.css'

import Input from '../components/Input'
import SignUpOrLogin from '../components/SignUpOrLogin'

import { useFormik } from 'formik'

export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: ({ username, email, password, confirmPassword }) => {
            const errors = {}

            const allCharactersRe = /[a-zA-Z]{4,}/g
            const allNumsRe = /[0-9]/g
            const emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

            if (!allCharactersRe.test(username) && !allNumsRe.test(username))
                errors.username = "username must have numbers and letters"
            if (!emailRe.test(email)) 
                errors.email = "email is invalid"
            if (!(password.length >= 8))
                errors.password = "password must be more than 8 letters"
            if (password != confirmPassword || !(confirmPassword.length >= 8))
                errors.confirmPassword = "confirm password should be the same as password"

            return errors
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    const [submit, setSubmit] = useState(false)

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles["signup-box"]}>
                    <h1>Hello dear</h1>
                    <h3>please enter your details correctly</h3>

                    <SignUpOrLogin />

                    <form action="" onSubmit={formik.handleSubmit}>
                        <Input 
                            className={styles["inputs"]} 
                            type="text" 
                            label="Username" 
                            htmlfor="username"
                            {...formik.getFieldProps('username')}
                        />
                        {(formik.touched.username && submit) ? (
                            <h6 className={styles["error"]}>{formik.errors.username}</h6>
                        ) : null}
                        

                        <Input 
                            className={styles["inputs"]} 
                            type="email" 
                            label="Email" 
                            htmlfor="email"
                            {...formik.getFieldProps('email')}
                        />
                        {(formik.touched.email && submit) ? (
                            <h6 className={styles["error"]}>{formik.errors.email}</h6>
                        ): null}
                        
                        <Input 
                            className={styles["inputs"]} 
                            type="password" 
                            label="Password" 
                            htmlfor="password"
                            {...formik.getFieldProps('password')}
                        />
                        {(formik.touched.password && submit) ? (
                            <h6 className={styles["error"]}>{formik.errors.password}</h6>
                        ) : null}
                        
                        <Input 
                            className={styles["inputs"]} 
                            type="password" 
                            label="Password Again"
                            htmlfor="confirmPassword"
                            {...formik.getFieldProps('confirmPassword')}
                         />
                        {(formik.touched.confirmPassword && submit) ? (
                            <h6 className={styles["error"]}>{formik.errors.confirmPassword}</h6>
                        ) : null}

                        <button type='submit' className={styles["submit"]} disabled={!formik.isValid && submit} onClick={() => setSubmit(true)}>Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}