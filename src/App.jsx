import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import StackSidebar from "./components/StackSidebar";


function App() {


  const [stack,setStack] = useState([]);



  const addToStack = (technology) => {

    setStack([
      ...stack,
      technology
    ]);

  };



  const removeFromStack = (id)=>{

    setStack(
      stack.filter(item=>item.id !== id)
    );

  };



  return (

    <>

      <Navbar />

      <Hero />


      <TechnologySection
        stack={stack}
        addToStack={addToStack}
      />


      <StackSidebar
        stack={stack}
        removeFromStack={removeFromStack}
      />


    </>

  );

}


export default App;