import React from "react";

const loadStatus = {
  NONE: 0,
  LOADING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

function LoadingPlaceholder(props) {
  switch (props.status) {
    default:
      return (
        <></>
      );

    case loadStatus.FAILURE:
      return (
        <p>
          Connection failed.
          <button
            type="button"
            onClick={props.handleRetry}
          >
            Retry
          </button>
        </p>
      );

    case loadStatus.LOADING:
      return (
        <progress></progress>
      );

    case loadStatus.SUCCESS:
      return props.children;
  }
}

export {loadStatus};
export default LoadingPlaceholder;