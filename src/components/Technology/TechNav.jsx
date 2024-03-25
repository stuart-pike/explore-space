import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import clickSound from "/sound/techNav.mp3";
// import TabButton from "../TabButton/TabButton"; Import the TabButton component

function TechNav({ onTechnologyChange }) {
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
    onTechnologyChange(index);
    playSound();
  };

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label="technology list"
      className="number-indicators technology-navbar flex"
    >
      <button
        onClick={() => handleTabClick(0)}
        className="ff-serif fs-600"
        aria-selected={currentTabIndex === 0}
      >
        <span className="sr-only ff-serif fs-600">Slide title</span>1
      </button>
      <button
        onClick={() => handleTabClick(1)}
        className="ff-serif fs-600"
        aria-selected={currentTabIndex === 1}
      >
        <span className="sr-only ff-serif fs-600">Slide title</span>2
      </button>
      <button
        onClick={() => handleTabClick(2)}
        className="ff-serif fs-600"
        aria-selected={currentTabIndex === 2}
      >
        <span className="sr-only">Slide title</span>3
      </button>
    </div>
  );
}

TechNav.propTypes = {
  onTechnologyChange: PropTypes.func.isRequired, // Validate children prop
};

export default TechNav;
