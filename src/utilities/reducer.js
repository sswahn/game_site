export function reducer(state, action) {
  switch (action.type) {
    case 'genre':
      return { ...state, display: action.payload }
    default:
      return state
  }
}
