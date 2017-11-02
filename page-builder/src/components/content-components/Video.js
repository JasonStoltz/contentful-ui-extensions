import React from "react";
import { connect } from "redux-zero/react";

export default (({ component }) => {
  return (
    <div>
      <label>Url</label><input type="text"/>
    </div>
  );
});
