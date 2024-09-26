import React from "react";

function SearchBox(props) {
  return (
    <div className="justify-end items-end">
      <input
        type="text"
        value={props.searchValue}
        placeholder="Serach"
        className="border-2 rounded-full px-3 ring-cyan-500"
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
