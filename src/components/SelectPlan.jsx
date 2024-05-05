import React from 'react'

function SelectPlan() {
  return (
    <div>
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly of yearly billing.</p>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <p>
            Arcade 
            <span>$9/mo</span>
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>
            Advanced 
            <span>$12/mo</span>
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>
            Pro 
            <span>$15/mo</span>
          </p>
        </div>
        <div>
          <p>Monthly</p>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <p>Yearly</p>
        </div>
      </div>
    </div>
  )
}

export default SelectPlan