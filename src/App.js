import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import history from './history'

// Views
// Auth
import NotFoundPage from './views/utilities/NotFoundPage.jsx'

import './App.scss'

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <div>
                        <Route component={NotFoundPage} />
                    </div>
                </Switch>

            </Router>
        )
    }
}

export default App
