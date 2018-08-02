import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Inputs from './Inputs.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Inputs />, document.getElementById('root'));
registerServiceWorker();
