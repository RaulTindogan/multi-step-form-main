import React from 'react'
import { useState } from 'react'

function SelectPlan({planData, setPlanData, initialState, setinitialState}) {

  const [isToggled, setIsToggled] = useState(false);
  // const [selectedPlan, setselectedPlan] = useState(0)
  
  const toggleButton = () => {
    setIsToggled(prevState => !prevState);
    setPlanData({...planData, id: '', planIcon: '', planName: '', planPrice: '', planType: ''})
  }

  const plans = [
    {
      id: 1,
      planIcon: '../assets/icon-arcade.svg',
      planName: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      addedMonths: '2 months free',
      planType: 'Monthly'
    },
    {
      id: 2,
      planIcon: '../assets/icon-advanced.svg',
      planName: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      addedMonths: '2 months free',
      planType: 'Monthly'
    },
    {
      id: 3,
      planIcon: '../assets/icon-pro.svg',
      planName: 'Pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
      addedMonths: '2 months free',
      planType: 'Monthly'
    }
  ]

  const handleSelectedPlan = (plan) => {
    let price = ''
    let planType = ''
    isToggled?  planType = 'Yearly': planType = 'Monthly'
    planType == 'Monthly'? price=plan.monthlyPrice : price=plan.yearlyPrice

    setPlanData({...planData, id: plan.id, planIcon: plan.planIcon, planName: plan.planName, planPrice: price, planType: planType})
    setinitialState({...initialState, planSelected: false})
  }


  return (
    <div>
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
              onClick={()=>{handleSelectedPlan(plan)}}
            >
              <img src={plan.planIcon} alt="" />
              <p>
                {plan.planName} 
                <span>{isToggled? plan.yearlyPrice: plan.monthlyPrice}</span>
                {isToggled && <span>{plan.addedMonths}</span>}
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