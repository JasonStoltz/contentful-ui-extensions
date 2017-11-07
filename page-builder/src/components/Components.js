import React from "react";
import { connect } from "redux-zero/react";
import Component from "./Component";

const mapToProps = ({ components, podcasts }) => ({ components, podcasts });

export default connect(mapToProps)(({ components, podcasts }) => {
  return (
    <div>
      {components.map((component, i) => {
        return <Component component={component} index={i} key={i} />;
      })}
    </div>
  );
});
