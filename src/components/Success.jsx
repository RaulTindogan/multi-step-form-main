import React from 'react'

function Success() {
  return (
    <div className='
      rounded-md 
      p-5
      py-[5rem] 
      w-[90%] max-w-[500px] 
      mt-[-4rem]
      mx-auto
      bg-[white]
      sm:p-10
      md:mt-0 md:rounded-none md:flex md:justify-center md:items-center md:p-0 md:h-full'
    >
        <div className='flex flex-col items-center text-center gap-5'>
            <img src="src/assets/images/icon-thank-you.svg" alt="" className='size-[50px]'/>
            <h1 className='text-Marine-blue font-[700] text-2xl'>Thank you!</h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun using our
                platform. If you ever need support, please feel free to email us at 
                support@loremgaming.com    
            </p>
        </div>
    </div>
  )
}

export default Success