import { PureComponent } from 'react'

// import styles of this component
import styles from "./FormInput.module.css"
// import react bootstrap components 
import { FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'
// import pkgs
import PropTypes  from 'prop-types'

class FormInput extends PureComponent {
    constructor(props) {
        super(props)
        this.changeFormInputValueHandler = this.changeFormInputValueHandler.bind(this)
    }

    changeFormInputValueHandler(e) {
        this.props.onChange(e)
    }

    render() {
        // formId sets on the Form Control and FormGroup
        // formName is for name of the Form Control
        const {inpClass, className, formId, formName , formLabel, formPlaceHolder, formType, as,
               errMsg, successMsg, value, isValid, isInvalid, size='md' } = this.props
        
        return (
            <FormGroup controlId={formId} className={className} as={as}>
                <FormLabel className={styles['form-label']}>{formLabel}</FormLabel>
                <FormControl 
                    isInvalid={isInvalid}
                    isValid={isValid}
                    type={formType} 
                    className={`${styles["form-input"]} ${inpClass}`} 
                    size={size}
                    placeholder={formPlaceHolder} 
                    autoComplete="off"
                    onChange={this.changeFormInputValueHandler} 
                    name={formName}
                    value={value}
                />
                {isInvalid && <FormText className="text-danger">{ errMsg }</FormText>}
                {isValid && <FormText className="text-success">{ successMsg }</FormText>}
            </FormGroup>
        )
    }
}

// validate this component
FormInput.propTypes = {
    className: PropTypes.string,
    formId: PropTypes.string.isRequired,
    formLabel: PropTypes.string.isRequired,
    formPlaceHolder: PropTypes.string,
    formType: PropTypes.string.isRequired,
    formText: PropTypes.string,
    onChange: PropTypes.func,
    formName: PropTypes.string,
    value: PropTypes.string,
    isValid: PropTypes.bool,
    isInvalid: PropTypes.bool,
    size: PropTypes.string,
    inpClass: PropTypes.string,
    as: PropTypes.elementType,
}

export default FormInput