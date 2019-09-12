import React from "react"

import "./signIn.css"

function SignIn() {
    return(
        <div className="sign-in">
            <h3>Войти в аккаунт</h3>
            <p className="sign-in-message">Message</p>

            <label className="control-label" htmlFor="email">Введите электронную почту</label>
            <input type="text" name="email" id="email" className="form-control"/>

            <label className="control-label" htmlFor="input-password">Введите пароль</label>
            <input type="password" id="input-password" className="form-control"/>

            <button className="sign-in-btn">Войти</button>

            <div className="sign-in-reg-btn">Зарегестрироваться</div>
        </div>
    );
}

export default SignIn