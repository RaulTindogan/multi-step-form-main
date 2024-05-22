import React from 'react'

function Summary({planState, setplanState, addOns, setAddOns, initialState, setinitialState}) {
  const handleChange = () => {
    console.log('hello')
    setinitialState({...initialState, currentPage: 2})
    console.log(initialState.curretPage)
  }
  return (
    <div className='
      rounded-md 
      p-5 
      w-[90%] max-w-[500px] 
      mt-[-4rem]
      mx-auto
      bg-[white]
      sm:p-10
      md:mt-0 md:w-full md:rounded-none md:h-full '
    >
      <div>
        <h2 className='text-Marine-blue text-xl font-[700] sm:text-3xl'>Finishing Up</h2>
        <p className='my-3 md:my-5'>Double-check everything looks OK beform confirming</p>
      </div>
      <div>
        <div className='bg-Alabaster p-3'>
          {
            <div className='p-2 border-b-[1px] flex justify-between items-center'>    
              <p>
                <span className='text-Marine-blue'><span className='font-[600]'>{planState.planName}</span> ({planState.planType})</span>
                <span
                  className='block underline cursor-pointer'
                  onClick={handleChange}
                >Change</span>
              </p>
              <p className='font-[700] text-Marine-blue'>{`$${planState.planPrice}/${planState.planType == "Monthly"? 'mo' : 'yr'}`}</p>     
            </div>
          }       
          {
            addOns.map(addOn=>(
              <div 
                key={addOn.id}
                className={`text-sm p-2`}
              >
                <p  className={`flex justify-between`}>
                  {addOn.addOnName}
                  <span className='text-Marine-blue font-[600]'>+${addOn.addOnPrice}/{planState.planType == "Monthly"? 'mo' : 'yr'}</span>
                </p>
              </div>
            ))
          }  
        </div>  
        <p className='p-5 text-sm flex justify-between'>
          Total (per {planState.isYearly? 'year' : 'month'}):
          <span className='text-Purplish-blue font-[700]'>
            {`
              $ ${planState.planPrice + addOns.reduce((sum, addOn) => sum + addOn.addOnPrice, 0)}/${planState.planType == "Monthly"? 'mo' : 'yr'}
            `}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Summary