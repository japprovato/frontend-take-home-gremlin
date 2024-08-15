import { useEffect, useState } from 'react';
import SearchResult from './SearchResult';

import './searchResults.css';

function SearchResults( {results} ) {
  if (!results || results.length === 0) return null;
  return (
    <div className='search-results-container'>
      <h2>results</h2>
      {results.map((result) => <SearchResult result={result} />)}
    </div>
  )
}

export default SearchResults
