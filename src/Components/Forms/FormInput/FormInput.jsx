import { PureComponent } from 'react'

// import styles of this component
import styles from "./FormInput.module.css"
// import react bootstrap components 
import { FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'
// import pkgs
import PropTypes  from 'prop-types'

class FormInput extends PureComponent {
    render() {
        // props
        const {
            inpClass='',
            className='', 
            controlId, 
            name, 
            text, 
            placeholder, 
            type="text", 
            as,
            errMsg, 
            successMsg, 
            valid, 
            invalid, 
            size='md' 
        } = this.props
        
        return (
            <FormGroup controlId={controlId} className={className} as={as}>
                <FormLabel className={styles['form-label']}>{text}</FormLabel>
                <FormControl 
                    isInvalid={invalid}
                    isValid={valid}
                    type={type} 
                    className={`${styles["form-input"]} ${inpClass}`} 
                    size={size}
                    placeholder={placeholder} 
                    autoComplete="off"
                    name={name}
                />
                {invalid && <FormText className="text-danger">{ errMsg }</FormText>}
                {valid && <FormText className="text-success">{ successMsg }</FormText>}
            </FormGroup>
        )
    }
}

// validate this component
FormInput.propTypes = {
    
}

export default FormInput