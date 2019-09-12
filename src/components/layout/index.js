import React from "react";

import './layout.css'
import Header from "../header";

function Layout({children}) {

    return(
        <div className="page-block">
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default Layout;

