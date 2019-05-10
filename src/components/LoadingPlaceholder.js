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
        <div className="alert-error">
          <span className="alert-message">Connection failed.</span>
          <button
            className="button-secondary"
            type="button"
            onClick={props.handleRetry}
          >
            Retry
          </button>
        </div>
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