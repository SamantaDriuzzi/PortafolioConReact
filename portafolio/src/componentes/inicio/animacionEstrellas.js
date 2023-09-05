import React from "react";
import "../../scss/componentes/inicio/animacionEstrellas.scss";

const AnimacionEstrellas = () => {
  const createStars = () => {
    const stars = [];
    const shootingStarDelay = Math.random() * 30 + 5;

    for (let i = 0; i < 40; i++) {
      const style = {
        top: `${Math.random() * 100}%`,
        right: `${Math.random() * 30}%`,
        animationDelay: `${Math.random() * 8}s`,
      };

      stars.push(<div key={i} className="star" style={style} />);
    }

    for (let i = 0; i < 3; i++) {
      const shootingStarStyle = {
        top: `${Math.random() * 100}%`,
        right: `${Math.random() * 30}%`,
        animationDelay: `${shootingStarDelay}s`,
      };

      stars.push(
        <div
          key="shooting-star"
          className="star-fugaz"
          style={shootingStarStyle}
        />
      );
    }
    return stars;
  };

  return <div className="star-container">{createStars()}</div>;
};

export default AnimacionEstrellas;
