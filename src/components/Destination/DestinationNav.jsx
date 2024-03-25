import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import TabButton from "../TabButton/TabButton"; // Import the TabButton component
import clickSound from "/sound/moonNav.mp3";

function DestinationNav({ onDestinationChange }) {
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
    onDestinationChange(index);
    playSound();
  };

  return (
    <div
      ref={tabListRef}
      className="destination-navbar flex underline-indicators tab-list"
      role="tablist"
      aria-label="destination list"
    >
      <TabButton
        label="Moon"
        isActive={currentTabIndex === 0}
        onClick={() => handleTabClick(0)}
        buttonClasses="bg-none ff-sans-cond text-accent uppercase letter-spacing-2"
      />
      <TabButton
        label="Mars"
        isActive={currentTabIndex === 1}
        onClick={() => handleTabClick(1)}
        buttonClasses="bg-none ff-sans-cond text-accent uppercase letter-spacing-2"
      />
      <TabButton
        label="Europa"
        isActive={currentTabIndex === 2}
        onClick={() => handleTabClick(2)}
        buttonClasses="bg-none ff-sans-cond text-accent uppercase letter-spacing-2"
      />
      <TabButton
        label="Titan"
        isActive={currentTabIndex === 3}
        onClick={() => handleTabClick(3)}
        buttonClasses="bg-none ff-sans-cond text-accent uppercase letter-spacing-2"
      />
    </div>
  );
}

DestinationNav.propTypes = {
  onDestinationChange: PropTypes.func.isRequired,
};

export default DestinationNav;
