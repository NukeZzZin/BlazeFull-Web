import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../routes/routes";

export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ height: "100%", overflowX: "hidden" }}>
                    <Router>
                        <Switch>
                            { routes.map(route => <Route key={ route.path } { ...route }/>) }
                        </Switch>
                    </Router>
                </div>
            </React.Fragment>
        );
    }
}