import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";


const TechnologySection = ({
  addToStack,
  stack
}) => {


  return (
    <section id="technologies">

      <h2>
        Explore Technologies
      </h2>


      <div className="technology-layout">


        <div className="technology-grid">

          {
            technologies.map((technology) => (

              <TechnologyCard

                key={technology.id}

                technology={technology}

                addToStack={addToStack}

                stack={stack}

              />

            ))
          }


        </div>


      </div>


    </section>
  );
};


export default TechnologySection;