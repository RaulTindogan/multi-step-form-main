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

    const phoneHandler = (e) => {
        // Remove all non-numeric characters from the input
        let rawPhoneNumber = e.target.value.replace(/\D/g, '').substring(0, 10);

        // Format the phone number as +1 (234) 567-890
        // const formattedPhoneNumber = rawPhoneNumber.replace(/^(\d{1})(\d{3})(\d{3})(\d{3})$/, '+$1 $2 $3 $4');
        
        // const formattedPhoneNumber = rawPhoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, '+1 ' + '$1 $2 $3')
        const formattedPhoneNumber = rawPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '+1 $1 $2 $3')

        // Update the formData state with the formatted phone number
        setFormData({...formData, phone: formattedPhoneNumber});
    }

    return (
    <div>
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
                <input type="text" name="" id="" value ={formData.phone} placeholder='e.g. +1 234 567 890' onChange={phoneHandler} maxLength={15}/>
            </div>
        </form>
    </div>
  )
}

export default PersonalInfo