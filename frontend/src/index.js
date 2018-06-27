import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './modules/App';
import Login from './modules/security/Login';

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" component={App}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')
);

