import React from "react"

import "./registration.css"

function Registration() {
    return(
        <div className="registration">
            <h3>Регистрация</h3>
            <p className="sign-up-message">Message</p>

            <label className="control-label" htmlFor="email">Введите электронную почту</label>
            <input type="text" name="email" id="email" className="form-control"/>

            <label className="control-label" htmlFor="input-password1">Введите пароль</label>
            <input type="password" id="input-password1" className="form-control"/>

            <label className="control-label" htmlFor="input-password2">Подтвердите пароль</label>
            <input type="password" id="input-password2" className="form-control"/>

            <button className="sign-up-btn">Зарегестрироваться</button>

            <div className="sign-up-in-btn">Войти в аккаунт</div>
        </div>
    );
}

export default Registration