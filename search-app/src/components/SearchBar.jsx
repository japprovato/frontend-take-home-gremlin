import { useEffect, useState } from 'react';

function SearchBar({setQueryString, searchQuery}) {
  const [value, setValue] = useState(''); 

  return (
    <>
    <input value={value} onChange={(e) => { setQueryString(e.target.value); setValue(e.target.value)}} type="text"></input>
    <button onClick={searchQuery}>Search</button>
    </>
  )
}

export default SearchBar
