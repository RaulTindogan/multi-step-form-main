import { useState } from "react";
import NavButton from "./components/NavButton";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

function App() {
  const [currentPage, setcurrentPage] = useState(1)

  const pages = [
   <PersonalInfo/>,
   <SelectPlan />,
   <AddOns />,
   <Summary />
  ]

  const [personalInfoState,setpersonalInfoState] = useState({
    name: '',
    email: '',
    phone: '',
    nameError: false,
    emailError: 0,
    phoneError: false
  }) 

  const handleSubmit = ()=>{
    
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
              currentPage===1? <PersonalInfo formData={personalInfoState} setFormData={setpersonalInfoState} /> : currentPage===2? <SelectPlan /> : currentPage===3? <AddOns />: <Summary />
            }
            <footer className="flex justify-between w-full px-5 py-2 absolute bottom-0">
              <button>Go Back</button>
              <button>Next Step</button>
            </footer>
          </section>
        </main>
    </>
  )
}

export default App
