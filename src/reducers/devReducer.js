import {
  GET_DEVS,
  SET_LOADING,
  DEVS_ERROR,
  ADD_DEV,
  DELETE_DEV
} from '../actions/types';

const initialState = {
  devs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVS:
      return {
        ...state,
        devs: action.payload,
        loading: false
      };
    case ADD_DEV:
      return {
        ...state,
        devs: [...state.devs, action.payload],
        loading: false
      };
    case DELETE_DEV:
      return {
        ...state,
        devs: state.devs.filter(dev => dev.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case DEVS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
