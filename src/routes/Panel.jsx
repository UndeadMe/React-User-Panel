import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom'

// import styles of this component
import styles from '../Components/Panel/Panel.module.css'

// import other component
import UserCard from '../Components/Panel/UserCard/UserCard'
import UserInformation from '../Components/Panel/UserInformation/UserInformation'
import UserChangePassword from '../Components/Panel/UserChangePassword/UserChangePassword'

// import other pkgs
import { UserEdit, Lock, ProfileCircle, Code1 } from "iconsax-react";
import { Row, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

// import utils
import { getStorage, updateStorage } from '../utils/storage';

const Panel = ({ findUser }) => {
    const myUser = getUserFromStorage()
    const [user, setUser] = useState(initState(myUser))
    const [sidebarLinks, setSidebarLinks] = useState([
        {
            id: 1,
            navigate: '/panel',
            border: true,
            text: 'Information',
            icon: <UserEdit size='20' color="black"/>,
            active: true,
        },
        {
            id: 2,
            navigate: '/panel/changePassword',
            border: true,
            text: 'Password',
            icon: <Lock size="20" color="black" />,
            active: false,
        },
        {
            id: 3,
            navigate: 'profile',
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
    ])

    function getUserFromStorage() {
        const users = getStorage('users')
        const userId = getStorage('id')
        const myVerifyUser = users.find(user => user.id === userId)
        
        return myVerifyUser
    }

    function initState({ id, username, email, birthday, password, isLogin, firstName, lastName }) {
        return ({ id, username, email, birthday, password, firstName, lastName, isLogin, })
    }

    // const logOut = () => {
    //     this.changeUserInformation(['isLogin'], [false])
    // }

    // const componentDidUpdate = () => {
    //     updateStorage(getStorage('users'), user)
    //     !this.state.user.isLogin && this.props.onLogOut()
    // }

    // const  changeUserInformation = (keyInfos, valInfos) => {
    //     let newInfo = {}
        
    //     keyInfos.forEach((keyInfo, idx) => (
    //         newInfo[keyInfo] = valInfos[idx]
    //     ))

    //     this.setState(prev => {
    //         return {
    //             user: {
    //                 ...prev.user,
    //                 ...newInfo,
    //             }
    //         }
    //     })
    // }

    return (
        <div className={`${styles['panel-wrapper']} d-flex align-items-center justify-content-center`}>
            {/* <div className={styles['bg-overlay']}></div> TODO */} 
            <div className={`${styles.container} d-flex justify-content-center align-items-center p-0`}>
                <Row className={`${styles['panel']} flex-column flex-md-row justify-content-center align-items-center px-3`}>
                    <Col xs={12} sm={8} md={4} className="d-flex flex-column justify-content-center p-0">
                        <UserCard 
                            username={user.username} 
                            userBirthday={user.birthday} 
                            userEmail={user.email} 
                            sidebarLinks={sidebarLinks}
                        />
                    </Col>
                    
                    <Col xs={12} sm={8} md={7} className={`${styles['panel-column']} bg-white border mt-5 mt-md-0 ms-md-5 p-5`}>
                        <Outlet />
                        {/* {this.state.toggle === 'information' && (
                            <UserInformation 
                                username={user.username}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email} 
                                birthday={user.birthday} 
                                onChangeInfo={changeUserInformation}
                            />
                        )}
                        {this.state.toggle === 'password' && (
                            <UserChangePassword 
                                password={this.state.user.password}
                                onChangeInfo={this.changeUserInformation} 
                            />
                        )} */}
                    </Col>
                </Row>
            </div >
            {createPortal((
                <Button 
                    variant="primary" 
                    className={styles["log-out-btn"]} 
                    >
                    Log out
                </Button>
            ), document.getElementById("root"))}
        </div>
    )
}

export default Panel