import React from 'react'

function AddOns({addOnsData, setaddOnsData, planType, initialState, setinitialState}) {
  const addOns = [
    {
      id: 1,
      addOnName: 'Online service',
      addOnDescription: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: 2,
      addOnName: 'Larger storage',
      addOnDescription: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: 3,
      addOnName: 'Customizable profile',
      addOnDescription: 'Custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
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
      setinitialState(prevState => ({...prevState, addOnSelected: true}))
    } else {
      // If the add-on doesn't exist, add it to the array
      const price = planType === 'monthly'? monthlyPrice : yearlyPrice
      const info = { id: id, addOnName: name, addOnPrice: price };
      const updatedAddOnsData = [...addOnsData, info];
      setaddOnsData(updatedAddOnsData);
      setinitialState(prevState => ({...prevState, addOnSelected: false}))
    }
  }

  return (
    <div
      className='
      rounded-md 
      p-5 
      w-[90%] max-w-[500px] 
      mt-[-4rem]
      mx-auto
      bg-[white]
      sm:p-10
      md:mt-0 md:rounded-none md:h-full'
    >
      <div>
        <h2 className='text-Marine-blue text-xl font-[700] sm:text-3xl'>Pick add-ons</h2>
        <p className='my-3 md:my-5'>Add-ons help enhance your gaming experience.</p>
      </div>
      <div>
        {
          addOns.map(addOn=>(
            <div 
              key={addOn.id} 
              onClick={()=>{handleAddOns(addOn.id, addOn.addOnName, addOn.monthlyPrice, addOn.yearlyPrice)}}
              className={`
                border-Light-gray border-2 rounded-md flex items-center gap-3 p-2 my-2 cursor-pointer hover:border-Purplish-blue
                ${addOnsData.some(data => data.id === addOn.id) ? 'bg-Alabaster border-Purplish-blue': ''}
              `}
            >
              <div>
                <input type="checkbox" name="" id="" checked={addOnsData.some(data => data.id === addOn.id)} readOnly/>
              </div>
              <div className='flex justify-between items-center grow text-sm'>
                <p>
                  <span className='text-Marine-blue font-[600]'>{addOn.addOnName}</span>
                  <span className='block text-[.7rem]'>{addOn.addOnDescription}</span>
                </p>
                <p>
                  ${planType==='Monthly'? addOn.monthlyPrice + '/mo' : addOn.yearlyPrice + '/yr'}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AddOns