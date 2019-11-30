import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Menina from './pages/Menina';
import Menino from './pages/Menino';
import Casamento from './pages/Casamento';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/festa-meninas" component={Menina} />
                <Route path="/festa-meninos" component={Menino} />
                <Route path="/festa-casamento" component={Casamento} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;