import React from "react";
import {Switch, Route} from "react-router-dom";

import Layout from "./components/layout";
import HomePage from './containers/homePage';
import MyPage from './containers/myPage';
import ListPage from './containers/listPage';
import AboutUs from './containers/aboutUs';
import ContentPage from './containers/contentPage';
import ErrorPage from './containers/errorPage';

function Router() {
    return(
        <Switch>
            <Layout>
                <Route
                    exact
                    path="/"
                    render={props => (
                        <HomePage {...props} />
                    )}
                />
                <Route
                    exact
                    path="/my-page"
                    render={props => (
                        <MyPage {...props} />
                    )}
                />
                <Route
                    exact
                    path="/list"
                    render={props => (
                        <ListPage {...props} />
                    )}
                />
                <Route
                    exact
                    path="/about-us"
                    render={props => (
                        <AboutUs {...props} />
                    )}
                />
                <Route
                    exact
                    path="/content-page/:id"
                    render={props => (
                        <ContentPage {...props} />
                    )}
                />
                <Route
                    exact
                    path="/error"
                    render={props => (
                        <ErrorPage {...props} />
                    )}
                />
            </Layout>
        </Switch>
    );
}

export default Router