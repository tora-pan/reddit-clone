import React from "react";

const AvatarButton = () => {
  return (
    <div className="flex flex-row">
      <img
        src="https://picsum.photos/200/200"
        alt="avatar"
        className="w-8 h-8 mr-2 rounded-full bg-red-500"
      />
      <div className="text-sm text-left">
        <h1>Username</h1>
        <p>Karma Points</p>
      </div>
    </div>
  );
};

export default AvatarButton;
