import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router"

import lessons from "./lessons"
import lessonsPage from "./lessonsPage"
import lessonPage from "./lessonPage"

export default history => combineReducers ({
    lessons,
    lessonsPage,
    lessonPage,
    router: connectRouter(history)
});