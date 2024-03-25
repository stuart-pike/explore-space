import PropTypes from "prop-types";

function TabButton({ label, isActive, onClick, buttonClasses }) {
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? "0" : "-1"}
    >
      {label}
    </button>
  );
}

TabButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonClasses: PropTypes.string, // Additional classes for the button
};

export default TabButton;
