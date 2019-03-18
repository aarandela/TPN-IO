const initialState = {
  input: [{
    type: 'urine',
    value: 68,
    date: 'Fri Mar 01 2019 13:44:24',
    comments: 'yellow'
  },
  {
    type: 'ostomy',
    value: 20,
    date: 'Fri Mar 01 2019 13:44:28',
    comments: 'watery',
    ostomyChange: 1
  },
  {
    type: 'gtube',
    value: 20,
    date: 'Fri Mar 01 2019 13:45:28',
    comments: 'green'
  }, {
    type: 'gtube',
    value: 20,
    date: 'Fri Mar 01 2019 13:45:28',
    comments: 'green'
  }, {
    type: 'gtube',
    value: 20,
    date: 'Fri Mar 01 2019 13:45:28',
    comments: 'green'
  }, {
    type: 'gtube',
    value: 20,
    date: 'Fri Mar 01 2019 13:45:28',
    comments: 'green'
  }
  ]
}

const inputReducer = (state = initialState, action) => {
  const { category, value, date, comments, change, index } = action
  switch (action.type) {
    case 'ADD':
      // let newInput = []
      // let newInputObj = [{ type: category, value, date, comments, ostomyChange: change }]
      // newInput = stateArr.concat(newInputObj)
      return state

    case 'DELETE':
      let newInput = JSON.parse(JSON.stringify(state))
      newInput.slice(0, 1)
      return newInput

    default:
      return state
  }
}

export default inputReducer
