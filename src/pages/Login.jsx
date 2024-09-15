import styles from '../styles/pages/Login.module.css'

import Input from '../components/Input'


export default function Login() {
    
    return (
        <div className={styles.wrap}>
            <div className={styles["login-box"]}>
                <h1>Welcome Back</h1>
                <h3>welcome back, please enter your details</h3>

                <form action="">
                    <Input type="email" label="Username or Email" />

                    <button className={styles["submit"]}>Next</button>
                </form>
            </div>
        </div>
    )
}