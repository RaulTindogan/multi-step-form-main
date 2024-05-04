import { useState } from "react";
import NavButton from "./components/NavButton";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

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

  const [personalInfoState,setpersonalInfoState] = useState({
    name: '',
    email: '',
    phone: '',
    nameError: false,
    emailError: 0,
    phoneError: false
  }) 

  const handleSubmit = ()=>{
    // e.preventDefault()
    console.log('Form submitted:', personalInfoState);
    console.log('hello')
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
              initialState.currentPage===1? <PersonalInfo formData={personalInfoState} setFormData={setpersonalInfoState} /> : initialState.currentPage===2? <SelectPlan /> : initialState.currentPage===3? <AddOns />: <Summary />
            }
            <footer className="flex justify-between w-full px-5 py-2 absolute bottom-0">
              <button>Go Back</button>
              {
                initialState.currentPage === 1? <button onClick={handleSubmit}>Next Step</button> : initialState.currentPage === 2? <button>Next</button> : <button>Hello</button>
              }
            </footer>
          </section>
        </main>
    </>
  )
}

export default App
