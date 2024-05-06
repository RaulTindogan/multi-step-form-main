import React from 'react'
import { useState } from 'react'

function SelectPlan({planData, setPlanData}) {

  const [isToggled, setIsToggled] = useState(false);
  // const [selectedPlan, setselectedPlan] = useState(0)
  
  const toggleButton = () => {
    setIsToggled(prevState => !prevState);
  }

  const plans = [
    {
      id: 1,
      planIcon: '../assets/icon-arcade.svg',
      planName: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$99/yr'
    },
    {
      id: 2,
      planIcon: '../assets/icon-advanced.svg',
      planName: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$132/yr'
    },
    {
      id: 3,
      planIcon: '../assets/icon-pro.svg',
      planName: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$165/yr'
    }
  ]

  const handleSelectedPlan = (id, icon, name, price) => {
    setPlanData({...planData, id: id, planIcon: icon, planName: name, planPrice: price})
  }


  return (
    <div>
      <div className='bg-[red]'>
        <h1>{planData.id}</h1>
        <h1>{planData.planName}</h1>
        <h1>{planData.planIcon}</h1>
        <h1>{planData.planPrice}</h1>
      </div>
      
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly of yearly billing.</p>
      </div>
      <div>
        {
          plans.map((plan) =>(
            <div 
              key={plan.id} 
              className={`cursor-pointer ${planData.id == plan.id && ' bg-amber-100'}`}
              onClick={()=>{handleSelectedPlan(plan.id, plan.planIcon, plan.planName, plan.monthlyPrice)}}
            >
              <img src={plan.planIcon} alt="" />
              <p>
                {plan.planName} 
                <span>{isToggled? plan.yearlyPrice: plan.monthlyPrice}</span>
              </p> 
            </div>
          ))
        }
        <div>
          <p>Monthly</p>
          <div>
            <div>
              <label htmlFor="toggleButton" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" id="toggleButton" className="sr-only" checked={isToggled} onChange={toggleButton} />
                  <div className={`w-[3rem] h-5 bg-gray-300 rounded-full shadow-inner flex items-center justify-start px-1 ${isToggled ? 'justify-end' : ''}`}>
                    <div className={`w-4 h-4 bg-white rounded-full shadow-md`}></div>
                  </div>  
                </div>
              </label>
            </div>
          </div>
          <p>Yearly</p>
        </div>
      </div>
    </div>
  )
}

export default SelectPlan