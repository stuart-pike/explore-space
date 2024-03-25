// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import JsonDataContext from "./JsonDataContext";
import jsonData from "../../assets/data.json"; // Import JSON data directly

const JsonDataProvider = ({ children }) => {
  return (
    <JsonDataContext.Provider value={jsonData}>
      {children}
    </JsonDataContext.Provider>
  );
};

// Define PropTypes for the provider component
JsonDataProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export default JsonDataProvider;
