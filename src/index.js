import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();