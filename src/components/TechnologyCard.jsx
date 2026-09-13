function TechnologyCard({

    technology,

    stack,

    addToStack


}) {



    const alreadyAdded = stack.some(

        item => item.id === technology.id

    );




    return (

        <div

            className={`tech-card ${
                alreadyAdded ? "selected-card" : ""
            }`}

        >




            <div className="card-top">


                <img

                    className="tech-icon"

                    src={technology.icon}

                    alt={technology.name}

                />



                <span
                className="badge"
                style={{
                  backgroundColor: technology.categoryColor + "20",
                  color: technology.categoryColor
                }}
                >
                {technology.category}
                </span>


            </div>





            <h3>

                {technology.name}

            </h3>




            <p className="description">

                {technology.description}

            </p>





            <div className="card-info">


              <span className="category">

                  {technology.category}

              </span>



              <span>

                  {technology.difficulty}

              </span>



              <span className="rating">

                  ⭐ {technology.rating}

              </span>


            </div>





            <button

                className={`stack-button ${
                    alreadyAdded
                    ? "added"
                    : ""
                }`}


                disabled={alreadyAdded}


                onClick={() =>

                    addToStack(technology)

                }


            >

                {

                    alreadyAdded

                    ?

                    "Added"

                    :

                    "Add to Stack"

                }


            </button>



        </div>


    );


}


export default TechnologyCard;