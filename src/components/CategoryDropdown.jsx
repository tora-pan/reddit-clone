import React from "react";
import CategoryCell from "./CategoryCell";

const CategoryDropdown = ({ isActive }) => {
  const listOfCategories = [
    { name: "category name 1", icon: "icon1", favorited: false, id: 1 },
    { name: "category name 2", icon: "icon2", favorited: true, id: 2 },
    { name: "category name 3", icon: "icon3", favorited: false, id: 3 },
    { name: "category name 1", icon: "icon1", favorited: false, id: 4 },
    { name: "category name 2", icon: "icon2", favorited: true, id: 5 },
    { name: "category name 3", icon: "icon3", favorited: false, id: 6 },
  ];
  return (
    <div className="absolute flex flex-col px-4 py-4 justify-centertop-9 left-0 right-0 w-100 max-h-96 bg-white outline-gray-200 roudned-md drop-shadow-sm overflow-y-scroll">
      <input
        type="text"
        autoFocus
        placeholder="Filter"
        className={`border rounded-sm h-100 w-100 p-1 focus:outline-none hover:border-blue-500 ${
          isActive ? "border-blue-500" : ""
        }`}
      />
      {listOfCategories.map((category) => {
        return (
          <CategoryCell
            name={category.name}
            icon={category.icon}
            favorited={category.favorited}
            id={category.id}
            key={category.id}
          />
        );
      })}
    </div>
  );
};

export default CategoryDropdown;
