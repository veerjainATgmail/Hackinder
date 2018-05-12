const initialState = {
  login: "",
  password: "",
  ideas: [],
  matches: []
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER_DATA':
      return {...state, ...action.payload }
    default:
      return state;
  }
}

export default appReducer