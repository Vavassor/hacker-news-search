import React from "react";
import Result from "./Result";

function ResultList(props) {
  const renderResults = () => {
    if (props.results && props.results.length) {
      return props.results.map(result => (
        <Result result={result} />
      ));
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

export default ResultList;