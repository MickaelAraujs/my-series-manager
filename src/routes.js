import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Series from './components/Series';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/series' component={Series} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;