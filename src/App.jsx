import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyArea from "./components/TechnologyArea";
import Footer from "./components/Footer";


function App() {


  const [technologies, setTechnologies] = useState([]);

  const [stack, setStack] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    fetch("/technologies.json")
      .then(res => res.json())
      .then(data => {

        setTechnologies(data);

        setLoading(false);

      });


  }, []);




  const addToStack = (technology)=>{


    const exists = stack.find(
      item => item.id === technology.id
    );


    if(exists){

      toast.warning(
        `${technology.name} already added`
      );

      return;

    }



    setStack([
      ...stack,
      technology
    ]);


    toast.success(
      `${technology.name} added`
    );


  };




  const removeFromStack = (id)=>{


    const removed = stack.find(
      item=>item.id===id
    );


    setStack(
      stack.filter(
        item=>item.id!==id
      )
    );


    toast.info(
      `${removed.name} removed`
    );


  };




  const removeAll = ()=>{

    setStack([]);

    toast.info(
      "Stack cleared"
    );

  };





  return (

    <>

      <Navbar />

      <Hero />


      {
        loading ?

        <h2 className="loading">
          Loading technologies...
        </h2>

        :

        <TechnologyArea

          technologies={technologies}

          stack={stack}

          addToStack={addToStack}

          removeFromStack={removeFromStack}

          removeAll={removeAll}

        />

      }



      <Footer />


      <ToastContainer />

    </>

  );

}


export default App;