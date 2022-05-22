import { Component } from 'react'
import { createPortal } from 'react-dom';

// import styles of this component
import styles from './Panel.module.css'
// import other component
import UserCard from './UserCard/UserCard'
import UserInformation from './UserInformation/UserInformation'
import UserChangePassword from './UserChangePassword/UserChangePassword'
// import other pkgs
import { Row, Col, Container, Button } from 'react-bootstrap'

class Panel extends Component {
    constructor(props) {
        super(props)
        this.myVerifyUser = this.getUserFromStorage()
        this.state = {
            user: this.initState(this.myVerifyUser)
        }
    }

    getUserFromStorage() {
        const users = JSON.parse(localStorage.getItem('users'))
        const userId = localStorage.getItem("id")
        const myVerifyUser = users.find(user => user.id === userId)
        
        return myVerifyUser
    }

    initState({ id, username, email, birthday, password, confirmPassword }) {
        return ({
            id,
            username,
            email,
            birthday,
            password,
            confirmPassword,
        })
    }

    render() {
        return (
            <div className={`${styles['panel-wrapper']} d-flex align-items-center`}>
                <Container className="d-flex align-items-center justify-content-center">
                    <Row className={styles['panel']}>
                        <Col xs={4}>
                            <UserCard 
                                username={this.state.user.username} 
                                userBirthday={this.state.user.birthday} 
                                userEmail={this.state.user.email} 
                            />
                        </Col>
                        
                        <Col className={`${styles['panel-column']} bg-white border ms-5 p-5`}>
                            <UserInformation />
                            { false && <UserChangePassword /> }
                        </Col>
                    </Row>
                </Container>
                {createPortal((
                    <Button variant="primary" className={styles["log-out-btn"]}>Log out</Button>
                ), document.getElementById("root"))}
            </div>
        )
    }
}

export default Panel