const initState = {
    isLoading: false
}


export const loadingReducer = (state = initState, action: LoadingReducerActionType): LoadingReducerStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
export type LoadingReducerStateType = typeof initState
export type LoadingReducerActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
