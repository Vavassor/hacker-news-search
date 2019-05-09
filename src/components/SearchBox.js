import React, {useState} from "react";

function SearchBox(props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(query);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.currentTarget.value)}
        aria-label="search text"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;