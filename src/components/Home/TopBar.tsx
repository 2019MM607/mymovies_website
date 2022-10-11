import React from 'react'
import { useFormik } from 'formik'
import { useAppDispatch } from '../../redux/store'
import { getMovies } from '../../redux/thunks/movies.thunk'


export const TopBar = () => {

    const dispatch = useAppDispatch()
       const formik = useFormik({
        initialValues:{
            query: '',
        },
        onSubmit: ()=>{
            dispatch(getMovies({query: formik.values.query}))
            formik.values.query = ''
        }
    })
  return (
            <div className='shadow-lg p-4 rounded-lg mb-10'>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <input 
                            type="text" 
                            name='query'
                            id='query'
                            className='border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-1 focus:ring-violet-700 '
                            placeholder='Search'
                            value={formik.values.query}
                            onChange={formik.handleChange}
                        />
                        <input type="submit" value="Search" className='p-1 font-semibold text-white bg-violet-700 rounded-lg ml-2' />
                    </form>
                </div>
            </div>
  )
}
