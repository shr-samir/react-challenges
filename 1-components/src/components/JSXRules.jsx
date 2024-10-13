import React from "react";

const JSXRules = () => {
  return (
    <div>
      <h1>JSX Rules</h1>
      <p className="jsx-rules">
        <ul>
          <li>1. jsx must return a single parent element.</li>
          <li>2. jsx elements must be properly closed.</li>
          <li>
            3. jsx attributes are written using camelCase (eg. className instead
            of class).
          </li>
        </ul>
      </p>
    </div>
  );
};

export default JSXRules;
