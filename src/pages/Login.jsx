import styles from '../styles/pages/Login.module.css'

import Input from '../components/Input'
import SignUpOrLogin from '../components/SignUpOrLogin'

import { useFormik } from 'formik'

import { useState } from 'react'

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: ({ email }) => {
            const errors = {}

            const emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            
            if (!emailRe.test(email) && (!email.includes('gmail') || !email.includes('yahoo')))
                errors.email = "email is invalid and must be gmail or just yahoo"
            
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
                <div className={styles["login-box"]}>
                    <h1>Welcome Back</h1>
                    <h3>welcome back, please enter your details</h3>

                    <SignUpOrLogin />

                    <form action="" onSubmit={formik.handleSubmit}>
                        <Input 
                            className={styles["inputs"]} 
                            htmlfor="email"
                            type="email" 
                            label="Email" 
                            {...formik.getFieldProps('email')}
                        />
                        {(formik.touched.email && submit) ? (
                            <h6 className={styles["error"]}>{formik.errors.email}</h6>
                        ) : null}

                        <button type='submit' className={styles["submit"]} disabled={!formik.isValid && submit} onClick={() => setSubmit(true)}>Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}