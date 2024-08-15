import { useEffect, useState } from 'react';

import './searchResult.css';

function SearchResult( {result} ) {
  console.log('serach : ', result);
  if (!result) return null;
  return (
    <div className='search-result-container'>
      <div className='search-result-name'><a href={result.package.links.npm}>{result.package.name}</a></div>
      <div>{result.package.description}</div>
    </div>
  )
}

export default SearchResult
