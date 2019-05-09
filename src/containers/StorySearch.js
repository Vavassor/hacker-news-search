import React from "react";
import {connect} from "react-redux";
import {search} from "../actions";
import SearchBox from "../components/SearchBox";

function StorySearch(props) {
  const {dispatch} = props;

  return (
    <SearchBox handleSearch={query => dispatch(search(query))} />
  );
}

export default connect()(StorySearch);