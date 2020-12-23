import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import routes from './config/routes'
//样式
import './app.css'
export default class App extends Component {
    render() {
        return (
            <Router>
            <div>
                {routes.map(item=><Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>)}
            </div>
            </Router>
        )
    }
}
