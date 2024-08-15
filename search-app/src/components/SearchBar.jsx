import { useEffect, useState } from 'react';

import './searchBar.css';

function SearchBar({setQueryString, searchQuery}) {
  const [value, setValue] = useState(''); 

  return (
    <div className="search-bar-container">
      <input className="search-bar" value={value} placeholder="Search packages" onChange={(e) => { setQueryString(e.target.value); setValue(e.target.value)}} type="text"></input>
      <button className="search-button" onClick={searchQuery}>Search</button>
    </div>
  )
}

export default SearchBar
