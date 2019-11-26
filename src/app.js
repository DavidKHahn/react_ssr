import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/homePage';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" render={props=> (
                    <Home {...props} />
                )}/>
            </Switch>
        )
    }
}

export default App;