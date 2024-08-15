import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [queryString, setQueryString] = useState('');
  const [results, setResults] = useState([]);

  console.log('resutls: ' , results);

  const searchQuery = () => {
    console.log('searchQuery...: ', queryString)
    // API request here 
    // https://api.npms.io/v2/search/suggestions?q=${queryString}
    fetch(`https://api.npms.io/v2/search/suggestions?q=${queryString}`)
        .then((res) => res.json())
        .then((result) => {
          setResults(result);
        })
        .catch((error) => {
          console.log('error: ', error);
        });
  };

  return (
    <>
      <SearchBar searchQuery={searchQuery} setQueryString={setQueryString}/>
      {results && <SearchResults results={results} />}
    </>
  )
}

export default App
