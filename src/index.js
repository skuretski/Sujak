import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ScrollToTop from './components/Navigation/ScrollToTop/ScrollToTop';

const configuredStore = createStore(
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={configuredStore}>
        <BrowserRouter>
            <ScrollToTop>
            <App />
            </ScrollToTop>
        </BrowserRouter> 
    </Provider>
    , document.querySelector('#htmlContainer')
);

