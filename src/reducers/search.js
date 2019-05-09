import {FAIL_SEARCH, RECIEVE_STORIES, REQUEST_STORIES} from "../actions";
import {loadStatus} from "../components/LoadingPlaceholder";

function search(state = {status: loadStatus.NONE, results: []}, action) {
  switch (action.type) {
    case FAIL_SEARCH:
      return Object.assign({}, state, {
        status: loadStatus.FAILURE,
      });
    
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        status: loadStatus.LOADING,
      });

    case RECIEVE_STORIES:
      return Object.assign({}, state, {
        status: loadStatus.SUCCESS,
        results: action.results,
      });
    
    default:
      return state;
  }
}

export default search;