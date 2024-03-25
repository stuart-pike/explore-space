import { useContext, useState } from "react";
import DestinationNav from "./DestinationNav";
import JsonDataContext from "../Context/JsonDataContext";
import { motion } from "framer-motion";

function Destination() {
  const jsonData = useContext(JsonDataContext);
  const [currentDestination, setCurrentDestination] = useState(
    jsonData.destinations[0]
  );

  const handleDestinationChange = (destinationIndex) => {
    setCurrentDestination(jsonData.destinations[destinationIndex]);
  };

  return (
    <motion.main
      className="grid-container grid-container--destination flow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>
        Pick Your Destination
      </h1>
      <picture className="destination-image">
        <source srcSet={currentDestination.images.webp} type="image/webp" />
        <img
          src={currentDestination.images.png}
          alt={currentDestination.name}
        />
      </picture>

      <DestinationNav onDestinationChange={handleDestinationChange} />

      <article className="destination-info">
        <h2 className="fs-900 uppercase ff-serif">{currentDestination.name}</h2>
        <p>{currentDestination.description}</p>
        <div className="destination-meta flex">
          <div>
            <h3 className="fs-200 text-accent uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{currentDestination.distance}</p>
          </div>
          <div>
            <h3 className="fs-200 text-accent uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{currentDestination.travel}</p>
          </div>
        </div>
      </article>
    </motion.main>
  );
}

export default Destination;
