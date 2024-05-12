import React from 'react'

const errorMessages = [
    'This field is required',
    'Enter a valid Email',
    'Enter a valid phone number'
]

function PersonalInfo({formData, setFormData}) {

    const nameHandler = (e)=> {
        const input = e.target.value.replace(/[^A-Za-z\s]/g, '')
        setFormData(prevState => ({ ...prevState, name: input}))
        setFormData(prevState => ({ ...prevState, nameError: false}))
    }

    const emailHandler = (e)=> {
        // const input = e.target.value.replace(/[^A-Za-z\s]/g, '')
        setFormData(prevState => ({ ...prevState, email: e.target.value}))
        setFormData(prevState => ({ ...prevState, emailError: 0}))
    }

    const phoneHandler = (e) => {
        // Remove all non-numeric characters from the input
        let rawPhoneNumber = e.target.value.replace(/\D/g, '').substring(0, 10);

        // Format the phone number as +1 (234) 567-890
        const formattedPhoneNumber = rawPhoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4')

        // Update the formData state with the formatted phone number
        setFormData(prevState => ({...prevState, phone: formattedPhoneNumber}))
        setFormData(prevState => ({...prevState, phoneError: 0}))
    }

    const checkInput = (inputNum) => {
        switch(inputNum) {
            case 1:
                if(formData.name == '' ){
                    setFormData({...formData, nameError: true})
                } 
                return 
            case 2: 
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (formData.email == '') {
                    setFormData({...formData, emailError: 1})
                } else if (!emailRegex.test(formData.email)) {
                    setFormData({...formData, emailError: 2})
                }
                return
            case 3:
                if (formData.phone == '') {
                    setFormData({...formData, phoneError: 1})
                } else if (formData.phone.length < 14) {
                    setFormData({...formData, phoneError: 2})
                }
                return
        }
    }

    return (
    <div className='rounded-md p-5 border-[red] border-2 w-[90%] absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-[white]'>
        <div>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number</p>
        </div>
        <form noValidate>
            <div>
                <label htmlFor="">
                    Name
                    <span>
                        {
                            formData.nameError == true? errorMessages[0]
                            : formData.name !== ''? "": ""
                        }
                    </span>
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    placeholder='e.g. Stephen King' 
                    onChange={nameHandler}
                    onBlur={()=>{checkInput(1)}}
                />
            </div>
            <div>
                <label htmlFor="">Email Address <span>{formData.emailError == 1? errorMessages[0] : formData.emailError == 2? errorMessages[1]: ''}</span></label>
                <input 
                    type="text" 
                    name="" id="" 
                    value = {formData.email} 
                    placeholder='e.g. stephenking@lorem.com' 
                    onChange={emailHandler}
                    onBlur={()=>{checkInput(2)}}
                />
            </div>
            <div>
                <label htmlFor="">Phone Number <span>{formData.phoneError == 1? errorMessages[0] : formData.phoneError == 2? errorMessages[2] : ''}</span></label>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    value ={formData.phone} 
                    placeholder='e.g. +1 234 567 890' 
                    onChange={phoneHandler} 
                    onBlur={()=>{checkInput(3)}}
                    maxLength={15}/>
            </div>
        </form>
    </div>
  )
}

export default PersonalInfo