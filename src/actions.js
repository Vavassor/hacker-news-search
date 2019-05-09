import HnApi from "./utils/HnApi";

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
  };
}

export function search(query) {
  return (dispatch) => {
    dispatch(requestStories(query));
    return HnApi
      .search(query)
      .then(
        response => response.data,
        (error) => {
          console.error("What a lame outcome!");
        }
      )
      .then((data) => {
        dispatch(recieveStories(data.hits))
      });
  };
}