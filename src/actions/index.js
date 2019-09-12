import {
    FETCH_LESSONS,
    FETCH_LESSONS_SUCCESS,
    FETCH_LESSONS_FAILURE,
    FETCH_LESSON_BY_ID,
    FETCH_LESSON_BY_ID_SUCCESS,
    FETCH_LESSON_BY_ID_FAILURE,
    SEARCH_LESSON
} from "../actionTypes"
import {
    fetchLessons as fetchLessonsApi,
    fetchLessonById as fetchLessonByIdApi
} from "../api"

export const fetchLessons = () => async dispatch => {
    dispatch({
        type: FETCH_LESSONS
    })  
    
    try {
        const lessons = await fetchLessonsApi()
        dispatch({
            type: FETCH_LESSONS_SUCCESS,
            payload: lessons
        })
    } catch (err) {
        dispatch({
            type: FETCH_LESSONS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchLessonById = id => async dispatch => {
    dispatch({
        type: FETCH_LESSON_BY_ID
    })

    try {
        const lesson = await fetchLessonByIdApi(id)
        dispatch({
            type: FETCH_LESSON_BY_ID_SUCCESS,
            payload: lesson
        })
    } catch (err) {
        dispatch({
            type: FETCH_LESSON_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const searchLesson = text => dispatch => {
    dispatch({
        type: SEARCH_LESSON,
        payload: text
    })
}