import React from 'react'

function NavButton({step, stepTitle, isActiveClass}) {
  return (
    <div className={isActiveClass}>
        <button className='py-1 px-3 border-white border-[1px] rounded-full font-[600]'>{step}</button>
        <p className='hidden md:block'>
        STEP {step}
        <span className='uppercase block'>{stepTitle}</span>
        </p>
    </div>
  )
}

export default NavButton