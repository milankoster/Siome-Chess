import './App.sass'
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Play from "./components/Play/Play";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Faq from "./components/Faq/Faq";
import keycloak from "./keycloak";
import Loading from "./components/Loading";
import {ReactKeycloakProvider} from "@react-keycloak/web";

function App() {
    return (
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{
                onLoad: "login-required",
            }}
            LoadingComponent={<Loading/>}>

            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Layout>
                            <Home/>
                        </Layout>
                    </Route>
                    <Route exact path='/play'>
                        <Layout>
                            <Play/>
                        </Layout>
                    </Route>
                    <Route exact path='/matches'>
                        <Layout>
                            <Home/>
                        </Layout>
                    </Route>
                    <Route exact path='/computer'>
                        <Layout>
                            <Home/>
                        </Layout>
                    </Route>
                    <Route exact path='/invite'>
                        <Layout>
                            <Home/>
                        </Layout>
                    </Route>
                    <Route exact path='/matchmaking'>
                        <Layout>
                            <Home/>
                        </Layout>
                    </Route>
                    <Route exact path='/faq'>
                        <Layout>
                            <Faq/>
                        </Layout>
                    </Route>
                </Switch>
            </Router>

        </ReactKeycloakProvider>


    );
}

export default App;
