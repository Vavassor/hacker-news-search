import {RECIEVE_STORIES, REQUEST_STORIES} from "../actions";

function search(state = {isFetching: false, results: []}, action) {
  switch (action.type) {
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECIEVE_STORIES:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.results,
      });
    
    default:
      return state;
  }
}

export default search;