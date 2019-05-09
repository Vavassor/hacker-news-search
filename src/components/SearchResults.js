import React from "react";

function SearchResults(props) {
  const renderResult = (result) => {
    return (
      <p key={result.objectID}>
        <a href={result.url}>{result.title}</a>
      </p>
    );
  };

  const renderResults = (props) => {
    if (props.results && props.results.length) {
      return props.results.map(result => renderResult(result));
    } else {
      return (
        <p>No results found.</p>
      );
    }
  };

  return (
    <>
      {renderResults(props)}
    </>
  );
}

export default SearchResults;