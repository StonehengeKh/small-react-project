import React from "react"
import {Link} from "react-router-dom"

import "./helloBlock.css"

function HelloBlock() {
    return(
        <div className="hello-block">
            <h3 className="hello-title" align="center">
                Добро пожаловать в Академию устройства!
            </h3>
            <div className="hello-text">
                Мы решили помочь Вам более эффективно разобраться в современной технике, поэтому создали платформу для онлайн-образования. Наш интерес — ваша эффективность: чем вы эффективнее, тем быстрее вы растете и развиваетесь в данном направлении.
            </div>
            <Link to="/list" className="link-style">
                <button className="hello-btn">Начать учиться</button>
            </Link>
        </div>
    );
}

export default HelloBlock