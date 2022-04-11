import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { PopularPage } from "./PopularPage";
import { BattlePage } from "./BattlePage";

export const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Nav></Nav>

                <div className="content">
                    <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route exact path="/popular">
                                <PopularPage />
                            </Route>
                            <Route exact path="/battle">
                                <BattlePage />
                            </Route>
                            <Route
                                render={() => {
                                    return (
                                        <div className="not-found">
                                            <h1>Page is not found</h1>
                                        </div>
                                    );
                                }}
                            ></Route>
                        </Switch>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Router>
    );
};
