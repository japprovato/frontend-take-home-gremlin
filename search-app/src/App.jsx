import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  const [queryString, setQueryString] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchQuery = () => {
    setIsLoading(true);
    setError(null);
    // API request here 
    // https://api.npms.io/v2/search/suggestions?q=${queryString}
    fetch(`https://api.npms.io/v2/search/suggestions?`)
        .then((res) => res.json())
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
      <SearchBar searchQuery={searchQuery} setQueryString={setQueryString}/>
      {isLoading && <div>Loading...</div>}
      {error && <div>An error has occured. Please try again.</div>}
      {results && <SearchResults results={results} />}
    </>
  )
}

export default App
