// import styles of this component
import styles from './UserProfile.module.css'
// import other pkgs
import { Import } from 'iconsax-react'
import PropTypes from 'prop-types';

const UserProfile = ({ userProfile='img/Arash.jpg', userBirthday, username, userEmail }) => {
    const capitalizeText = (text) => {
        const firstLetter = text.charAt(0).toUpperCase()
        const otherLetters = text.slice(1)
        return `${firstLetter}${otherLetters}`
    }

    return (
        <div className={`${styles['user-profile']} d-flex flex-column align-items-center border bg-white`}>
            <label htmlFor="user-profile" className={styles['user-profile-label']}>
                <img src={userProfile} alt="" />
                <div className={`${styles['profile-icon-box']} bg-primary`}>
                    <Import size='20' color="white" />
                </div>
                <input type="file" className="d-none" id='user-profile' />
            </label>
            <h1 className={`${styles.username} mt-3`}> {capitalizeText(username)} </h1>
            <h4 className={`${styles['user-birthday']} mt-1`}>🥳 {userBirthday} 🥳</h4>
            <h4 className={`${styles['user-email']} mt-1`}>{capitalizeText(userEmail)}</h4>
        </div>
    )
}

// validate the component
UserProfile.propTypes = {
    userProfile: PropTypes.string,
    username: PropTypes.string.isRequired,
    userBirthday: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
}

export default UserProfile