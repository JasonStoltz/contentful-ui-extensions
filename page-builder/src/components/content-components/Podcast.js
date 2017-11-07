import React from "react";
import { connect } from "redux-zero/react";

const mapToProps = ({ podcasts }) => ({ podcasts });

export default connect(mapToProps)(({ component, podcasts }) => {
  return (
    <div className="cf-form-field">
      <select type="text" className="cf-form-input">
        {podcasts.map(podcast => {
          return <option key={podcast.sys.id}>{podcast.fields.name['en-US']}</option>;
        })}
      </select>
    </div>
  );
});

export const initialState = {
  type: "Podcast",
  id: ""
};
