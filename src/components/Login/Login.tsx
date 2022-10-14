import React from 'react'
import { useFormik } from 'formik'

import { useAppDispatch } from '../../redux/store'
import { login } from '../../redux/thunks/auth.thunk'


export const Login = () => {
    const dispatch = useAppDispatch()
    const [isError, setIsError] = React.useState(false)

    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        onSubmit: ()=>{
            console.log(formik.values)
                if (formik.values.email === 'eve.holt@reqres.in' || formik.values.password === 'cytislicka') {
                    dispatch(login({ email: formik.values.email, password: formik.values.password }))
                }
                formik.values.email = ''
                formik.values.password = ''
                setIsError(true)
            }

    })
  return (
    <div className={`bg-white p-2 rounded-lg animate__animated animate__flipInY flex flex-col items-center ${isError && 'animate__shakeX'}`}>
        <div className=' shadow-2xl   w-16 h-16 rounded-full flex justify-center items-center  '>
            <span className=' text-violet-700 p1 text-lg font-bold'>MW</span>
        </div>
        <h1 className='text-violet-700 font-semibold text-lg mt-10'>Login</h1>
        <form className='' onSubmit={formik.handleSubmit} >
            <div className='m-5  p-1 flex justify-end items-center'>
                <label htmlFor="email" className='text-violet-700 mr-2'>Email: </label>
                <input 
                    type="email" 
                    name='email' 
                    id='email'
                    className='border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-1 focus:ring-violet-700 ' 
                    placeholder='ex: some@some.com'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>

            <div className='m-5  p-1 flex justify-start items-center'>
                <label htmlFor="password" className='text-violet-700 mr-2'>Password: </label>
                <input 
                    type="password" 
                    name='password'
                    id='password'
                    className='border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-1 focus:ring-violet-700 ' 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </div>

            <input type="submit" value="Login" className='bg-violet-700 w-full rounded-lg p-1 text-white' />
        </form>
    </div>
  )
}
