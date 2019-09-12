import React from "react"

import "./homePage.css"
import HelloBlock from "../../components/helloBlock"
// import SignIn from "../../components/signIn"
// import Regisrtation from "../../components/registration"

function HomePage() {
    return(
        <div className="home-page">
            <div className="home-page-block">
                <HelloBlock />
                {/*<SignIn />*/}
                {/*<Regisrtation />*/}
            </div>
        </div>
    );
}

export default HomePage