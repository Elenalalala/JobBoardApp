import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { toggleDropDown } from "../Data/jobSlice";

//Hook that alerts clicks outside of the passed ref
function useOutsideAlerter(ref) {
  const isVisible = useSelector(
    (state) => state.jobCollection.dropDownIsVisible
  );
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      //if the our reference isn't what we are clicking
      if (ref.current && !ref.current.contains(event.target)) {
        //make drop down menu disappear
        if (isVisible) {
          dispatch(toggleDropDown(false));
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
