import React from "react";

export default ({ component }) => {
  return (
    <div className="cf-form-field">
      <select type="text" className="cf-form-input">
        <option>Podcast 1</option>
        <option>Podcast 2</option>
      </select>
    </div>
  );
};

export const initialState = {
  type: "Podcast",
  id: ""
};
