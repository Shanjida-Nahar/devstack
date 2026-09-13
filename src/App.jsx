import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import StackSidebar from "./components/StackSidebar";


function App() {


  const [technologies, setTechnologies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [stack, setStack] = useState([]);



  useEffect(() => {

    fetch("/technologies.json")
      .then(res => res.json())
      .then(data => {

        setTechnologies(data);

        setLoading(false);

      });

  }, []);




  const addToStack = (technology) => {


    const exists = stack.find(
      item => item.id === technology.id
    );


    if(exists){

      toast.warning(
        `${technology.name} is already added`
      );

      return;

    }


    setStack([
      ...stack,
      technology
    ]);


    toast.success(
      `${technology.name} added to stack`
    );

  };




  const removeFromStack = (id)=>{


    const removed = stack.find(
      item => item.id === id
    );


    setStack(
      stack.filter(
        item => item.id !== id
      )
    );


    toast.info(
      `${removed.name} removed`
    );


  };




  const removeAll = ()=>{


    setStack([]);


    toast.info(
      "All technologies removed"
    );


  };



  return (

    <>

      <Navbar />

      <Hero />


      {
        loading ? (

          <h2 className="loading">
            Loading technologies...
          </h2>

        ) : (

          <TechnologySection

            technologies={technologies}

            stack={stack}

            addToStack={addToStack}

          />

        )
      }



      <StackSidebar

        stack={stack}

        removeFromStack={removeFromStack}

        removeAll={removeAll}

      />



      <ToastContainer />

    </>

  );

}


export default App;