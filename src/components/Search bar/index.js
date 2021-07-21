import { useState } from "react";

const SearchBar = (handleSearch) => {
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    query !== "" && handleSearch(query);
  };
  return (
    <input
      type="text"
      placeholder="Search Songs"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
};

export default SearchBar;
