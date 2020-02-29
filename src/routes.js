import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Series from './components/Series';
import Results from './components/Results';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/series' component={Series} />
                <Route exact path='/results' component={Results} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;