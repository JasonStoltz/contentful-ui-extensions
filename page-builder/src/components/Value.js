import React from "react";
import { connect } from "redux-zero/react";

const mapToProps = ({ components }) => ({ components });

export default connect(mapToProps)(({ components = [] }) => {
  return (
    <div>
      <ul>{JSON.stringify(components, null, "  ")}</ul>
    </div>
  );
});
