import React from 'react'

import { LoadAnimation } from '../components/animation/LoadAnimation'
import animationData from '../../public/97437-no-data-found.json'
export const NotFound = () => {
    return (
        <div className=' w-full  bg-slate-900 flex flex-col justify-center items-center'>
                    <h1 className='text-white font-bold'>Not Found</h1>
                    <LoadAnimation animationData={animationData} />
        </div>
    )
}
