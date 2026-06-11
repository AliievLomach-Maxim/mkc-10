import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import css from './UserControlledFormik.module.css'
// namespace import >>>
import * as Yup from 'yup'
import { CiBeerMugFull } from 'react-icons/ci'

const defaultFormValue = {
  email: '',
  password: '',
  select: '',
  check: true,
}

const userValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5, 'Min 5').max(8, 'Max 8').required('Required'),
  select: Yup.string().oneOf(['Red', 'Yellow', 'Green']).required('Required'),
  check: Yup.boolean(),
})

const UserControlledFormik = ({ login }) => {
  const handleFormikSubmit = (values, formikHelpers) => {
    login(values)
    formikHelpers.resetForm()
  }

  const uniqIdForUserForm = useId()

  return (
    <Formik
      initialValues={defaultFormValue}
      onSubmit={handleFormikSubmit}
      validationSchema={userValidationSchema}
    >
      {({ values, errors, touched }) => {
        return (
          <Form>
            <label htmlFor={`${uniqIdForUserForm}_email`}>pls input your email</label>
            <br />
            <Field
              type='text'
              name='email'
              id={`${uniqIdForUserForm}_email`}
              className={errors.email && touched.email ? css.error : ''}
            />
            <ErrorMessage name='email' component='span' className={css['error-mess']} />
            <br />
            <br />
            <label htmlFor={`${uniqIdForUserForm}_password`}>pls input your Password</label>
            <br />
            <Field type='text' name='password' id={`${uniqIdForUserForm}_password`} />
            <ErrorMessage name='password' component='span' className={css['error-mess']} />
            <br />
            <br />
            <label htmlFor={`${uniqIdForUserForm}_select`}>pls choose..</label>
            <br />
            <Field as='select' name='select' id={`${uniqIdForUserForm}_select`}>
              <option value='' disabled>
                Choose...
              </option>
              <option value='red'>Red</option>
              <option value='yellow'>Yellow</option>
              <option value='green'>Green</option>
            </Field>
            <br />
            <br />
            <Field type='checkbox' name='check' />
            <br />
            <br />
            <button type='submit'>Submit</button>
            <hr />
            <hr />
            <CiBeerMugFull
              size={64}
              color={
                values.select === 'red'
                  ? 'red'
                  : values.select === 'yellow'
                    ? 'yellow'
                    : values.select === 'green'
                      ? 'green'
                      : 'blue'
              }
            />
          </Form>
        )
      }}
    </Formik>
    // <Formik
    //   initialValues={defaultFormValue}
    //   onSubmit={handleFormikSubmit}
    //   validationSchema={userValidationSchema}
    // >
    //   <Form>
    //     <label htmlFor={`${uniqIdForUserForm}_email`}>pls input your email</label>
    //     <br />
    //     <Field type='text' name='email' id={`${uniqIdForUserForm}_email`} />
    //     <ErrorMessage name='email' component='span' className={css['error-mess']} />
    //     <br />
    //     <br />
    //     <label htmlFor={`${uniqIdForUserForm}_password`}>pls input your Password</label>
    //     <br />
    //     <Field type='text' name='password' id={`${uniqIdForUserForm}_password`} />
    //     <ErrorMessage name='password' component='span' className={css['error-mess']} />
    //     <br />
    //     <br />
    //     <label htmlFor={`${uniqIdForUserForm}_select`}>pls choose..</label>
    //     <br />
    //     <Field as='select' name='select' id={`${uniqIdForUserForm}_select`}>
    //       <option value='' disabled>
    //         Choose...
    //       </option>
    //       <option value='Red'>Red</option>
    //       <option value='Yellow'>Yellow</option>
    //       <option value='Green'>Green</option>
    //     </Field>
    //     <br />
    //     <br />
    //     <Field
    //       type='checkbox'
    //       name='check'
    //     />
    //     <br />
    //     <br />
    //     <button type='submit'>Submit</button>
    //     <hr />
    //     <hr />
    //     {/* <CiBeerMugFull
    //       size={64}
    //       color={
    //         userFormValue.select === '1'
    //           ? 'red'
    //           : userFormValue.select === '2'
    //             ? 'yellow'
    //             : userFormValue.select === '3'
    //               ? 'green'
    //               : 'blue'
    //       }
    //     /> */}
    //   </Form>
    // </Formik>
  )
}

export default UserControlledFormik
