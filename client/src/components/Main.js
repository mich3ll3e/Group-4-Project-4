import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Login from "./login/login"

const Main=()=> {
    return (
        <Switch>
            <Route exact path="/" component={Login}></Route>
        </Switch>
    )
}
export default Main;