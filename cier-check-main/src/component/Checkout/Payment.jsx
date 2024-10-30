import { Formik, useFormik } from 'formik';

import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { option } from 'framer-motion/client';
import { country } from '../../constants/Country';


const validate = values => {

    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.phone) {
        errors.phone = 'Please enter a valid phone number';
    }
    // else if (values.phone < 10 || values.phone > 11) {
    //     errors.phone = 'Required and must be 11 digits';
    // } 
    else if (!/^[0-9]{11}$/.test(values.phone)) {
        errors.phone = 'Required and must be 11 digits';
    }
    if (!values.address) {
        errors.address = 'Required';
    } else if (values.address.length > 50) {
        errors.address = 'Must be 50 characters or less';
    }
    if (!values.optional) {
        errors.optional = 'Required';
    } else if (values.optional.length > 50) {
        errors.optional = 'Must be 50 characters or less';
    }
    if (!values.state) {
        errors.state = 'Required';
    } else if (values.state.length > 50) {
        errors.state = 'Must be 50 characters or less';
    }
    if (!values.zip) {
        errors.zip = 'Required';
    } else if (values.zip.length > 50) {
        errors.zip = 'Must be 50 characters or less';
    }
    if (!values.city) {
        errors.city = 'Required';
    } else if (values.city.length > 50) {
        errors.city = 'Must be 50 characters or less';
    }

    return errors;
};

const Payment = () => {
    const { theme } = useContext(ThemeContext)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            optional: '',
            zip: '',
            city: '',
            state: ""

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
        <div className={`py-10 ${theme === "light" ? 'bg-white text-black' : 'bg-[#1c1c1c]'}`}>

            <form onSubmit={formik.handleSubmit} className={`flex flex-col py-10 px-6 mx-4  lg:mx-32 ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] '}`} >

                <h1 className={`text-3xl lg:text-5xl font-bold  px-6 py-9 ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] text-white '}`} >Payment</h1>
                <div className={` lex flex-col py-10 rounded-lg  ${theme === "light" ? 'bg-white text-black' : 'bg-[#1c1c1c] text-white '}`} >
                    <div className='w-full flex flex-col items-center justify-center py-3   text-center '>

                        <div className='w-full flex flex-col xl:flex-row    justify-between  py-8 px-10 gap-y-6 '>
                            <button className='lg:px-32 bg-yellow-500 py-2 lg:py-4 rounded-full text-xl font-bold text-blue-700'>Continue PayPal</button>
                            <button className='lg:px-32 bg-black py-2 lg:py-4 rounded-full text-xl font-bold text-blue-700'>Continue PayPal</button>
                            <button className=' lg:px-32 bg-pink-500 py-2 lg:py-4 rounded-full text-xl font-bold text-blue-700'>Continue PayPal</button>
                        </div>
                        <p>Selected payment method: <span className='text-lg lg:text-xl text-center font-bold'>Credit card</span></p>
                    </div>
                    <div className='w-full grid grid-cols-1  lg:grid-cols-2 pt-12 gap-y-8 '>
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
                        <div className='flex flex-col gap-2 px-6'>
                            <label htmlFor="phone" className='text-xl font-semibold'>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                className='px-4 py-3 border border-pink-600 outline-none text-black' />
                            {formik.errors.phone ? <div className='text-red-700'> {formik.errors.phone}</div> : null}
                        </div>



                        <div className='flex flex-col px-6 gap-2 '>
                            <label htmlFor="firstName" className='text-xl font-semibold'>First Name</label>
                            <input id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName} className='px-4 py-3 border border-pink-600 outline-none text-black' />
                            {formik.errors.firstName ? <div className='text-red-600'>{formik.errors.firstName}</div> : null}
                        </div>
                        <div className='flex flex-col px-6 gap-2'>
                            <label htmlFor="" className='text-xl font-semibold'>Email</label>
                            <input id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName} className='px-4 py-3 border border-pink-600 outline-none text-black' />
                            {formik.errors.lastName ? <div className='text-red-600'>{formik.errors.lastName}</div> : null}
                        </div>
                    </div>
                    <div className=' px-6 py-6 gap-2 flex flex-col'>
                        <label htmlFor="optional" className='text-xl font-semibold'>Apartment, suite, unit (optional)</label>
                        <input type="text" name="optional"
                            id="optional"
                            onChange={formik.handleChange}
                            value={formik.values.optional} className='px-4 py-3 border border-pink-600 outline-none text-black' />
                        {formik.errors.optional ? <div className='text-red-600'>{formik.errors.optional}</div> : null}
                    </div>
                    <div className=' px-6 py-6 gap-2 flex flex-col'>
                        <label htmlFor="city" className='text-xl font-semibold'>Street address</label>
                        <input type="text"
                            name="city"
                            id="city"
                            onChange={formik.handleChange}
                            value={formik.values.city} className='px-4 py-3 border border-pink-600 outline-none text-black' />
                        {formik.errors.city ? <div className='text-red-600'>{formik.errors.city}</div> : null}

                    </div>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-4   gap-9 px-6 py-6  '>
                        <div className=' w-full lg:col-span-2 flex flex-col gap-2'>
                            <label htmlFor="address" className='text-xl font-semibold'>City</label>
                            <input type="text" name="address"
                                id="address"
                                onChange={formik.handleChange}
                                value={formik.values.address} className='w-full px-4 py-3 border border-pink-600 outline-none text-black' />
                            {formik.errors.address ? <div className='text-red-600'>{formik.errors.address}</div> : null}
                        </div>
                        <div className='flex flex-col gap-2'>

                            <label htmlFor="state" className='text-xl font-semibold'>States</label>
                            <select className='w-full px-4 py-3 border border-pink-600 outline-none text-black' name="state" id="state" onChange={formik.handleChange}
                                value={formik.values.state}>

                                {country.map((item, index) => {
                                    return (
                                        <option className='py-32 text-black'>{item}</option>
                                    )
                                })}
                            </select>
                            {formik.errors.state ? <div className='text-red-600'>{formik.errors.state}</div> : null}
                        </div>



                        <div className='flex flex-col gap-2' >
                            <label htmlFor="zip" className='text-xl font-semibold'>Zip Code</label>
                            <input type="text"
                                name="zip"
                                id="zip"
                                onChange={formik.handleChange}
                                value={formik.values.zip} className='w-full px-4 py-3 border border-pink-600 outline-none text-black' />
                            {formik.errors.zip ? <div className='text-red-600'>{formik.errors.zip}</div> : null}
                        </div>


                    </div>


                </div>
                <div className='mt-8'>
                    <button type="submit" className='py-4 px-20 rounded-full text-2xl font-semibold text-white  bg-pink-600' disabled={Object.keys(formik.errors).length > 0}>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Payment
