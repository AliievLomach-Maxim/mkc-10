const initialStateCounter = {
  value: 0,
  value1: 0,
}

export const counterAction = (value) => ({
  type: 'counter/value',
  payload: value,
})

export const counterAction1 = (value) => ({
  type: 'counter/value1',
  payload: value,
})

export const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case 'counter/value':
      //   return { ...state, counter: { ...state.counter, value: action.payload } }
      return { ...state, value: action.payload }
    case 'counter/value1':
      return { ...state, value1: action.payload }
    //   return { ...state, counter: { ...state.counter, value1: action.payload } }

    default:
      return state
  }
}
