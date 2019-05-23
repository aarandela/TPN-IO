const oral = []

const oralReducer = (state = oral, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_ORAL':
      newState.push(action.payload)
      return newState
    default:
      return state
  }
}

export default oralReducer
