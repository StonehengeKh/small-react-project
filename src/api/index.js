import * as R from "ramda"
// import request from "superagent"

import lessons from "./mockLessons"

export const fetchLessons = async () => {
    // const {body} = await request.get(
    //     'http://www.mocky.io/v2/5d7a60bf32000051fd34ef53'
    // )
    // return body.lessons
    return new Promise((resolve, reject) => {
        resolve(lessons)
    })
}

export const fetchLessonById = async (id) => {
    return new Promise((resolve, reject) => {
        const lesson = R.find(R.propEq("id", id), lessons)
        resolve(lesson)
    })
}