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
            size='md',
            value,
            onChange,
            xs,
            sm,
            md,
            lg,
        } = this.props
        
        return (
            <FormGroup controlId={controlId} className={className} as={as} xs={xs} sm={sm} md={md} lg={lg}>
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
                    value={value}
                    onChange={onChange}
                    spellCheck="off"
                />
                {invalid && <FormText className="text-danger">{ errMsg }</FormText>}
                {valid && <FormText className="text-success">{ successMsg }</FormText>}
            </FormGroup>
        )
    }
}

// validate this component
FormInput.propTypes = {
    inpClass: PropTypes.string,
    className: PropTypes.string,
    controlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    as: PropTypes.elementType,
    errMsg: PropTypes.string.isRequired, 
    successMsg: PropTypes.string.isRequired, 
    valid: PropTypes.bool.isRequired, 
    invalid: PropTypes.bool.isRequired, 
    size: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default FormInput