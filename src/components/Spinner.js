import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='relative'>
        <div className='custom-loader absolute left-2/4 top-80'>
        </div>
        <p className='absolute left-2/4 top-96'>Loading...</p>
    </div>
  )
}

export default Spinner