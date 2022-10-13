import React from 'react'

interface IProps {
    title : string;
   
}
export const ListTitle = ({title} : IProps) => {
  return (
   <div className=' flex justify-end w-1/6  mt-10 mb-10 '>
        <h1 className='text-white text-2xl font-bold w-fit'>{title} </h1>
    </div>
  )
}
