import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";

const Blackbutton = () => {
  return (
    <div className='bg-black p-3 gap-4 rounded-full text-white flex justify-between items-center w-fit'>
        <p className='text-2xl font-bold'>Buttons</p>
        <div id="icon" className='bg-white rounded-full'>
            <BsArrowUpRightCircle className='text-black rounded-full text-3xl' />
        </div>
    </div>
  )
}

export default Blackbutton
