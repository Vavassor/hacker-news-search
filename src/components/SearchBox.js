import React, {useState} from "react";

function SearchBox(props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(query);
  };

  return (
    <div className="search-box">
      <form
        role="search"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="field-text field-inline"
          type="text"
          value={query}
          onChange={event => setQuery(event.currentTarget.value)}
          aria-label="search text"
        />

        <button
          className="button-primary"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;