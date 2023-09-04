import React from "react";
import iconSuccess from "./assets/images/icon-success.svg";

export default function Success({ reset, email }) {
  return (
    <div className="container">
      <div>
        <img className="success-icon" src={iconSuccess} alt="success" />
        <h1>Thanks for subscribing!</h1>
        <p className="success-content">
          A confirmation email has been sent to {email}. Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
      <button className="reset" onClick={reset}>
        Dismiss message
      </button>
    </div>
  );
}
