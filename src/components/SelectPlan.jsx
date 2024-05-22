import React from 'react'

function SelectPlan({planData, setPlanData, initialState, setinitialState}) {

  const resetDefault = {
    id: 0, 
    planIcon: '', 
    planName: '', 
    planPrice: 0, 
  }
  
  const toggleButton = () => {
    setPlanData(prevState => {
      const newIsYearly = !prevState.isYearly;
      return {
        ...resetDefault,
        isYearly: newIsYearly,
        planType: newIsYearly ? 'Yearly' : 'Monthly'
      };
    });
  }


  const plans = [
    {
      id: 1,
      planIcon: 'src/assets/images/icon-arcade.svg',
      planName: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      addedMonths: '2 months free',
      planType: 'Monthly'
    },
    {
      id: 2,
      planIcon: 'src/assets/images/icon-advanced.svg',
      planName: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      addedMonths: '2 months free',
      planType: 'Monthly'
    },
    {
      id: 3,
      planIcon: 'src/assets/images/icon-pro.svg',
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
    planData.isYearly?  planType = 'Yearly': planType = 'Monthly'
    planType == 'Monthly'? price=plan.monthlyPrice : price=plan.yearlyPrice

    setPlanData({...planData, id: plan.id, planIcon: plan.planIcon, planName: plan.planName, planPrice: price, planType: planType})
    setinitialState({...initialState, planSelected: false})
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
      md:mt-0 md:rounded-none md:h-full'
    >
      <div>
        <h2 className='text-Marine-blue text-xl font-[700] sm:text-3xl'>Select your plan</h2>
        <p className='my-3 md:my-5'>You have the option of monthly of yearly billing.</p>
      </div>
      <div>
        {
          plans.map((plan) =>(
            <div 
              key={plan.id} 
              className={`
                cursor-pointer ${planData.id == plan.id && 'border-Purplish-blue bg-Alabaster'} 
                p-2 flex gap-3 border-[1px] border-Light-gray rounded-md my-2 hover:border-Purplish-blue`}
              onClick={()=>{handleSelectedPlan(plan)}}
            >
              <img src={plan.planIcon} alt="" />
              <p>
                <span className='text-Marine-blue font-[600]'>
                  {plan.planName} 
                </span>
                <span className='block text-sm text-Cool-gray font-[600]'>${planData.isYearly? plan.yearlyPrice : plan.monthlyPrice}/{planData.isYearly? 'yr' : 'mo'}</span>
                {planData.isYearly && <span className='block text-Marine-blue font-[600]'>{plan.addedMonths}</span>}
              </p> 
            </div>
          ))
        }
        <div className='flex mt-10 justify-center items-center gap-3'>
          <p className={`${planData.isYearly == false? 'text-Marine-blue font-[700]' : 'text-gray'}`}>Monthly</p>
          <div>
            <div>
              <label htmlFor="toggleButton" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" id="toggleButton" className="sr-only" checked={planData.isYearly} onChange={toggleButton} />
                  <div className={`w-[3rem] h-5 bg-Marine-blue rounded-full shadow-inner flex items-center justify-start px-1 ${planData.isYearly ? 'justify-end' : ''}`}>
                    <div className={`w-4 h-4 bg-white rounded-full shadow-md`}></div>
                  </div>  
                </div>
              </label>
            </div>
          </div>
          <p className={`${planData.isYearly? 'text-Marine-blue font-[600]' : 'text-Cool-gray'}`}>Yearly</p>
        </div>
      </div>
    </div>
  )
}

export default SelectPlan