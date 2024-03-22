const initState = {
    themeId: 1
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any

type StateType = typeof initState
type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}