import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main'));
// const CreatePoint = lazy(() => import('./pages/CreatePoint'));

const Routes = () => {
    return (
        <Suspense fallback={<div className="loader"></div>}>
            <Switch>
                <Route component={Main} path="/" exact/>
                {/* <Route component={CreatePoint} path="/create-point"/> */}
            </Switch>
        </Suspense>
    );
}

export default Routes;