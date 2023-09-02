import React from "react";
import "tachyons";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='p2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        placeholder='search robots'
        type='search'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
