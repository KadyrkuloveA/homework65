import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Pages from "./Containers/Pages/Pages";
import Admin from "./Containers/Admin/Admin";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/:title' exact component={Pages}/>
                    <Route path='/pages/admin'component={Admin} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;