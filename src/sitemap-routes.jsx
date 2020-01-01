import React from 'react';
import { Switch, Route } from 'react-router';

// Setting up routes for SiteMap
export default (
    <Switch>
            <Route path='/home' />
            <Route path='/about' />
            <Route path='/media' />
            <Route path='/login' />
            <Route path='/dashboard' />
            <Route path='/blogs' />
            <Route path='/products/halo' />
            <Route path='/products/ray' />
            <Route path='/products/pentagram' />
            <Route path='/products/concrete' />
            <Route path='/contact' />
            <Route path='/careers' />
            <Route /> // No-match case
    </Switch>
);
