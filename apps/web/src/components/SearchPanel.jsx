import React from "react";
import "./searchpanel.css";
export const SearchPanel = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-[28px] mb-2 font-[600]">Search Liked Music</h2>
        <form className="h-full">
          <input
            className="w-full h-[50px] search-panel__input placeholder:text-left pl-2 outline-none"
            type="search"
            name="search"
            placeholder="Type here..."
            id="search"
          />
        </form>
      </div>
    </>
  );
};
