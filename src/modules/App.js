import React from 'react';
import '../css/App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import {Provider} from 'react-redux';
import HomePage from "./HomePage";
import {createStore} from 'redux'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case '':
            return {};
        default:
            return state;
    }
};

const store = createStore(reducer);


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div style={{height: '100%'}}>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/home" component={HomePage}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
