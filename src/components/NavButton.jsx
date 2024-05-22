import React from 'react'

function NavButton({step, stepTitle, isActiveClass}) {
  return (
    <div className='md:flex gap-3'>
        <button className={`
            py-1 px-3 
            border-white border-[1px] rounded-full 
            font-[600] 
            ${isActiveClass !== ''? ' text-Marine-blue border-Light-blue': ' border-white'}
            ${isActiveClass}
            sm:px-4 sm:py-2 sm:text-md
            md:px-5
          `}>{step}
        </button>
        <p className='hidden md:block'>
          <span className='text-sm'>STEP {step}</span>
          <span className='uppercase block font-[600]'>{stepTitle}</span>
        </p>
    </div>
  )
}

export default NavButton