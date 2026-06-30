const initialStateLng = {
  value: 0,
  value1: 0,
}

export const langAction = (value) => ({
  type: 'lng/value',
  payload: value,
})

export const langReducer = (state = initialStateLng, action) => {
  switch (action.type) {
    case 'lng/value':
      //   return { ...state, lng: { ...state.lng, value: action.payload } }
      return { ...state, value: action.payload }

    default:
      return state
  }
}
