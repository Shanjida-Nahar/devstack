import TechnologyArea from "./TechnologyArea";


const TechnologySection = ({
  technologies,
  stack,
  addToStack,
  removeFromStack,
  removeAll
}) => {


  return (

    <section className="technology-section">


      <h2 className="section-title">

        Explore the <span>Technologies</span>

      </h2>



      <p className="technology-subtitle">

        Pick one technology per category to build your ideal stack

      </p>



      <TechnologyArea

        technologies={technologies}

        stack={stack}

        addToStack={addToStack}

        removeFromStack={removeFromStack}

        removeAll={removeAll}

      />


    </section>

  );

};


export default TechnologySection;