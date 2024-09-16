import styles from '../styles/components/SignUpOrLogin.module.css'

import { NavLink } from 'react-router-dom'


export default function SignUpOrLogin() {
    return (
        <div className={styles["signup-login-wrap"]}>
            <div className={styles["signup-login-box"]}>
                <NavLink to="/signup" className={({ isActive }) => isActive ? `${styles["signup-box"]} ${styles.active}` : styles["signup-box"]}>
                    Sign up
                </NavLink>
                
                <NavLink to="/login" className={({ isActive }) => isActive ? `${styles["login-box"]} ${styles.active}` : styles["login-box"]}>
                    Login
                </NavLink>
            </div>
        </div>
    )
}