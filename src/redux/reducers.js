const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  isLogin: false,
  isSuccess: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: true,
        alertMsg: action.payload.data.message,
        data: action.payload.data.data,
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
