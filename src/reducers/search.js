import {
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS
} from "../actionCreators";
import {loadStatus} from "../components/LoadingPlaceholder";

const initialState = {
  lastQuery: "",
  results: [],
  status: loadStatus.NONE,
};

function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FAILURE:
      return Object.assign({}, state, {
        lastQuery: action.lastQuery,
        status: loadStatus.FAILURE,
      });
    
    case SEARCH_REQUEST:
      return Object.assign({}, state, {
        status: loadStatus.LOADING,
      });

    case SEARCH_SUCCESS:
      return Object.assign({}, state, {
        status: loadStatus.SUCCESS,
        results: action.results,
      });
    
    default:
      return state;
  }
}

export default search;