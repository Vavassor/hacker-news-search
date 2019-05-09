import React from "react";
import "./App.css";
import {search} from "./actions";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import LoadingPlaceholder from "./components/LoadingPlaceholder";
import {connect} from "react-redux";

function App(props) {
  const {dispatch, searchStatus, results} = props;
  
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
          handleRetry={event => handleSearch("")}
        >
          <SearchResults results={results} />
        </LoadingPlaceholder>
      </main>
    </>
  );
}

function mapStateToProps(state) {
  const {search} = state;
  const {status, results} = search;

  return {
    searchStatus: status,
    results,
  };
}

export default connect(mapStateToProps)(App);
