import { useState } from "react";
import NavButton from "./components/NavButton";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Success from "./components/Success";

function App() {

  // It is used for printing modal errors based on the current step.
  const modalErrorMessage = [
    'Please Complete the Form',
    'Please Choose a Plan',
    'Please Choose an AddOn',
  ]

  const [initialState, setinitialState] = useState({
    currentPage: 1,
    personalInfo: null,
    planSelected: null,
    addOnSelected: null,
    errorModal: false,
  })

  const [planState, setplanState] = useState({
    id: 0, 
    planIcon: '', 
    planName: '', 
    planPrice: 0, 
    planType: 'Monthly',
    isYearly: false
  })

  // State for AddOns
  const [addOns, setaddOns] = useState([])

  // This is a function for step back button
  const handleBack = () => {
    setinitialState({currentPage: initialState.currentPage - 1})
  }

  const [personalInfoState,setpersonalInfoState] = useState({
    name: '',
    email: '',
    phone: '',
    nameError: null,
    emailError: null,
    phoneError: null 
  }) 

  const handleSubmit = ()=>{
    const regex = /^\s*$/
    // const {name, email, phone} = personalInfoState
    if(personalInfoState.name == '') {
      setpersonalInfoState(prevState => ({ ...prevState, nameError: true }));
    } else {
      setpersonalInfoState(prevState => ({ ...prevState, nameError: false }));
    } 
    
    if (personalInfoState.email == '') {
      setpersonalInfoState(prevState => ({ ...prevState, emailError: 1 }));
    } else {
      setpersonalInfoState(prevState => ({ ...prevState, emailError: 0 }));
    }
    
    if (personalInfoState.phone == '') {
      setpersonalInfoState(prevState => ({ ...prevState, phoneError: 1 }));
    } else if(personalInfoState.phone.length < 14 ) {
      setpersonalInfoState(prevState => ({ ...prevState, phoneError: 2 }));
    } else {
      setpersonalInfoState(prevState => ({ ...prevState, phoneError: 0 }));
    }
    
    if (personalInfoState.nameError == true || personalInfoState.nameError == null || personalInfoState.emailError == null || personalInfoState.emailError > 0 || personalInfoState.phoneError > 0 || personalInfoState.phoneError == null){
        // Setting personalInfo and errorModal to true, to show the modal
        setinitialState(prevState => ({...prevState, personalInfo: true}))
        setinitialState(prevState => ({...prevState, errorModal: true}))
    } else {
      // This will proceed to the next step
      setinitialState({...initialState, currentPage: 2})
    }
    
  }

  const handleErrorModal = (num)=> {
    setinitialState(prevState => ({...prevState, errorModal: false}))

    switch(num) {
      case 1:
        setinitialState(prevState => ({...prevState, personalInfo: false}))
        break;
      case 2: 
        setinitialState(prevState => ({...prevState, planSelected: false}))
        break;
      case 2: 
        setinitialState(prevState => ({...prevState, addOnSelected: false}))
        break;
      default: 
        return
    }
  }

  const handlePlan = ()=>{
    
    if(planState.id === 0) {
      setinitialState(prevState => ({...prevState, planSelected: true}))
      setinitialState(prevState => ({...prevState, errorModal: true}))
    } else {
      setinitialState({...initialState, currentPage: 3})
      setinitialState(prevState => ({...prevState, planSelected: false}))
    }
  }

  const handleAdd = ()=>{
    if(Object.keys(addOns).length === 0) {
      setinitialState(prevState => ({...prevState, errorModal: true}))
      setinitialState(prevState => ({...prevState, addOnSelected: true}))
    } else {
      setinitialState({...initialState, currentPage: 4})
      setinitialState(prevState => ({...prevState, addOnSelected: false}))
    }
  }
  
  const handleSummary = ()=>{
    setinitialState({...initialState, currentPage: 5})
  }

  return (  
    <> 
       <main className="min-h-screen bg-Light-blue md:flex md:justify-center md:items-center md:px-[3rem] md:py-[5rem]">   
         <div className="min-h-screen w-full md:h-[100%] md:flex md:max-w-[900px] md:p-5 md:bg-white md:rounded-xl">
          <aside 
              className="
                pt-10
                pb-[5rem]
                text-White 
                gap-3
                bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover
                md:bg-[url('./assets/images/bg-sidebar-desktop.svg')]
                md:h-auto md:grow md:w-[40%] md:px-5 md:rounded-md
                lg:w-[20%]
              ">
              <div className="flex justify-center gap-3 sm:gap-5 md:flex md:flex-col">
                <NavButton step={1} stepTitle={"Personal info"} isActiveClass={initialState.currentPage == 1? 'bg-Light-blue': ''}/>
                <NavButton step={2} stepTitle={"Select Plan"} isActiveClass={initialState.currentPage == 2? 'bg-Light-blue': ''}/>
                <NavButton step={3} stepTitle={"Add-ons"} isActiveClass={initialState.currentPage == 3? 'bg-Light-blue': ''}/>
                <NavButton step={4} stepTitle={"Summary"} isActiveClass={initialState.currentPage == 4 || initialState.currentPage == 5? 'bg-Light-blue': ''}/>
              </div>
          </aside>
          <section className="md:h-auto md:grow md:bg-white md:w-[60%] lg:px-[3rem] md:flex md:flex-col">
            {
              initialState.currentPage===1
              ? <PersonalInfo formData={personalInfoState} setFormData={setpersonalInfoState} /> 
                : initialState.currentPage===2
                ? <SelectPlan planData={planState} setPlanData={setplanState} initialState={initialState} setinitialState={setinitialState}/> 
                  : initialState.currentPage===3
                  ? <AddOns addOnsData={addOns} setaddOnsData={setaddOns} planType={planState.planType} initialState={initialState} setinitialState={setinitialState}/> 
                    : initialState.currentPage === 4
                    ?<Summary planState={planState} setplanState={setplanState} addOns={addOns} setaddOns={setaddOns} initialState={initialState} setinitialState={setinitialState}/> 
                      : <Success />  

            }
            {
              initialState.currentPage <= 4 && 
              <footer className={`
                flex 
                w-full 
                mt-10
                px-5 py-2 
                ${initialState.currentPage==1 || initialState.currentPage == 3? ' absolute bottom-0' :''}
                ${initialState.currentPage==1? ' justify-end' : ' justify-between'} 
                md:relative
                md:px-10
              `}>
                  {initialState.currentPage > 1 && <button onClick={handleBack} className="hover:text-Marine-blue hover:font-[700]">Go Back</button>}
                  {
                    initialState.currentPage === 1
                    ?<button onClick={handleSubmit} className="bg-Marine-blue text-white py-2 px-4 font-[600] rounded-md">Next Step</button>
                    :initialState.currentPage === 2
                      ?<button onClick={handlePlan} className="bg-Marine-blue text-white py-2 px-4 font-[600] rounded-md">Next Step</button>
                      :initialState.currentPage === 3
                        ?<button onClick={handleAdd} className="bg-Marine-blue text-white py-2 px-4 font-[600] rounded-md">Next Step</button>
                        :<button onClick={handleSummary} className="bg-Marine-blue text-white py-2 px-4 font-[600] rounded-md">Confirm</button>
                  }
                </footer>
            }
          </section>
         </div>
        </main>
        <div className={`absolute top-0 bg-black/30 w-full h-full ${initialState.errorModal? ' flex justify-center items-center': ' hidden'}`}>
          <div className="flex flex-col justify-center items-center gap-5 rounded-md p-8 bg-Light-blue">
            <p className="text-2xl text-Purplish-blue font-[700]">
              {
                initialState.personalInfo? modalErrorMessage[0]
                :initialState.planSelected? modalErrorMessage[1]
                :initialState.addOnSelected && modalErrorMessage[2]
              }
            </p>
            <div>
              {
                initialState.personalInfo? <button className="px-10 py-2 bg-Marine-blue text-White font-[700] rounded-md" onClick={()=>{handleErrorModal(1)}}>OK</button>
                :initialState.planSelected? <button className="px-10 py-2 bg-Marine-blue text-White font-[700] rounded-md" onClick={()=>{handleErrorModal(2)}}>OK</button>
                :initialState.addOnSelected && <button className="px-10 py-2 bg-Marine-blue text-White font-[700] rounded-md" onClick={()=>{handleErrorModal(3)}}>OK</button>
              }
              
              
            </div>
          </div>
        </div>
    </>
  )
}

export default App
