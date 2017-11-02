import React from "react";
import { connect } from "redux-zero/react";
import { actions } from "../actions";
import "./ComponentMenu.css";

const mapToProps = () => ({});

export default connect(mapToProps, actions)(({ components, addComponent }) => (
  <ul className="component-menu">
    <li
      className="component-menu-item"
      onClick={() => addComponent("RichText")}
    >
      <button>Rich Text</button>
    </li>
    <li className="component-menu-item" onClick={() => addComponent("Video")}>
      <button>Video</button>
    </li>
    <li className="component-menu-item" onClick={() => addComponent("Quote")}>
      <button>Quote</button>
    </li>
  </ul>
));
