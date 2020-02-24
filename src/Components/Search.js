import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = (props) => {
  return (
    <div>
      <Input type="text" placeholder="Search" onChange={(e) => props.handleSearch(e)} value={props.searchTerm} />
    </div>
  )
}

export default Search;
