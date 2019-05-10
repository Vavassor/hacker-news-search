import React from "react";
import {connect} from "react-redux";
import {search} from "../actionCreators";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import ResultList from "../components/ResultList";

function SearchResultBox(props) {
  const {dispatch, lastQuery, searchStatus, results} = props;

  return (
    <LoadingPlaceholder
      status={searchStatus}
      handleRetry={event => dispatch(search(lastQuery))}
    >
      <ResultList results={results} />
    </LoadingPlaceholder>
  );
}

function mapStateToProps(state) {
  const {search} = state;
  const {lastQuery, results, status} = search;
  return {
    lastQuery,
    results,
    searchStatus: status,
  };
}

export default connect(mapStateToProps)(SearchResultBox);