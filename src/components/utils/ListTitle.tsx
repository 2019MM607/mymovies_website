import React from 'react'

interface IProps {
    title : string;
   
}
export const ListTitle = ({title} : IProps) => {
  return (
   <div className=' flex justify-end w-1/2  mt-10 mb-10   '>
        <h1 className='text-white text-2xl font-bold w-full ml-5'>{title} </h1>
    </div>
  )
}
