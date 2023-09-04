import { useState } from "react";
import illustration from "./assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import List from "./List";
import Success from "./Success";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setError(null);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email === ""
      ? setError("Value cannot be empty")
      : !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ? setError("Valid email required")
      : setIsSuccess(true);
  };

  const reset = () => {
    setEmail("");
    setIsSuccess(false);
    setError(null);
  };

  return (
    <>
      {isSuccess ? (
        <Success reset={reset} email={email} />
      ) : (
        <main>
          <article className="content">
            <h1>Stay updated!</h1>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>

            <List content={"Product discovery and building what matters"} />
            <List content={"Measuring to ensure updates are a success"} />
            <List content={"And much more!"} />
            <form onSubmit={handleSubmit}>
              <div className="input-text">
                <label>Email address</label>
                {error && <p className="error">{error}</p>}
              </div>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="email@company.com"
                onChange={handleEmailChange}
              />
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
          </article>
          <picture>
            <source media="(max-width: 800px)" srcSet={illustrationMobile} />
            <img className="signUp" src={illustration} alt="sign-up" />
          </picture>
        </main>
      )}
    </>
  );
}

export default App;
