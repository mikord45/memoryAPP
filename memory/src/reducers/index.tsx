import reduxPointsCounter from "./reduxPointsCounter"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    reduxPointsCounter: reduxPointsCounter
})

export default rootReducer