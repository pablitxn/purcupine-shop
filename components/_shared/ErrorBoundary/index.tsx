// React
import React, { FC } from "react";
// Types
import { ErrorBoundaryProps } from "/.types";
// Styles
import "./styles.scss";

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ error }) => {
  return error && (
    <div className="error">
      <img className="error__image" src="" alt="sorry, this page is broken" />
      <span className="error__message" >Sorry this page is broken</span>
    </div>
  )
}

export default ErrorBoundary;
