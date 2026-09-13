function Hero() {

  return (

    <section className="hero">


      <div className="hero-content">


        <h1>

          Build Your Ideal

          <br></br>

          <span>
            Developer Stack
          </span>

        </h1>



        <p>

          Explore the latest technologies, tools,
          and frameworks developers use to build
          modern applications.

        </p>



        <div className="hero-buttons">


          <button
            type="button"
            className="primary"
          >

            Explore Technologies

          </button>



          <button
            type="button"
            className="secondary"
          >

            Learn More

          </button>


        </div>


      </div>




      <div className="hero-image">


        <img

          src="/assets/banner-stack.png"

          alt="Developer technology stack"

        />


      </div>


    </section>

  );

}


export default Hero;