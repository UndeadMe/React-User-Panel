import styles from '../styles/pages/Login.module.css'
 
export default function Login() {
    return (
        <div className={styles.wrap}>
            <div className={styles["login-box"]}>
                <h1>Welcome Back</h1>
                <h3>welcome back, please enter your details</h3>
            </div>
        </div>
    )
}