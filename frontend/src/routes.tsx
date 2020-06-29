import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main'));
const SavedRepositories = lazy(() => import('./pages/SavedRepositories'));

const Routes = () => {
    return (
        <Suspense fallback={<div className="loader"></div>}>
            <Switch>
                <Route component={Main} path="/" exact/>
                <Route component={SavedRepositories} path="/saves"/>
            </Switch>
        </Suspense>
    );
}

export default Routes;
