import { Component } from 'react'

// import other component 
import UserProfile from '../UserProfile/UserProfile'
import SideBarLinks from '../SideBarLinks/SideBarLinks'

class UserCard extends Component {
    render() {
        const  { sidebarLinks, username, userBirthday, userEmail, onChangeToggle } = this.props
        return (
            <>
                <UserProfile username={username} userBirthday={userBirthday} userEmail={userEmail} />
                <SideBarLinks sidebarLinks={sidebarLinks} onChangeToggle={onChangeToggle} />
            </>
        )
    }
}

export default UserCard