import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

// this URL fails on purpose, used to display error state
const FAILING_API_REQUEST_URL = 'https://api.npms.io/v2/search/suggestions?';

function App() {
  // stores query from search bar text input
  const [queryString, setQueryString] = useState('');
  // stores results from API request
  const [results, setResults] = useState([]);
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // error state
  const [error, setError] = useState(null);
  // use this variable to switch to 'failing' api state
  const [shouldFail, setShouldFail] = useState(false);

  const searchQuery = () => {
    // reset loading and error states when new search starts
    setIsLoading(true);
    setError(null);
    // API request here 
    // https://api.npms.io/v2/search/suggestions?q=${queryString}
    const fetchURL = shouldFail ? FAILING_API_REQUEST_URL : `https://api.npms.io/v2/search/suggestions?q=${queryString}`
    fetch(fetchURL)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json()})
        .then((result) => {
          setResults(result);
        })
        .catch((error) => {
          console.error('error: ', error);
          setError(error);
        })
        .finally(() => setIsLoading(false));
  };

  return (
    <>
      <h1>npm search page</h1>
      <label className='api-checkbox'>
        <input  checked={shouldFail} onChange={()=> setShouldFail(!shouldFail)} type="checkbox" />
        check this box to have API call fail on purpose
      </label>
      <SearchBar searchQuery={searchQuery} setQueryString={setQueryString}/>
      {isLoading && <div className="loading-message">Loading...</div>}
      {error && <div className="error-message">An error has occured. Please try again.</div>}
      {!error && !isLoading && results && <SearchResults results={results} />}
    </>
  )
}

export default App
