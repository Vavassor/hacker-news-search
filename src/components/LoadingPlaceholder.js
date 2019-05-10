import React from "react";

export const loadStatus = {
  NONE: "NONE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
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

export default LoadingPlaceholder;