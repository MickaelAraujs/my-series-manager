import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Series from './components/Series';
import Details from './components/Details';
import Results from './components/Results';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/series' component={Series} />
                <Route exact path='/series/:name' render={props => <Details
                                                                      status={props.location.state.status}
                                                                      name={props.match.params.name} />}
                                                                    />
                <Route exact path='/results/:name' render={props => <Results name={props.match.params.name} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;