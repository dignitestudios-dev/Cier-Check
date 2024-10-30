import React, { useContext } from 'react'
import Navbar2 from '../Global/Navbar2'
import { ThemeContext } from '../context/ThemeContext'
import { Formik, useFormik } from 'formik';
import { MdQrCode2 } from 'react-icons/md';



const validate = values => {

    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }
    if (!values.q1) {
        errors.q1 = 'Required';
    } else if (values.q1.length > 15) {
        errors.q1 = 'Must be 15 characters or less';
    }
    if (!values.q2) {
        errors.q2 = 'Required';
    } else if (values.q2.length > 15) {
        errors.q2 = 'Must be 15 characters or less';
    }
    if (!values.q3) {
        errors.q3 = 'Required';
    } else if (values.q3.length > 15) {
        errors.q3 = 'Must be 15 characters or less';
    }
    if (!values.q4) {
        errors.q4 = 'Required';
    } else if (values.q4.length > 15) {
        errors.q4 = 'Must be 15 characters or less';
    }
    if (!values.q5) {
        errors.q5 = 'Required';
    } else if (values.q5.length > 15) {
        errors.q5 = 'Must be 15 characters or less';
    }
    if (!values.q6) {
        errors.q5 = 'Required';
    } else if (values.q6.length > 15) {
        errors.q6 = 'Must be 15 characters or less';
    }
    if (!values.q7) {
        errors.q7 = 'Required';
    } else if (values.q7.length > 15) {
        errors.q7 = 'Must be 15 characters or less';
    }
    if (!values.q8) {
        errors.q8 = 'Required';
    } else if (values.q8.length > 15) {
        errors.q8 = 'Must be 15 characters or less';
    }
    if (!values.q9) {
        errors.q9 = 'Required';
    } else if (values.q9.length > 15) {
        errors.q9 = 'Must be 15 characters or less';
    }
    if (!values.q10) {
        errors.q10 = 'Required';
    } else if (values.q6.length > 15) {
        errors.q10 = 'Must be 15 characters or less';
    }





    return errors;
};

const HeroQuestionnaire = () => {
    const { theme } = useContext(ThemeContext)


    const formik = useFormik({
        initialValues: {

            firstName: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',

        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
            resetForm()
        },
    });

    const SignupForm = () => {

    }

    return (
        <form onSubmit={formik.handleSubmit}>

            <div className={`py-16 ${theme === "light" ? 'bg-slate-50' : 'bg-dark'}`}>

                <div className={`w-[95%] lg:w-[60%] flex flex-col items-start justify-start mx-auto gap-10 py-14 px-6 md:px-7 lg:px-12 ${theme === "light" ? 'bg-white shadow-bg' : 'bg-[#2d2d2d]'}`}>
                    <h1 className='text-4xl'>Questionnaire</h1>
                    <div className='w-full flex flex-col items-start gap-4'>
                        <label htmlFor="firstName">1. When was the last time you checked for breast cancer?</label>
                        <input type="text"
                            name="firstName" id="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.fill} className={`outline-none w-full px-5 py-3 ${theme === "light" ? 'bg-white text-black border' : 'border bg-[#2d2d2d]'}`} />
                        {formik.errors.firstName ? <div className='text-red-600'>{formik.errors.firstName}</div> : null}
                        <div className='border w-full my-4' />
                        <div className='flex flex-col gap-2'>
                            <p>2. Do you feel a lump in any of your breasts that made you act on it for some time now?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='q1' id='q1'
                                        onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='q1' id='q1'
                                        onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q1 ? <div className='text-red-600'>{formik.errors.q1}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>2. Do you feel a lump in any of your breasts that made you act on it for some time now?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q2" className='flex items-center gap-2'>
                                    <input type="radio" name='q2' id='q2'
                                        onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q2" className='flex items-center gap-2'>
                                    <input type="radio" name='q2' id='q2' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q2 ? <div className='text-red-600'>{formik.errors.q2}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>3. Do you have a history of breast cancer or any other type of cancer in your family?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q3" className='flex items-center gap-2'>
                                    <input type="radio" name='q3' id='q3' onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q3" className='flex items-center gap-2'>
                                    <input type="radio" name='q3' id='q3' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q3 ? <div className='text-red-600'>{formik.errors.q3}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>4. Do you know anyone suffering from breast cancer?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q4" className='flex items-center gap-2'>
                                    <input type="radio" name='q4' id='q4' onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q4" className='flex items-center gap-2'>
                                    <input type="radio" name='q4' id='q4' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q4 ? <div className='text-red-600'>{formik.errors.q4}</div> : null}
                            </div>

                        </div>

                        <div className='border w-full my-4' />
                        <div className='flex flex-col gap-2'>
                            <p>5. Are you looking forward to starting the process of checking for breast cancer?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q5" className='flex items-center gap-2'>
                                    <input type="radio" name='q5' id='q5' onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q5" className='flex items-center gap-2'>
                                    <input type="radio" name='q5' id='q5' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q5 ? <div className='text-red-600'>{formik.errors.q5}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full my-4' />
                        <div className='flex flex-col gap-2'>
                            <p>6. Did you know that cancer, in some instances, has no symptoms?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q6" className='flex items-center gap-2'>
                                    <input type="radio" name='q6' id='q6' onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q6" className='flex items-center gap-2'>
                                    <input type="radio" name='q6' id='q6' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q6 ? <div className='text-red-600'>{formik.errors.q6}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full my-6' />
                        <div className='flex flex-col gap-2'>
                            <p>7. Are you willing to use a CIERCHECK device to initiate your journey to awareness?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q7" className='flex items-center gap-2'>
                                    <input type="radio" name='q7' id='q7' onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q7" className='flex items-center gap-2'>
                                    <input type="radio" name='q7' id='q7' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q7 ? <div className='text-red-600'>{formik.errors.q7}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full my-6' />
                        <div className='flex flex-col gap-2'>
                            <p>8. Would you like something sent to you in the mail to help your process?
                            </p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q8" className='flex items-center gap-2'>
                                    <input type="radio" name='q8' id='q8' onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q8" className='flex items-center gap-2'>
                                    <input type="radio" name='q8' id='q8' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q8 ? <div className='text-red-600'>{formik.errors.q8}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full my-4' />


                        <div className='flex flex-col gap-2'>
                            <p>9. Are you an advocate or have you completed the breast cancer awareness walk?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q9" className='flex items-center gap-2'>
                                    <input type="radio" name='q9' id='q9' onChange={formik.handleChange}
                                        value={"true"} />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q9" className='flex items-center gap-2'>
                                    <input type="radio" name='q9' id='q9' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q9 ? <div className='text-red-600'>{formik.errors.q9}</div> : null}
                            </div>

                        </div>

                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>10. Would you like special offers in the mail to spread the news about breast cancer?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="q10" className='flex items-center gap-2'>
                                    <input type="radio" name='q10' id='q10' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="q10" className='flex items-center gap-2'>
                                    <input type="radio" name='q10' id='q10' onChange={formik.handleChange}
                                        value={"false"} />
                                    <span>No</span>
                                </label>
                                {formik.errors.q10 ? <div className='text-red-600'>{formik.errors.q10}</div> : null}
                            </div>

                        </div>
                        <div className='border w-full mt-4 mb-8' />



                        <button type='submit' className=' btn' disabled={Object.keys(formik.errors).length > 0}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default HeroQuestionnaire