import { Component } from 'react'
import { createPortal } from 'react-dom';

// import styles of this component
import styles from './Panel.module.css'
// import other component
import UserCard from './UserCard/UserCard'
import UserInformation from './UserInformation/UserInformation'
import UserChangePassword from './UserChangePassword/UserChangePassword'
// import other pkgs
import { UserEdit, Lock, ProfileCircle, Code1 } from "iconsax-react";
import { Row, Col, Container, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

class Panel extends Component {
    constructor(props) {
        super(props)
        this.myVerifyUser = this.getUserFromStorage()
        
        this.state = {
            user: {
                ...this.initState(this.myVerifyUser)
            },
            toggle: 'information',
        }
        
        this.sidebarLinks = [
            {
                id: 1,
                border: true,
                text: 'Information',
                icon: <UserEdit size='20' color="black"/>,
                active: true,
            },
            {
                id: 2,
                border: true,
                text: 'Password',
                icon: <Lock size="20" color="black" />,
                active: false,
            },
            {
                id: 3,
                border: true,
                text: 'Profile',
                icon: <ProfileCircle size="20" color="black" />,
                active: false,
            },
            {
                id: 4,
                border: false,
                href: 'https://github.com/Banana021s/React-User-Panel',
                text: 'Github repo',
                icon: <Code1 size="20" color="black" />,
            }
        ]

        this.logOut = this.logOut.bind(this)
        this.changeToggle = this.changeToggle.bind(this)
    }

    getUserFromStorage() {
        const users = JSON.parse(localStorage.getItem('users'))
        const userId = localStorage.getItem("id")
        const myVerifyUser = users.find(user => user.id === userId)
        
        return myVerifyUser
    }

    initState({ id, username, email, birthday, password, confirmPassword, isLogin }) {
        return ({
            id,
            username,
            email,
            birthday,
            password,
            confirmPassword,
            isLogin,
        })
    }

    updateStorage() {
        const users = JSON.parse(localStorage.getItem('users'))
        const myVerifyUserIdx = users.findIndex(user => user.id === this.state.user.id)
        users.splice(myVerifyUserIdx, 1)
        users.push(this.state.user)
        localStorage.setItem('users', JSON.stringify(users))
    }

    logOut() {
        this.setState(prev => {
            return {
                user: {
                    id: prev.user.id,
                    username: prev.user.username,
                    email: prev.user.email,
                    password: prev.user.password,
                    confirmPassword: prev.user.confirmPassword,
                    birthday: prev.user.birthday,
                    isLogin: false,
                }
            }
        })
    }

    componendDidUpdate() {
        this.updateStorage()
        this.props.onLogOut()
    }

    changeToggle(toggle) {
        this.setState({ toggle, })
    }

    render() {
        return (
            <div className={`${styles['panel-wrapper']} d-flex align-items-center`}>
                <div className={styles['bg-overlay']}></div>
                <Container className="d-flex align-items-center justify-content-center">
                    <Row className={styles['panel']}>
                        <Col xs={4}>
                            <UserCard 
                                username={this.state.user.username} 
                                userBirthday={this.state.user.birthday} 
                                userEmail={this.state.user.email} 
                                sidebarLinks={this.sidebarLinks}
                                onChangeToggle={this.changeToggle}
                            />
                        </Col>
                        
                        <Col className={`${styles['panel-column']} bg-white border ms-5 p-5`}>
                            { this.state.toggle === 'information' && <UserInformation /> }
                            { this.state.toggle === 'password' && <UserChangePassword /> }
                        </Col>
                    </Row>
                </Container>
                {createPortal((
                    <Button 
                        variant="primary" 
                        className={styles["log-out-btn"]} 
                        onClick={this.logOut}>
                        Log out
                    </Button>
                ), document.getElementById("root"))}
            </div>
        )
    }
}

// validate component
Panel.propTypes = {
    onLogOut: PropTypes.func.isRequired
}

export default Panel