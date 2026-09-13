import TechnologySection from "./TechnologySection";
import StackSidebar from "./StackSidebar";


const TechnologyArea = ({
  technologies,
  stack,
  addToStack,
  removeFromStack,
  removeAll
}) => {


return (

<section className="technology-area">


<TechnologySection

technologies={technologies}

stack={stack}

addToStack={addToStack}

/>


<StackSidebar

stack={stack}

removeFromStack={removeFromStack}

removeAll={removeAll}

/>


</section>

);


};


export default TechnologyArea;