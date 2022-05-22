import { Component } from 'react'

// import other component 
import UserProfile from '../UserProfile/UserProfile'
import SideBarLinks from '../SideBarLinks/SideBarLinks'
// import other pkg
import { Button } from 'react-bootstrap';

class UserCard extends Component {
    render() {
        const  { username, userBirthday, userEmail } = this.props
        return (
            <>
                <UserProfile username={username} userBirthday={userBirthday} userEmail={userEmail} />
                <SideBarLinks />
            </>
        )
    }
}

export default UserCard