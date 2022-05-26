import { Component } from "react";

// import styles of this component
import styles from './SideBarLinks.module.css'
// import other component to use
import SideBarLink from "./SideBarLink/SideBarLink";
// import other pkg 
import PropTypes from 'prop-types'

class SideBarLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                ...this.props.sidebarLinks 
            ]
        }
        this.activeLink = this.activeLink.bind(this)
    }

    activeLink(linkId) {
        this.state.links.forEach(link => link.active = false)
        
        const link = this.state.links.find(link => link.id === linkId)
        if (!link.href) {
            link.active = true
            
            this.setState(prev => {
                return {
                    links: [
                        ...prev.links
                    ]
                }
            })

            this.props.onChangeToggle(link.text.toLowerCase())
        }
    }

    render() {
        return (
            <div className={`${styles['sidebar-links']} mt-4 bg-white border px-2 py-4`}>
                <ul className="m-0 p-0">
                    {this.state.links.map(link => (
                        <SideBarLink 
                            key={link.id}
                            id={link.id}
                            href={link.href} 
                            border={link.border}
                            text={link.text} 
                            icon={link.icon} 
                            active={link.active} 
                            onActive={this.activeLink}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

// validate the component
SideBarLinks.propTypes = {
    sidebarLinks: PropTypes.array.isRequired,
    onChangeToggle: PropTypes.func.isRequired,
}

export default SideBarLinks