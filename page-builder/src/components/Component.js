import React from "react";
import { connect } from "redux-zero/react";
import { actions } from "../actions";
import "./Component.css";
import * as ContentComponents from "./content-components";

const mapToProps = () => ({});

export default connect(
  mapToProps,
  actions
)(({ component, index, removeComponent }) => {
  const Component = ContentComponents[component.type];
  return (
    <section className="content-component">
      <div className="content-component-head">
        {component.type}
        <span
          onClick={() => removeComponent(index)}
          className="content-component-head-remove"
        >
          <svg
            width="14"
            height="14"
            viewBox="-1 -1 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor">
              <path d="M4.846 7l-3.77-3.77L0 2.155 2.154 0 3.23 1.077 7 4.847l3.77-3.77L11.845 0 14 2.154 12.923 3.23 9.153 7l3.77 3.77L14 11.845 11.846 14l-1.077-1.077L7 9.153l-3.77 3.77L2.155 14 0 11.846l1.077-1.077z" />
            </g>
          </svg>
        </span>
      </div>
      <div className="content-component-body" />
      <Component component={component} />
    </section>
  );
});
