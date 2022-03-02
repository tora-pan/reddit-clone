import { faAngleDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AvatarButton from "./AvatarButton";
import CategoryDropdown from "./CategoryDropdown";

const CategoryButton = ({ category }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="relative mx-2">
      <button
        className={`flex xl:w-[268px] w-40 py-1.5 rounded-sm outline-1  outline-gray-200 hover:outline justify-between items-center ${
          isActive ? "outline" : ""
        }`}
        onClick={handleClick}
      >
        <div>
          {category === "category" ? (
            <>
              <FontAwesomeIcon icon={faHome} size="lg" className="pl-2" />
              <span className="ml-2 font-semibold">Home</span>
            </>
          ) : (
            <AvatarButton />
          )}
        </div>
        <FontAwesomeIcon icon={faAngleDown} className="mr-2 mt-1" />
      </button>
      {isActive && <CategoryDropdown isActive={isActive} />}
    </div>
  );
};

export default CategoryButton;
