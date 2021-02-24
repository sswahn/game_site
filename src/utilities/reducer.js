
export function reducer(state, action) {
  switch(action.type) {
    case 'login':
      return { ...state, modal: action.type }
    case 'register':
      return { ...state, modal: action.type }
    default:
      return state
  }
}