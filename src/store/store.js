import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterSlice'
import { langReducer } from './lngSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  lng: langReducer,
})

export const store = createStore(rootReducer)

// const initialState = {
//   counter: {
//     value: 0,
//     value1: 0,
//   },
//   lng: {
//     value: 'en',
//   },
// }
// const initialStateCounter = {
//   value: 0,
//   value1: 0,
// }
// const initialStateLng = {
//   value: 0,
//   value1: 0,
// }

// export const counterAction = (value) => ({
//   type: 'counter/value',
//   payload: value,
// })

// export const counterAction1 = (value) => ({
//   type: 'counter/value1',
//   payload: value,
// })

// export const langAction = (value) => ({
//   type: 'lng/value',
//   payload: value,
// })

// const counterReducer = (state = initialStateCounter, action) => {
//   switch (action.type) {
//     case 'counter/value':
//       //   return { ...state, counter: { ...state.counter, value: action.payload } }
//       return { ...state, value: action.payload }
//     case 'counter/value1':
//       return { ...state, value1: action.payload }
//     //   return { ...state, counter: { ...state.counter, value1: action.payload } }

//     default:
//       return state
//   }
// }

// const langReducer = (state = initialStateLng, action) => {
//   switch (action.type) {
//     case 'lng/value':
//       //   return { ...state, lng: { ...state.lng, value: action.payload } }
//       return { ...state, value: action.payload }

//     default:
//       return state
//   }
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'counter/value':
//       return { ...state, counter: { ...state.counter, value: action.payload } }
//     case 'counter/value1':
//       return { ...state, counter: { ...state.counter, value1: action.payload } }
//     case 'lng/value':
//       return { ...state, lng: { ...state.lng, value: action.payload } }

//     default:
//       return state
//   }
// }

// reducer(undefined,{type:'@SYSTEM'})

// export const store = createStore(reducer)
