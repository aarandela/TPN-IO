const urine = []

const urineReducer = (state = urine, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_URINE':
      newState.push(action.payload)
      return newState
    default:
      return newState
  }
}

export default urineReducer
