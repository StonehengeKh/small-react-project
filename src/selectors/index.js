import * as R from "ramda"

export const getLessonById = (state, id) => state.lessons[id]

export const getLessons = state => {
    const applySearch = item => R.contains(
        state.lessonsPage.search,
        R.prop("name", item)
    )
    const lessons = R.compose(
        R.filter(applySearch),
        R.map(id => getLessonById(state, id))
    )(state.lessonsPage.ids)
    return lessons
}