// import other component 
import UserProfile from '../UserProfile/UserProfile'
import SideBarLinks from '../SideBarLinks/SideBarLinks'

// import other pkg 
import PropTypes from 'prop-types'

const UserCard = ({ sidebarLinks, username, userBirthday, userEmail, onChangeToggle }) => {
    return (
        <>
            <UserProfile username={username} userBirthday={userBirthday} userEmail={userEmail} />
            <SideBarLinks sidebarLinks={sidebarLinks} onChangeToggle={onChangeToggle} />
        </>
    )
}

// validate the component
UserCard.propTypes = {
    sidebarLinks: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
    userBirthday: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    onChangeToggle: PropTypes.func.isRequired
}

export default UserCard