import React from "react";
import moment from "moment";

function Result(props) {
  const {result} = props;
  const authorUrl = `https://news.ycombinator.com/user?id=${encodeURIComponent(result.author)}`;
  const itemUrl = `https://news.ycombinator.com/item?id=${encodeURIComponent(result.objectID)}`;
  
  return (
    <div className="result" key={result.objectID}>
      <div className="result-title">
        <a href={result.url}>{result.title}</a>
      </div>
      <div className="result-metadata">
        <div className="result-metadata-item">
          By <a href={authorUrl}>{result.author}</a>
        </div>
        <div className="result-metadata-item">
          <a href={itemUrl}>{moment(result.created_at).fromNow()}</a>
        </div>
        <div className="result-metadata-item">
          <a href={itemUrl}>{result.num_comments} comments</a>
        </div>
      </div>
    </div>
  );
}

export default Result;