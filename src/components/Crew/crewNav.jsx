import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import clickSound from "/sound/crewNav.mp3";

function CrewNav({ onCrewChange }) {
  const tabListRef = useRef(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const audio = new Audio(clickSound);

  const playSound = () => {
    audio.play();
  };

  useEffect(() => {
    const tabListCurrent = tabListRef.current;
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        setCurrentTabIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : tabListCurrent.children.length - 1
        );
      } else if (event.keyCode === 39) {
        setCurrentTabIndex((prevIndex) =>
          prevIndex < tabListCurrent.children.length - 1 ? prevIndex + 1 : 0
        );
      } else if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        const selectedTab = tabListCurrent.children[currentTabIndex];
        selectedTab.click();
      }
    };

    tabListCurrent.addEventListener("keydown", handleKeyDown);
    tabListCurrent.children[currentTabIndex].focus();

    return () => {
      tabListCurrent.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentTabIndex]);

  const handleTabClick = (index) => {
    setCurrentTabIndex(index);
    onCrewChange(index);
    playSound();
  };

  return (
    <>
      <div
        ref={tabListRef}
        className="dot-indicators crew-navbar flex"
        aria-label="crew list"
      >
        <button
          onClick={() => handleTabClick(0)}
          className={`${currentTabIndex === 0 ? "active" : ""}`}
          aria-controls="douglas hurly"
          aria-selected={currentTabIndex === 0}
          tabIndex={currentTabIndex === 0 ? "0" : "-1"}
        >
          <span className="sr-only">Commander, Douglas Hurley</span>
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`${currentTabIndex === 1 ? "active" : ""}`}
          aria-controls="mark shuttleworth"
          aria-selected={currentTabIndex === 1}
          tabIndex={currentTabIndex === 1 ? "0" : "-1"}
        >
          <span className="sr-only">Mission Specialist, Mark Shuttleworth</span>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`${currentTabIndex === 2 ? "active" : ""}`}
          aria-controls="victor glover"
          aria-selected={currentTabIndex === 2}
          tabIndex={currentTabIndex === 2 ? "0" : "-1"}
        >
          <span className="sr-only">Pilot, Victor Glover</span>
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`${currentTabIndex === 3 ? "active" : ""}`}
          aria-controls="anousheh ansari"
          aria-selected={currentTabIndex === 3}
          tabIndex={currentTabIndex === 3 ? "0" : "-1"}
        >
          <span className="sr-only">Flight Engineer, Anousheh Ansari</span>
        </button>
      </div>
    </>
  );
}

CrewNav.propTypes = {
  onCrewChange: PropTypes.func.isRequired, // Validate children prop
};

export default CrewNav;
