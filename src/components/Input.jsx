import { useState } from "react"

import styles from '../styles/components/Input.module.css'

import { Sms, Lock, TextItalic } from "iconsax-react"


export default function Input({ type="text", label, className }) {
    const [val, setVal] = useState("")

    return (
        <div className={`${styles["input-box"]} ${className}`}>
            {type === "email" && (
                <Sms
                    className={styles["input-icon"]}
                    size="50"
                />
            )}
            {type === "password" && (
                <Lock
                    size="50"
                    className={styles["input-icon"]}
                />
            )}
            {type === "text" && (
                <TextItalic
                    size="50"
                    className={styles["input-icon"]}
                />
            )}
            <div className={styles["divider"]}></div>
            <input
                type={type} 
                value={val} 
                id="input"
                onChange={(e) => setVal(e.target.value)}
                className={styles.input} 
                placeholder="empty"
            />
            <label className={styles["input-label"]} htmlFor="input">{label}</label>
        </div>
    )
}