import React from "react";
import Result from "./Result";

function ResultList(props) {
  const renderResults = () => {
    if (props.results && props.results.length) {
      return props.results.map(result => (
        <Result key={result.objectID} result={result} />
      ));
    } else {
      return (
        <div className="alert-generic">No results found.</div>
      );
    }
  };

  return (
    <div className="result-list">
      {renderResults(props)}
    </div>
  );
}

export default ResultList;