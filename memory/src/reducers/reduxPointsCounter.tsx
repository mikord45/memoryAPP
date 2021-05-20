
export interface actionInterfaceReduxPointsCounter {
    type: string,
    data: number
}

const reduxPointsCounter = (state = { currentScore: 50 as number}, action: actionInterfaceReduxPointsCounter) => {
    switch (action.type) {
        case "setNewPointsValue":
            state.currentScore = action.data
            return { ...state }
        default:
            return state
    }
}
export default reduxPointsCounter