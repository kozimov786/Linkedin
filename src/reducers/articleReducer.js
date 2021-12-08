import { SET_LOADING_STATUS } from "../actions/actionType"

const initialState = {
  loading: false
}

const articeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      }
    default:
      return state
  }
}
export default articeReducer