import { useEffect, useState } from "react";

import {
  ToastContainer,
  toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechnologyArea from "./components/TechnologyArea";

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

      })

      .catch(() => {

        toast.error(
          "Failed to load technologies"
        );

        setLoading(false);

      });

  }, []);




  const addToStack = (technology) => {


    const exists = stack.some(
      item => item.id === technology.id
    );


    if (exists) {

      toast.warning(
        `${technology.name} already added`
      );

      return;

    }


    setStack(prev => [
      ...prev,
      technology
    ]);


    toast.success(
      `${technology.name} added`
    );

  };




  const removeFromStack = (id) => {


    const removed = stack.find(
      item => item.id === id
    );


    setStack(prev =>
      prev.filter(
        item => item.id !== id
      )
    );


    if (removed) {

      toast.info(
        `${removed.name} removed`
      );

    }

  };




  const removeAll = () => {

    setStack([]);

    toast.info(
      "Stack cleared"
    );

  };



  return (

    <>

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />


      <Navbar />


      <Hero />



      {
        loading

        ?

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


    </>

  );

}


export default App;