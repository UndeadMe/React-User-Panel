import { Component } from 'react';

// import styles of this component
import styles from './UserProfile.module.css'
// import other pkgs
import { Import } from 'iconsax-react'

class UserProfile extends Component {
    capitalizeText(text) {
        const firstLetter = text.charAt(0).toUpperCase()
        const otherLetters = text.slice(1)
        return `${firstLetter}${otherLetters}`
    }

    render() {
        const { userProfile='img/Arash.jpg', userBirthday, username, userEmail } =this.props
        return (
            <div className={`${styles['user-profile']} d-flex flex-column align-items-center border bg-white`}>
                <label htmlFor="user-profile" className={styles['user-profile-label']}>
                    <img src={userProfile} alt="" />
                    <div className={`${styles['profile-icon-box']} bg-primary`}>
                        <Import size='20' color="white" />
                    </div>
                    <input type="file" className="d-none" id='user-profile' />
                </label>
                <h1 className={`${styles.username} mt-3`}> {this.capitalizeText(username)} </h1>
                <h4 className={`${styles['user-birthday']} mt-1`}>🥳 {userBirthday} 🥳</h4>
                <h4 className={`${styles['user-email']} mt-1`}>{this.capitalizeText(userEmail)}</h4>
            </div>
        )
    }
}

export default UserProfile