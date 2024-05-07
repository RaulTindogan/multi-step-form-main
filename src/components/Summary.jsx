import React from 'react'

function Summary({planState, setplanState, addOns, setAddOns}) {
  console.log(addOns)
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
              <span>Change</span>
            </p>
            <p>{planState.price}</p>     
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
        
        {/* <p>
          Total (per month):
          <span>+12/mo</span>
        </p> */}
      </div>
    </div>
  )
}

export default Summary