const initialState = {
  input: [{
    type: 'urine',
    value: 68,
    date: 'Fri Mar 01 2019 13:44:24 GMT-0600 (Central Standard Time)',
    comments: 'yellow'
  },
  {
    type: 'urine',
    value: 20,
    date: 'Fri Mar 01 2019 13:44:28 GMT-0600 (Central Standard Time)',
    comments: 'amber'
  },
  {
    type: 'gtube',
    value: 20,
    date: 'Fri Mar 01 2019 13:45:28 GMT-0600 (Central Standard Time)',
    comments: 'green'
  }
  ]
}

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_URINE':
      return state

    case 'ADD_GTUBE':
      return state

    case 'ADD_OSTOMY':
      return state

    case 'ADD_ORAL':
      return state

    case 'DELETE':
      return state

    default:
      return state
  }
}

export default inputReducer
