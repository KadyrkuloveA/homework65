import React, {Fragment} from "react";
import './Layout.css';
import Navbar from "../Navbar/Navbar";

const Layout = props => (
    <Fragment>
        <Navbar/>
        <main className='Layout-Content'>
            {props.children}
        </main>
    </Fragment>
);

export default Layout;