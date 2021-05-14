const initState = {
    isLoading: false
}

type LoadingActionType = {
    type: "SET_LOADING"
    isLoading: boolean
}

type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => {
    switch (action.type) {
        case "SET_LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: "SET_LOADING", isLoading} as const)
