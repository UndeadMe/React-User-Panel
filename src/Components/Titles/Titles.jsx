import React, { Component } from 'react'

// import styles of this component
import styles from './Titles.module.css'
// import other pkg
import PropTypes from 'prop-types'

class Titles extends Component {
    render() {
        const { title, text } = this.props 
        return (
            <>
                <h1 className={`${styles['information-heading']} mt-1`}>{title}</h1>
                <h3 className={`${styles['information-heading-text']} text-muted p-0`}>{text}</h3>
            </>
        )
    }
}

// validate component
Titles.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Titles