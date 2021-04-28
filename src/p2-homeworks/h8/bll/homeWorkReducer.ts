import {UserType} from "../HW8";

type ActionsType = {type: 'sort', payload: 'up'} | {type: 'sort', payload: 'down'} | {type: 'check', payload: number}

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let stateCopy = [...state]
            stateCopy.sort((a, b) => {
                if (action.payload === "up") {
                    if (a.name < b.name) {
                        return -1
                    } else if (a.name > b.name) {
                        return 1
                    } else {
                        return 0
                    }
                } else {
                    if (a.name > b.name) {
                        return -1
                    } else if (a.name < b.name) {
                        return 1
                    } else {
                        return 0
                    }
                }

            })
            return stateCopy
        }
        case 'check': {
            // need to fix
            return state.filter(a => a.age >= action.payload)
        }
        default: return state
    }
}