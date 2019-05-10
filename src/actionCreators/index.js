import HnApi from "../utils/HnApi";

export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

function searchFailure(query) {
  return {
    type: SEARCH_FAILURE,
    lastQuery: query,
  };
}

function searchSuccess(results) {
  return {
    type: SEARCH_SUCCESS,
    results: results,
  };
}

function searchRequest(query) {
  return {
    type: SEARCH_REQUEST,
    query: query,
  };
}

export function search(query) {
  return (dispatch) => {
    dispatch(searchRequest(query));
    return HnApi
      .search(query)
      .then(
        response => dispatch(searchSuccess(response.data.hits)),
        error => dispatch(searchFailure(query))
      );
  };
}