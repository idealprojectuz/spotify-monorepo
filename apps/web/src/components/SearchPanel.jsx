import React from "react";
import "./searchpanel.css";
import { useDebounce } from "@uidotdev/usehooks";
export const SearchPanel = ({ getMusic }) => {
  const [searchText, setSearchText] = React.useState("");

  const debouncedSearchTerm = useDebounce(searchText, 500);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    if (debouncedSearchTerm) {
      getMusic(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    <>
      <h2 className="text-[22px] mt-[30px] mb-[10px] font-[600]">
        Search Liked Music
      </h2>
      <form className="h-full mb-[20px]">
        <input
          className="w-full h-[40px] search-panel__input placeholder:text-left pl-2 outline-none"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          name="search"
          value={searchText}
          placeholder="Type here..."
          id="search"
        />
      </form>
    </>
  );
};
