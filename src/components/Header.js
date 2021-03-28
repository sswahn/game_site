import GamesButton from './Header/GamesButton'
import DropdownMenu from './Header/DropdownMenu'
import SearchBar from './Header/SearchBar'
import ModalMenu from './Header/ModalMenu'
import { config } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="header">
      <h1>
        <a href={config.url.home} rel="home">
          <img src="" alt="logo" />
          <FontAwesomeIcon icon={faBars} />
        </a>
      </h1>
      <nav>
        <div className="dropdown-container">
          <div className="dropdown">
            <GamesButton />
            <DropdownMenu />
          </div>
        </div>
        <SearchBar />
        <ModalMenu />
      </nav>
    </header>
  )
}

// following code should detect click outside element to close element etc.
import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              alert("You clicked outside of me!");
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