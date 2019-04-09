const ostomy = []

const ostomyReducer = (state = ostomy, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_OSTOMY':
      newState = action.payload
      return newState
    default:
      return state
  }
}

export default ostomyReducer
