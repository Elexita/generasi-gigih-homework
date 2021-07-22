import Button from "../Button";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
    const [query, setQuery] = useState("");
    const onSubmit = (e) => {
      e.preventDefault();
      query !== " " && handleSearch(query);
    };
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            name="song"
            placeholder="Search Song"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" aria-label="search song">
            Search
          </Button>
        </form>
      </div>
    );
  };
  
  export default SearchBar;