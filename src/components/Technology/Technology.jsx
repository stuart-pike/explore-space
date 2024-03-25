import { useContext, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query"; // Import useMediaQuery hook
import { motion } from "framer-motion";
import TechNav from "./TechNav";
import JsonDataContext from "../Context/JsonDataContext";

function Destination() {
  const isDesktop = useMediaQuery("(min-width: 45rem)");
  const jsonData = useContext(JsonDataContext);
  const [currentTechnology, setCurrentTechnology] = useState(
    jsonData.technology[0]
  );

  const handleTechnologyChange = (technologyIndex) => {
    setCurrentTechnology(jsonData.technology[technologyIndex]);
  };

  const imageSource = isDesktop
    ? currentTechnology.images.portrait
    : currentTechnology.images.landscape;

  return (
    <motion.div
      className="grid-container grid-container--technology flow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <h1 className="numbered-title technology-title ">
        <span aria-hidden="true">03</span>
        Space launch 101
      </h1>
      <picture className="technology-image">
        <img src={imageSource} alt={currentTechnology.name} />
      </picture>
      <TechNav onTechnologyChange={handleTechnologyChange} />
      <article className="technology-info">
        <h3 className="fs-300 uppercase ff-serif ln-height">The Technology</h3>
        <h2 className="fs-600 uppercase ff-serif">{currentTechnology.name}</h2>
        <p>{currentTechnology.description}</p>
      </article>
    </motion.div>
  );
}

export default Destination;
