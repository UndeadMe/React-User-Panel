import { useState } from 'react';
// import other component
import FormInput from '../../Forms/FormInput/FormInput';
import Titles from '../../Titles/Titles';
// import other pkg
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { object, string, date } from 'yup'

const UserInformation = ({ firstName, lastName, email, birthday, onChangeInfo }) => {
    const [submit, setSubmit] = useState(false)

    const formik = useFormik({
        initialValues: { 
            firstName: firstName ? firstName : '',
            lastName: lastName ? lastName : '',
            email,
            birthday,
        },
        validationSchema: object({
            firstName: string().max(10, 'your fisrt name must be 10 or less'),
            lastName: string().max(10, 'your fisrt name must be 10 or less'),
            email: string().required('please enter your email').email('invalid email'),
            birthday: date().required('please enter your birthday date')
                .min('1922-01-01', 'your birthday date must be 1922-01-01 or more')
                .max('2022-05-22', 'invalid birthday date'),
        }),
        onSubmit: ({ firstName, lastName, email, birthday }, { setFieldError }) => {
            if (!firstName && !lastName) {
                onChangeInfo(
                    ['firstName', 'lastName', 'email', 'birthday'], 
                    ['', '', email, birthday]
                )
            } else if (!firstName) {
                onChangeInfo(
                    ['firstName' , 'lastName', 'email', 'birthday'],
                    ['', lastName, email, birthday]
                )
            } else if (!lastName) {
                onChangeInfo(
                    ['firstName', 'lastName','email', 'birthday'],
                    [firstName, '' , email, birthday]
                )
            } else {
                onChangeInfo(
                    ['firstName', 'lastName', 'email', 'birthday'],
                    [firstName, lastName, email, birthday]
                )
            }
        }
    })

    return (
        <>
            <Titles title='Welcome to the Information' text="check or change your information as you want" />
            
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Row className="mt-5 px-3">
                    <FormInput 
                        as={Col}
                        inpClass='py-2'
                        className="p-0"
                        name="firstName"
                        controlId="first-name-input"
                        text="First Name"
                        placeholder='Arash'
                        size='sm'
                        invalid={formik.values.firstName === '' ? false : (
                            submit && formik.errors.firstName ? true : false
                        )}
                        errMsg={formik.errors.firstName || ''}
                        valid={formik.values.firstName === '' ? false : (
                            submit && !formik.errors.firstName ? true : false
                        )}
                        successMsg="done"
                        {...formik.getFieldProps('firstName')}
                    />
                    <FormInput 
                        as={Col}
                        inpClass='py-2'
                        className="p-0 ms-5"
                        name="lastName"
                        controlId="last-name-input"
                        text="Last Name"
                        placeholder="Karimi"
                        size='sm'
                        invalid={formik.values.lastName === '' ? false : (
                            submit && formik.errors.lastName ? true : false
                        )}
                        errMsg={formik.errors.lastName || ''}
                        valid={formik.values.lastName === '' ? false : (
                            submit && !formik.errors.lastName ? true : false
                        )}
                        successMsg="done"
                        {...formik.getFieldProps('lastName')}
                    />
                </Row>

                <Row className="mt-4 px-3">
                    <FormInput 
                        as={Col}
                        inpClass='py-2'
                        className="p-0"
                        name="email"
                        controlId="email-input"
                        text="Email"
                        placeholder="Enter your Email"
                        size='sm'
                        errMsg={formik.errors.email || ''}
                        successMsg="done"
                        invalid={submit && formik.errors.email ? true : false}
                        valid={submit && !formik.errors.email ? true : false}
                        {...formik.getFieldProps('email')}
                    />
                    <FormInput 
                        as={Col}
                        inpClass='py-2'
                        className="p-0 ms-5"
                        name="birthday"
                        controlId="birthday-input"
                        text="birthday"
                        size='sm'
                        placeholder="Enter your birthday"
                        type="date"
                        invalid={submit && formik.errors.birthday ? true : false}
                        errMsg={formik.errors.birthday || ''}
                        valid={submit && !formik.errors.birthday ? true : false}
                        successMsg="done"
                        {...formik.getFieldProps('birthday')}
                    />
                </Row>
                <Button 
                    onClick={() => setSubmit(true)}
                    disabled={submit && !formik.isValid ? true : false}
                    variant="primary" className='mt-5 py-2 px-4'
                    type="submit">
                    Update
                </Button>
            </Form>
        </>
    )
}

export default UserInformation