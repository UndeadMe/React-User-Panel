import { PureComponent } from 'react'
import { createPortal } from 'react-dom';

// import styles of this component
import styles from './Panel.module.css'

// import other component
import UserCard from './UserCard/UserCard'
import UserInformation from './UserInformation/UserInformation'
import UserChangePassword from './UserChangePassword/UserChangePassword'

// import other pkgs
import { UserEdit, Lock, ProfileCircle, Code1 } from "iconsax-react";
import { Row, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

// import utils
import { getStorage, updateStorage } from './../../utils/storage';

class Panel extends PureComponent {
    constructor(props) {
        super(props)
        this.myVerifyUser = this.getUserFromStorage()
        
        this.state = {
            user: {...this.initState(this.myVerifyUser)},
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
        this.changeUserInformation = this.changeUserInformation.bind(this)
    }

    getUserFromStorage() {
        const users = getStorage('users')
        const userId = getStorage('id')
        const myVerifyUser = users.find(user => user.id === userId)
        
        return myVerifyUser
    }

    initState({ id, username, email, birthday, password, isLogin, firstName, lastName }) {
        return ({ id, username, email, birthday, password, firstName, lastName, isLogin, })
    }

    logOut() {
        this.changeUserInformation(['isLogin'], [false])
    }

    componentDidUpdate() {
        updateStorage(getStorage('users'), this.state.user)
        !this.state.user.isLogin && this.props.onLogOut()
    }

    changeToggle(toggle) {
        this.setState({ toggle })
    }

    changeUserInformation(keyInfos, valInfos) {
        let newInfo = {}
        
        keyInfos.forEach((keyInfo, idx) => (
            newInfo[keyInfo] = valInfos[idx]
        ))

        this.setState(prev => {
            return {
                user: {
                    ...prev.user,
                    ...newInfo,
                }
            }
        })
    }
        
    render() {
        return (
            <div className={`${styles['panel-wrapper']} d-flex align-items-center justify-content-center`}>
                {/* <div className={styles['bg-overlay']}></div> TODO */} 
                <div className={`${styles.container} d-flex justify-content-center align-items-center p-0`}>
                    <Row className={`${styles['panel']} flex-column flex-md-row justify-content-center align-items-center px-3`}>
                        <Col xs={12} sm={8} md={4} className="d-flex flex-column justify-content-center p-0">
                            <UserCard 
                                username={this.state.user.username} 
                                userBirthday={this.state.user.birthday} 
                                userEmail={this.state.user.email} 
                                sidebarLinks={this.sidebarLinks}
                                onChangeToggle={this.changeToggle}
                            />
                        </Col>
                        
                        <Col xs={12} sm={8} md={7} className={`${styles['panel-column']} bg-white border mt-5 mt-md-0 ms-md-5 p-5`}>
                            {this.state.toggle === 'information' && (
                                <UserInformation 
                                    username={this.state.user.username}
                                    firstName={this.state.user.firstName}
                                    lastName={this.state.user.lastName}
                                    email={this.state.user.email} 
                                    birthday={this.state.user.birthday} 
                                    onChangeInfo={this.changeUserInformation}
                                />
                            )}
                            {this.state.toggle === 'password' && (
                                <UserChangePassword 
                                    password={this.state.user.password}
                                    onChangeInfo={this.changeUserInformation} 
                                />
                            )}
                        </Col>
                    </Row>
                </div >
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