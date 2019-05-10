import React, {useEffect} from "react";
import {connect} from "react-redux";
import {search} from "../actionCreators";
import SearchBox from "../components/SearchBox";

function StorySearch(props) {
  const {dispatch} = props;

  // Load the initial page with results by searching for nothing.
  useEffect(() => {
    dispatch(search(""));
  }, [dispatch]);

  return (
    <SearchBox handleSearch={query => dispatch(search(query))} />
  );
}

export default connect()(StorySearch);