import TechnologyCard from "./TechnologyCard";


const TechnologySection = ({
  technologies,
  stack,
  addToStack
}) => {


return (

<div>

<h2 className="section-title">
Explore Technologies
</h2>


<div className="technology-grid">


{
technologies.map(technology=>(

<TechnologyCard

key={technology.id}

technology={technology}

stack={stack}

addToStack={addToStack}

/>

))
}


</div>


</div>

);


};


export default TechnologySection;