import { combineReducers } from 'redux'

// Reducers
import urine from './urineReducer'
import ostomy from './ostomyReducer'
import gtube from './gtubeReducer'

const rootReducer = combineReducers({
  urine,
  ostomy,
  gtube
})

export default rootReducer
