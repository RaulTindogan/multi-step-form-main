import { useState } from "react";
import NavButton from "./components/NavButton";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Success from "./components/Success";

function App() {

  const pages = [
   <PersonalInfo/>,
   <SelectPlan />,
   <AddOns />,
   <Summary />
  ]

  const [initialState, setinitialState] = useState({
    currentPage: 1,
  })

  const [planState, setplanState] = useState({})

  const [addOns, setaddOns] = useState([])

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
    const {name, email, phone, nameError, emailError, phoneError} = personalInfoState
    if(name == '') {
      setpersonalInfoState({...personalInfoState, nameError: true})
    } else {
      setpersonalInfoState({...personalInfoState, nameError: false})
    } 
    
    if (email == '') {
      setpersonalInfoState({...personalInfoState, emialError: 1})
    } else {
      setpersonalInfoState({...personalInfoState, emailError: 0})
    }
    
    if (phone == '') {
      setpersonalInfoState({...personalInfoState, phoneError: 1})
    } else {
      setpersonalInfoState({...personalInfoState, phoneError: 0})
    }
    
    if (nameError == true || emailError > 0 || phoneError > 0){
      return
    } else {
      setinitialState({...initialState, currentPage: 2})
    }
    
    // console.log(personalInfoState.phone.length)
  }

  const handlePlan = ()=>{
    
    if(Object.keys(planState).length === 0) {
      alert('hello')
    } else {
      setinitialState({...initialState, currentPage: 3})
    }
  }

  const handleAdd = ()=>{
    if(Object.keys(addOns).length === 0) {
      alert('hello')
    } else {
      setinitialState({...initialState, currentPage: 4})
    }
  }
  
  const handleSummary = ()=>{
    setinitialState({...initialState, currentPage: 5})
  }

  

  return (  
    <> 
       <main className="h-screen">
          <aside 
            className="
              flex 
              pt-5 pb-[5rem]
              justify-center 
              items-center 
              text-White 
              gap-3
              bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover
            ">
            <NavButton step={1} stepTitle={"Personal info"}/>
            <NavButton step={2} stepTitle={"Select Plan"}/>
            <NavButton step={3} stepTitle={"Add-ons"}/>
            <NavButton step={4} stepTitle={"Summary"}/>
          </aside>
          <section className="bg-White h-[100%] relative">
            {
              initialState.currentPage===1
              ? <PersonalInfo formData={personalInfoState} setFormData={setpersonalInfoState} /> 
                : initialState.currentPage===2
                ? <SelectPlan planData={planState} setPlanData={setplanState}/> 
                  : initialState.currentPage===3
                  ? <AddOns addOnsData={addOns} setaddOnsData={setaddOns} planType={planState.planType}/> 
                    : initialState.currentPage === 4
                    ?<Summary planState={planState} setplanState={setplanState} addOns={addOns} setaddOns={setaddOns} initialState={initialState} setinitialState={setinitialState}/> 
                      : <Success />
                    

            }
            {
              initialState.currentPage <= 4 && 
              <footer className={`flex w-full px-5 py-2 absolute bottom-0${initialState.currentPage==1? ' justify-end' : ' justify-between'} `}>
                  {initialState.currentPage > 1 && <button onClick={handleBack}>Go Back</button>}
                  {
                    initialState.currentPage === 1
                    ?<button onClick={handleSubmit}>Next Step</button>
                    :initialState.currentPage === 2
                      ?<button onClick={handlePlan}>Next Step</button>
                      :initialState.currentPage === 3
                        ?<button onClick={handleAdd}>Next Step</button>
                        :<button onClick={handleSummary}>Confirm</button>
                  }
                </footer>
            }
          </section>
        </main>
    </>
  )
}

export default App
