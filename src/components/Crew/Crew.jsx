import { useContext, useState } from "react";
import { motion } from "framer-motion";

import CrewNav from "./crewNav";
import JsonDataContext from "../Context/JsonDataContext";

function Crew() {
  const jsonData = useContext(JsonDataContext);
  const [currentCrew, setCurrentCrew] = useState(jsonData.crew[0]);

  const handleCrewChange = (crewIndex) => {
    setCurrentCrew(jsonData.crew[crewIndex]);
  };

  return (
    <motion.main
      className="grid-container grid-container--crew flow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>
        Meet Your Crew
      </h1>

      <article className="crew-bio">
        <div>
          <h2 className="fs-500 uppercase ff-serif ln-height">
            {currentCrew.role}
          </h2>
          <h3 className="fs-600 uppercase ff-serif">{currentCrew.name}</h3>
        </div>

        <p>{currentCrew.bio}</p>
      </article>
      <CrewNav onCrewChange={handleCrewChange} />
      <picture className="crew-image">
        <source srcSet={currentCrew.images.webp} type="image/webp" />
        <img src={currentCrew.images.png} alt={currentCrew.name} />
      </picture>
    </motion.main>
  );
}

export default Crew;
