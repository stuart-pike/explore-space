import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import JsonDataProvider from "./components/Context/JsonDataProvider";
import MainNav from "./components/MainNav/MainNav";

function App() {
  const location = useLocation();

  // Define a list of background images for each route and device
  const backgroundImages = {
    "/": {
      desktop: "/home/background-home-desktop.jpg",
      tablet: "/home/background-home-tablet.jpg",
      mobile: "/home/background-home-mobile.jpg",
    },
    "/destination": {
      desktop: "/destination/background-destination-desktop.jpg",
      tablet: "/destination/background-destination-tablet.jpg",
      mobile: "/destination/background-destination-mobile.jpg",
    },
    "/crew": {
      desktop: "/crew/background-crew-desktop.jpg",
      tablet: "/crew/background-crew-tablet.jpg",
      mobile: "/crew/background-crew-mobile.jpg",
    },
    "/technology": {
      desktop: "/technology/background-technology-desktop.jpg",
      tablet: "/technology/background-technology-tablet.jpg",
      mobile: "/technology/background-technology-mobile.jpg",
    },
    // Add more routes and corresponding image URLs as needed
  };

  // Get the background image URL for the current route and device
  const backgroundImage = backgroundImages[location.pathname] || {};
  const { mobile, tablet, desktop } = backgroundImage;

  // Use useMediaQuery hook to determine screen size
  const isTablet = useMediaQuery("(min-width: 35rem)");
  const isDesktop = useMediaQuery("(min-width: 45rem)");

  // Determine which background image to use based on screen size
  const backgroundUrl = isDesktop ? desktop : isTablet ? tablet : mobile;

  // Preload the background images
  useEffect(() => {
    const preloadImages = [desktop, tablet, mobile];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  });

  return (
    <JsonDataProvider location={location} key={location.pathname}>
      <div
        className="layout-container"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          "@media (minWidth: 35rem)": {
            backgroundPositionX: "center",
            backgroundPositionY: "center",
          },
          "@media (minWidth: 45rem)": {
            gridtemplateRows: "min-content 1fr",
            backgroundPositionX: "left",
            backgroundPositionY: "center",
          },
        }}
      >
        <Link className="skip-to-content">Skip to content</Link>
        <MainNav />
        <Outlet />
      </div>
    </JsonDataProvider>
  );
}

export default App;
