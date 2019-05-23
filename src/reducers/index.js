import { combineReducers } from 'redux'

// Reducers
import urine from './urineReducer'
import ostomy from './ostomyReducer'
import gtube from './gtubeReducer'
import oral from './oralReducer'

const rootReducer = combineReducers({
  urine,
  ostomy,
  gtube,
  oral
})

export default rootReducer
