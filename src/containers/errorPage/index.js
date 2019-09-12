import React, {Component} from "react"

import "./errorPage.css"
import imgError from "../../assets/police.png"

class ErrorPage extends Component {
    render() {
        return(
            <div className="error-page">
                <img
                    src={imgError}
                    alt="Error"
                    className="error-img"
                />
            </div>
        );
    }
}

export default ErrorPage