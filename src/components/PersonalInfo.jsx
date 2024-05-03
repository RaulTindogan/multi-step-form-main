import React from 'react'

const errorMessages = [
    'This field is required',
    'Enter a valid Email'
]

function PersonalInfo({formData, setFormData}) {

    const nameHandler = (e)=> {
        const input = e.target.value.replace(/[^A-Za-z\s]/g, '')
        setFormData({ ...formData, name: input});
    }

    const emailHandler = (e)=> {
        // const input = e.target.value.replace(/[^A-Za-z\s]/g, '')
        setFormData({ ...formData, email: e.target.value});
    }


    return (
    <div>
        <h1>{formData.name}</h1>
        <h1>{formData.email}</h1>
        <div>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number</p>
        </div>
        <form noValidate>
            <div>
                <label htmlFor="">Name<span>{formData.nameError?errorMessages[0]:''}</span></label>
                <input type="text" name="name" id="name" value={formData.name} placeholder='e.g. Stephen King' onChange={nameHandler}/>
            </div>
            <div>
                <label htmlFor="">Email Address <span></span></label>
                <input type="text" name="" id="" value = {formData.email} placeholder='e.g. stephenking@lorem.com' onChange={emailHandler}/>
            </div>
            <div>
                <label htmlFor="">Phone Number <span></span></label>
                <input type="text" name="" id="" value = {state.email} placeholder='e.g. +1 234 567 890'/>
            </div>
        </form>
    </div>
  )
}

export default PersonalInfo