import styles from '../styles/pages/SignUp.module.css'

import Input from '../components/Input'
import SignUpOrLogin from '../components/SignUpOrLogin'


export default function SignUp() {
    
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles["signup-box"]}>
                    <h1>Hello dear</h1>
                    <h3>please enter your details correctly</h3>

                    <SignUpOrLogin />

                    <form action="">
                        <Input className={styles["inputs"]} type="text" label="Username" />
                        <Input className={styles["inputs"]} type="email" label="Email" />
                        <Input className={styles["inputs"]} type="password" label="Password" />
                        <Input className={styles["inputs"]} type="password" label="Password Again" />

                        <button className={styles["submit"]}>Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}