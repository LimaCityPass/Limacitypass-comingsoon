import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App style={{height: '100%'}} />, document.getElementById('root'));
registerServiceWorker();
