import React from 'react'
import { useFormik } from 'formik'
import { Outlet } from "react-router-dom";

export const Main = () => {
    const formik = useFormik({
        initialValues:{
            query: '',
        },
        onSubmit: ()=>{
            formik.values.query = ''
        }
    })
    return (
        <div>
            <div className='shadow-lg p-4 sticky top-0 rounded-lg'>
                <div>
                    <form>
                        <input 
                            type="text" 
                            name='query'
                            id='query'
                            className='border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-1 focus:ring-violet-700 '
                            placeholder='Search'
                            value={formik.values.query}
                            onChange={formik.handleChange}
                        />
                    </form>
                
                </div>
            </div>

            <Outlet />

        </div>
    )
}
