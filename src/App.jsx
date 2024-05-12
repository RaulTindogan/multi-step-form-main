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
    } else if(phone.length < 14 ) {
      setpersonalInfoState(prevState => ({ ...prevState, phoneError: 2 }));
    } else {
      setpersonalInfoState(prevState => ({ ...prevState, phoneError: 0 }));
    }
    
    if (personalInfoState.nameError == true || personalInfoState.nameError == null || personalInfoState.emailError == null || personalInfoState.emailError > 0 || personalInfoState.phoneError > 0 || personalInfoState.phoneError == null){
      return 
    } else {
      setinitialState({...initialState, currentPage: 2})
    }
    
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
