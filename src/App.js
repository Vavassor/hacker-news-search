import React, {useState} from "react";
import "./App.css";
import HnApi from "./utils/HnApi";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import LoadingPlaceholder, {loadStatus} from "./components/LoadingPlaceholder";

function App() {
  const [results, setResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState(loadStatus.NONE);
  const [lastQuery, setLastQuery] = useState("");
  
  const handleSearch = (query) => {
    setLastQuery(query);
    setSearchStatus(loadStatus.LOADING);

    HnApi
      .search(query)
      .then((response) => {
        setSearchStatus(loadStatus.SUCCESS);
        setResults(response.data.hits);
      })
      .catch((error) => {
        setSearchStatus(loadStatus.FAILURE);
      });
  };

  return (
    <>
      <main>
        <h1>Hacker News Search</h1>
        <SearchBox handleSearch={handleSearch} />
        <LoadingPlaceholder
          status={searchStatus}
          handleRetry={event => handleSearch(lastQuery)}
        >
          <SearchResults results={results} />
        </LoadingPlaceholder>
      </main>
    </>
  );
}

export default App;
