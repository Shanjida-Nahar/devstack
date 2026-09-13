import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {

  return (
    <section id="technologies">

      <h2>
        Explore Technologies
      </h2>

      <div className="technology-grid">

        {
          technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))
        }

      </div>

    </section>
  );
};

export default TechnologySection;