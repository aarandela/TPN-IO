const gtube = []

const gtubeReducer = (state = gtube, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_GTUBE':
      newState.push(action.payload)
      return newState
    default:
      return state
  }
}

export default gtubeReducer
