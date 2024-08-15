import { useEffect, useState } from 'react';
import SearchResult from './SearchResult';

import './searchResults.css';

function SearchResults( {results} ) {
  console.log('serach results: ', results);
  if (!results || results.length === 0) return null;
  return (
    <div className='search-results-container'>
      <h1>results</h1>
      {results.map((result) => <SearchResult result={result} />)}
    </div>
  )
}

export default SearchResults
