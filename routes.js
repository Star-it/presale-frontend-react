import React from 'react';
import { IndexRoute, Route } from 'react-router';

import IcoContainer from './containers/IcoContainer.js';
import PreSale from './components/PreSale.js';

export default (store) => {
    return (
        <Route path="/presale" component={IcoContainer}>
            <IndexRoute component={PreSale}/>
        </Route>
    );
};
