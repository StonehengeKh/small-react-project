import * as R from "ramda"

import { FETCH_LESSONS_SUCCESS, SEARCH_LESSON } from "../actionTypes";

const initialState = {
    ids: [],
    search: ""
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_LESSONS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck("id", payload)
            })
        case SEARCH_LESSON:
            return R.merge(state, {
                search: payload
            })
        default:
            return state
    }
}