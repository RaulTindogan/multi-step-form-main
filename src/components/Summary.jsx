import React from 'react'

function Summary({planState, setplanState, addOns, setAddOns, initialState, setinitialState}) {
  const handleChange = () => {
    console.log('hello')
    setinitialState({...initialState, currentPage: 2})
    console.log(initialState.curretPage)
  }
  return (
    <div>
      <div>
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK beform confirming</p>
      </div>
      <div>
        {
          <div>    
            <p>
              {planState.planName} (Monthly)
              <span
                className='block text-[red]'
                onClick={handleChange}
              >Change</span>
            </p>
            <p>{planState.planPrice}</p>     
          </div>
        }       
        {
          addOns.map(addOn=>(
            <div key={addOn.id}>
              <p>
                {addOn.addOnName}
                <span>{addOn.addOnPrice}</span>
              </p>
            </div>
          ))
        }
        
        <p>
          Total (per month):
          <span>
            {
              planState.planPrice + addOns.reduce((sum, addOn) => sum + addOn.addOnPrice, 0)
            }
          </span>
        </p>
      </div>
    </div>
  )
}

export default Summary