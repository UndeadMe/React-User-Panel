import { useState } from 'react';

// import other component
import Titles from '../../Titles/Titles'
import FormInput from '../../Forms/FormInput/FormInput'

// import other pkg
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { string, object, ref } from 'yup'

const UserChangePassword = ({ password, onChangeInfo }) => {
    const [submit, setSubmit] = useState(false)

    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        },
        validationSchema: object({
            currentPassword: string().required('please enter your current password')
                .min(8, 'your current password must be 8 characters or more')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'invalid password'),
                
            newPassword: string().required('please enter your new password')
                .min(8, 'your new password must be 8 characters or more')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'invalid password'),

            confirmNewPassword: string().required('please enter your confirm new password')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'invalid password')
                .oneOf([ref('newPassword')], 'your confirm new password must match')
        }),
        onSubmit: (values, { setFieldError }) => {
            if (values.currentPassword === password)
                onChangeInfo(['password'], [values.newPassword])
            else
                setFieldError('currentPassword', "your current password isn't true")
        }
    })

    return (
        <>
            <Titles title="Welcome to the change password" text="change your password as you want" />

            <Form className="mt-5" noValidate onSubmit={formik.handleSubmit}>
                <FormInput 
                    type="Password"
                    className="p-0"
                    inpClass='px-3 py-2'
                    name="currentPassword"
                    controlId="current-password-input"
                    text="Current Password"
                    placeholder="Enter your Current Password"
                    valid={submit && !formik.errors.currentPassword ? true : false}
                    errMsg={formik.errors.currentPassword || ''}
                    invalid={submit && formik.errors.currentPassword ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('currentPassword')}
                />
                <FormInput 
                    type="password"
                    inpClass='px-3 py-2'
                    className="p-0 mt-3"
                    name="newPassword"
                    controlId="new-password-input"
                    text="New Password"
                    placeholder="Enter your New Password"
                    valid={submit && !formik.errors.newPassword ? true : false}
                    errMsg={formik.errors.newPassword || ''}
                    invalid={submit && formik.errors.newPassword ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('newPassword')}
                />
                <FormInput 
                    type="password"
                    inpClass='px-3 py-2'
                    className="p-0 mt-3"
                    name="confirmNewPassword"
                    controlId="confirm-new-password-input"
                    text="Confirm New Password"
                    placeholder="Enter your Confirm New Password"
                    valid={submit && !formik.errors.confirmNewPassword ? true : false}
                    errMsg={formik.errors.confirmNewPassword || ''}
                    invalid={submit && formik.errors.confirmNewPassword ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('confirmNewPassword')}
                />
                <Button 
                    variant="primary" 
                    disabled={submit && !formik.isValid ? true : false}
                    className='mt-5 py-2 px-4' 
                    type="submit" 
                    onClick={() => setSubmit(true)}>
                    Update
                </Button>
            </Form>
        </>
    )
}

export default UserChangePassword