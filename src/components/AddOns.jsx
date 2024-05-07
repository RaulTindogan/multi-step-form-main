import React from 'react'

function AddOns({addOnsData, setaddOnsData, planType}) {
  const addOns = [
    {
      id: 1,
      addOnName: 'Online service',
      addOnDescription: 'Access to multiplayer games',
      monthlyPrice: '+$1/mo',
      yearlyPrice: '+$10/yr',
    },
    {
      id: 2,
      addOnName: 'Larger storage',
      addOnDescription: 'Extra 1TB of cloud save',
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
    },
    {
      id: 3,
      addOnName: 'Customizable profile',
      addOnDescription: 'Custom theme on your profile',
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
    }
  ]

  const handleAddOns = (id, name, monthlyPrice, yearlyPrice) => {

    // Check if the add-on with the specified ID already exists in the array
    const existingIndex = addOnsData.findIndex(addOn => addOn.id === id);
    
    if (existingIndex !== -1) {
      // If the add-on already exists, remove it from the array
      const updatedAddOnsData = addOnsData.filter(addOn => addOn.id !== id);
      console.log(updatedAddOnsData)
      setaddOnsData(updatedAddOnsData);
    } else {
      // If the add-on doesn't exist, add it to the array
      const price = planType === 'monthly'? monthlyPrice : yearlyPrice
      const info = { id: id, addOnName: name, addOnPrice: price };
      const updatedAddOnsData = [...addOnsData, info];
      setaddOnsData(updatedAddOnsData);
    }
  }

  return (
    <div>
      <div className='bg-[red]'>
        {
          addOnsData.map(addOns=>(
            <div>
              <h1>{addOns.id}</h1>
              <h1>{addOns.addOnName}</h1>
              <h1>{addOns.addOnPrice}</h1>
            </div>
          ))
        }  
      </div>
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div>
        {
          addOns.map(addOn=>(
            <div key={addOn.id} onClick={()=>{handleAddOns(addOn.id, addOn.addOnName, addOn.monthlyPrice, addOn.yearlyPrice)}}>
              <input type="checkbox" name="" id="" />
              <p>
                {addOn.addOnName}
                <span className='block'>{addOn.addOnDescription}</span>
              </p>
              <p>
                {planType==='monthly'? addOn.monthlyPrice : addOn.yearlyPrice}
              </p>
            </div>
          ))
        }
        
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default AddOns