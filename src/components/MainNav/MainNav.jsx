import { NavLink } from "react-router-dom";
import { useState } from "react";
import clickSound from "/sound/mainNav.mp3"; // Import the MP3 sound file

function MainNav() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavToggle((prev) => !prev);
  };
  // Function to play the click sound
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <>
      <header className="primary-header flex">
        {/* the ::before is here */}
        <img src="/logos/logo.svg" alt="space tourism logo" className="logo" />
        <button
          onClick={toggleMobileNav}
          className="mobile-nav-toggle"
          aria-controls="primary-navigtion"
          aria-expanded={mobileNavToggle ? "true" : "false"}
          style={{
            backgroundImage: mobileNavToggle
              ? "url(/logos/icon-close.svg)"
              : "url(/logos/icon-hamburger.svg)",
          }}
        >
          <span className="sr-only" aria-expanded="false">
            Menu
          </span>
        </button>
        <nav
          id="prime-navigation"
          data-visible={mobileNavToggle ? "true" : "false"} // Toggle data-visible attribute
          className="primary-navigation flex underline-indicators"
        >
          <NavLink
            to=" "
            className="ff-sans-cond text-neutral uppercase letter-spacing-2"
            onClick={playClickSound}
          >
            <span aria-hidden="true">01</span>Home
          </NavLink>

          <NavLink
            to="destination"
            className="ff-sans-cond text-neutral uppercase letter-spacing-2"
            onClick={playClickSound}
          >
            <span aria-hidden="true">02</span>Destination
          </NavLink>

          <NavLink
            to="crew"
            className="ff-sans-cond text-neutral uppercase letter-spacing-2"
            onClick={playClickSound}
          >
            <span aria-hidden="true">03</span>Crew
          </NavLink>

          <NavLink
            to="technology"
            className="ff-sans-cond text-neutral uppercase letter-spacing-2"
            onClick={playClickSound}
          >
            <span aria-hidden="true">04</span>Technology
          </NavLink>
        </nav>
        {/* the ::after is here */}
      </header>
    </>
  );
}

export default MainNav;
