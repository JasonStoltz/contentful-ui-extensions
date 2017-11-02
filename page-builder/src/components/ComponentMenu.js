import React from "react";
import { connect } from "redux-zero/react";
import { actions } from "../actions";
import "./ComponentMenu.css";
import * as RichText from "./content-components/RichText";
import * as Quote from "./content-components/Quote";
import * as Video from "./content-components/Video";
import * as Podcast from "./content-components/Podcast";

const mapToProps = () => ({});

export default connect(mapToProps, actions)(({ components, addComponent }) => (
  <div className="component-menu">
    <button
      className="cf-btn-primary component-menu-item"
      onClick={() => addComponent(RichText.initialState)}
    >
      Rich Text
    </button>
    <button
      className="cf-btn-primary component-menu-item"
      onClick={() => addComponent(Video.initialState)}
    >
      Video
    </button>
    <button
      className="cf-btn-primary component-menu-item"
      onClick={() => addComponent(Quote.initialState)}
    >
      Quote
    </button>
    <button
      className="cf-btn-primary component-menu-item"
      onClick={() => addComponent(Podcast.initialState)}
    >
      Podcast
    </button>
  </div>
));
