import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";

const Whitebutton = () => {
  return (
    <div className='bg-white p-3 gap-4 rounded-full text-black flex justify-between items-center w-fit shadow-sm border border-black/10'>
        <p className='text-2xl font-bold'>Buttons</p>
        <div id="icon" className='bg-black rounded-full'>
            <BsArrowUpRightCircle className='text-white rounded-full text-3xl' />
        </div>
    </div>
  )
}

export default Whitebutton