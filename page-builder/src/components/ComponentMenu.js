import React from 'react';
import {connect} from 'redux-zero/react';

import {actions} from "../actions";

const mapToProps = () => ({});

export default connect(mapToProps, actions)(({ components, addComponent }) => (
    <div>
      <ul>
        <li onClick={() => addComponent('Rich Text')}><button>Rich Text</button></li>
        <li onClick={() => addComponent('Video')}><button>Video</button></li>
        <li onClick={() => addComponent('Quote')}><button>Quote</button></li>
      </ul>
    </div>
));