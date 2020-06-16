import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Users from './Pages/Users';


const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
    </Switch>
)
export default Routes;