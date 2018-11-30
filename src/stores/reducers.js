const state = {
  todos: []
}
export default function todoReducer(state = state, action) {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        action.payload
      }
    default:
      return state
  }
}
