import { useEffect, useState } from "react";

export const useWindowWidthAndHeight = () => {
  // 1- Get the size of window
  let windowInnerSize = [window.innerWidth, window.innerHeight];

  // 2- Define the state variable windowSize and pass windowInnerSize as its initial value
  let [windowSize, setWidowSize] = useState(windowInnerSize);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidowSize([window.innerWidth, window.innerHeight]);
    };
    /* 3- add a 'resize' eventListener to window
       so whenever the size of window changes
    the state variable windowSize changes and the component  re-renders */
    window.addEventListener("resize", changeWindowSize);

    // 4- cleanup the 'resize' eventListener
    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);
  // 5- return the window size
  return windowSize;
};

export const useClickOutside = (insideRefs, isVisible, onClose) => {
  useEffect(() => {
    const handleWindowClick = (event) => {
      const someRefContainTarget = insideRefs
        .filter((ref) => ref.current)
        .some((ref) => ref.current.contains(event.target));

      if (someRefContainTarget) {
        return;
      }

      if (!isVisible) {
        return;
      }

      if (onClose) {
        onClose();
      }
    };

    if (isVisible) {
      window.addEventListener("click", handleWindowClick);
    }

    return () => {
      if (isVisible) {
        window.removeEventListener("click", handleWindowClick);
      }
    };
  }, [isVisible, onClose]);
};
