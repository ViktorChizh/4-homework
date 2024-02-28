import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
             if(action.payload === 'up'){
                 return [...state].sort((a: UserType,b: UserType)=>a.name.localeCompare(b.name))
            } else {
                 return [...state].sort((a: UserType,b: UserType)=>b.name.localeCompare(a.name))
            }
        }
        case 'check': {

            return state.filter(e=> e.age>=action.payload)
        }
        default:
            return state
    }
}
