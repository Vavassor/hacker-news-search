import HnApi from "../utils/HnApi";

export const FAIL_SEARCH = "FAIL_SEARCH";

function failSearch(query) {
  return {
    type: FAIL_SEARCH,
    lastQuery: query,
  };
}

export const RECIEVE_STORIES = "RECIEVE_STORIES";

function recieveStories(results) {
  return {
    type: RECIEVE_STORIES,
    results: results,
  };
}

export const REQUEST_STORIES = "REQUEST_STORIES";

function requestStories(query) {
  return {
    type: REQUEST_STORIES,
    query: query,
  };
}

export function search(query) {
  return (dispatch) => {
    dispatch(requestStories(query));
    return HnApi
      .search(query)
      .then(
        response => dispatch(recieveStories(response.data.hits)),
        error => dispatch(failSearch(query))
      );
  };
}