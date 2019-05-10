import React from "react";
import "./App.css";
import StorySearch from "./containers/StorySearch";
import SearchResultBox from "./containers/SearchResultBox";

function App(props) {
  return (
    <>
      <header>
        <h1 className="title">Hacker News Search</h1>
      </header>

      <main>
        <div className="main-column">
          <StorySearch />
          <SearchResultBox />
        </div>
      </main>

      <footer>
        <div className="footer-column">
          <img className="social-icon" src="github-mark.svg" alt="" />
          <a className="social-link" href="https://github.com/Vavassor/Hacker-News-Search">Github</a>
          <div className="credit">
            Powered by the <a href="https://hn.algolia.com/api">HN Search API by Algolia</a>.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
