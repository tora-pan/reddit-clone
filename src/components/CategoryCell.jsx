import React from "react";

const CategoryCell = ({ name, icon, favorited, id }) => {
  const handleClick = () => {
    console.log(`ID of the clicked element is : ${id}`);
  };
  return (
    <div
      className={`p-2 mt-1 ${favorited ? "bg-red-500" : "bg-blue-500"}`}
      onClick={handleClick}
    >
      <h1>{name}</h1>
      <p>{icon}</p>
    </div>
  );
};

export default CategoryCell;
