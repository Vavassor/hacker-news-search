import React from "react";
import "./App.css";
import {search} from "./actions";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import LoadingPlaceholder from "./components/LoadingPlaceholder";
import {connect} from "react-redux";

function App(props) {
  const {dispatch, lastQuery, results, searchStatus} = props;
  
  const handleSearch = (query) => {
    dispatch(search(query));
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

function mapStateToProps(state) {
  const {search} = state;
  const {lastQuery, status, results} = search;

  return {
    lastQuery,
    results,
    searchStatus: status,
  };
}

export default connect(mapStateToProps)(App);
