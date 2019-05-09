import React from "react";
import "./App.css";
import StorySearch from "./containers/StorySearch";
import SearchResultBox from "./containers/SearchResultBox";

function App(props) {
  return (
    <>
      <main>
        <h1>Hacker News Search</h1>
        <StorySearch />
        <SearchResultBox />
      </main>
    </>
  );
}

export default App;
