import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    console.log("handle");
    setIsActive(true);
  };
  const handleBlur = () => {
    console.log("blur");
    setIsActive(false);
  };
  return (
    <div
      className={`relative m-2 border rounded-md h-100 w-80 p-1.5 hover:border-blue-500 ${
        isActive ? "border-blue-500" : ""
      }`}
    >
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        placeholder="Search Reddit"
        className="ml-2 focus:outline-0"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SearchBar;
