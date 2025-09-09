import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { ThemeContext } from '../../component/context/ThemeContext';


const validate = values => {

    const errors = {};



    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }


    return errors;
};

const ForgotPassword = () => {


    const { theme } = useContext(ThemeContext)
    const formik = useFormik({
        initialValues: {

            email: '',

        },
        validate,
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm()
        },
    });

    const SignupForm = () => {

    }


    return (
        <form onSubmit={formik.handleSubmit} className='hero' >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className='flex flex-col items-center justify-center gap-3 text-center'><img
                            className="w-24 h-24"
                            src="/logo.png"
                            alt="logo"
                        />
                            <h2 className='text-3xl font-bold'>Forgot Password</h2>
                            <p>To reset your password, please enter your email address. We will send you a link to create a new password.</p>
                        </div>
                        <div className='flex flex-col gap-2 px-6' >
                            <label htmlFor="email" className='text-base lg:text-xl font-semibold'>Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className='px-4 py-3 border border-pink-600 outline-none text-black' />
                            {formik.errors.email ? <div className='text-red-600'> {formik.errors.email}</div> : null}
                        </div>
                        <div className='w-full flex items-center justify-center '>
                            <button type="submit" className='py-4 px-10 rounded-full text-2xl font-semibold text-white  bg-pink-600' disabled={Object.keys(formik.errors).length > 0}>Submit</button>
                        </div>

                    </div>

                </div>
            </div>
        </ form>
    )
}

export default ForgotPassword
