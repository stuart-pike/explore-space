import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clickSound from "/sound/explore.mp3"; // Import the MP3 sound file

function Home() {
  const audio = new Audio(clickSound);

  const playSound = () => {
    audio.play();
  };

  return (
    <>
      <motion.main
        className="grid-container grid-container--home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to <br />
            <span className="d-block fs-900 ff-serif uppercase text-neutral">
              Space
            </span>
          </h1>
          <p>
            Let&rsquo;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&rsquo;ll give you a truly out of
            this world experience! Explore
          </p>
        </div>
        <div>
          <div>
            <Link
              to={"destination"}
              className="large-button uppercase bg-neutral ff-serif text-dark "
              onClick={playSound}
            >
              Explore
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
}

export default Home;
