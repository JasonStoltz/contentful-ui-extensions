import React from "react";
import { connect } from "redux-zero/react";
import "./Component.css";
import * as ContentComponents from "./content-components";

export default ({ component }) => {
  const Component = ContentComponents[component.type];
  return (
    <section className="content-component">
      <h3 className="content-component-head">{component.type}</h3>
      <div className="content-component-body" />
      <Component component={component} />
    </section>
  );
};
