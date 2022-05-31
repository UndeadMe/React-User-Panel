import { useState } from 'react'

// import styles of this component
import styles from './SideBarLinks.module.css'

// import other component to use
import SideBarLink from "./SideBarLink/SideBarLink";

// import other pkg 
import PropTypes from 'prop-types'

const SideBarLinks = ({ sidebarLinks, onChangeToggle }) => {
    const [linksState, setLinks] = useState({
        links: [ ...sidebarLinks  ]
    })

    const activeLink = (linkId) => {
        linksState.links.forEach(link => link.active = false)
        
        const link = linksState.links.find(link => link.id === linkId)
        if (!link.href) {
            link.active = true
            
            setLinks(prev => {
                return {
                    links: [
                        ...prev.links
                    ]
                }
            })

            onChangeToggle(link.text.toLowerCase())
        }
    }

    return (
        <div className={`${styles['sidebar-links']} mt-4 bg-white border px-2 py-4`}>
            <ul className="m-0 p-0">
                {linksState.links.map(link => (
                    <SideBarLink 
                        key={link.id}
                        id={link.id}
                        href={link.href} 
                        border={link.border}
                        text={link.text} 
                        icon={link.icon} 
                        active={link.active} 
                        onActive={activeLink}
                    />
                ))}
            </ul>
        </div>
    )
}

// validate the component
SideBarLinks.propTypes = {
    sidebarLinks: PropTypes.array.isRequired,
    onChangeToggle: PropTypes.func.isRequired,
}

export default SideBarLinks