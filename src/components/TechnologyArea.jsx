import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";


function TechnologyArea({

    technologies,

    stack,

    addToStack,

    removeFromStack,

    removeAll

}) {


    return (

        <section className="technology-section">


            <h2 className="section-title">

                Explore The

                <span>
                    Technologies
                </span>

            </h2>



            <p className="technology-subtitle">

                Discover the tools and technologies
                powering modern development.

            </p>




            <div className="technology-area">



                <div className="technology-grid">


                    {
                        technologies.map(
                            technology => (


                                <TechnologyCard

                                    key={technology.id}

                                    technology={technology}

                                    stack={stack}

                                    addToStack={addToStack}


                                />


                            )

                        )

                    }


                </div>




                <StackSidebar


                    stack={stack}

                    removeFromStack={removeFromStack}

                    removeAll={removeAll}


                />


            </div>


        </section>


    );


}


export default TechnologyArea;