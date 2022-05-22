import { Component } from "react";

// import styles of this component
import styles from './SideBarLinks.module.css'
// import other component to use
import SideBarLink from "./SideBarLink/SideBarLink";
// import other pkg 
import { UserEdit, Lock, ProfileCircle, Code1 } from "iconsax-react";

class SideBarLinks extends Component {
    render() {
        return (
            <div className={`${styles['sidebar-links']} mt-4 bg-white border px-2 py-4`}>
                <ul className="m-0 p-0">
                    <SideBarLink border text='Information' icon={<UserEdit size='20' color="black"/>} />
                    <SideBarLink border text='Password' icon={<Lock size="20" color="black" />} />
                    <SideBarLink border text='Profile' icon={ <ProfileCircle size="20" color="black" /> } />
                    <SideBarLink href='https://github.com/' text='Github repo' icon={<Code1 size="20" color="black" />} />
                </ul>
            </div>
        )
    }
}

export default SideBarLinks