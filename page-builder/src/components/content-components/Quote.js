import React from "react";

export default ({ component }) => {
  return (
    <div className="cf-form-field">
      <label>Text</label>
      <input type="text" className="cf-form-input" />
    </div>
  );
};

export const initialState = {
  type: "Quote",
  text: ""
};
