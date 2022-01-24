import React, { useState } from "react";
import "./game-search.css";

export const GameSearch = ({ onChange }) => {
  return (
    <div>
      <div className="form">
        <form className="search__form">
          <input
            type="text"
            placeholder="Search game..."
            className="search__input"
            onChange={onChange}
          ></input>
        </form>
      </div>
    </div>
  );
};
