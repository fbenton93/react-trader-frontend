import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = ({ setSearchTerm, searchValue }) => {
    return (
      <div id="search-bar">
        <Input
          placeholder="Text Search"
          value={searchValue}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    )
}

export default SearchBar;
