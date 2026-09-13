const TechnologyCard = ({ technology }) => {
  return (
    <div className="tech-card">

      <img 
        src={technology.icon}
        alt={technology.name}
      />

      <span className="badge">
        {technology.badge}
      </span>

      <h3>{technology.name}</h3>

      <p>
        {technology.description}
      </p>

      <div className="info">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
      </div>

      <div className="rating">
        ⭐ {technology.rating}
      </div>

      <button>
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard;