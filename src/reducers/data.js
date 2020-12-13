import { SET_PARAMS, SET_DATA, SET_LOADING } from "../constants/actionTypes";


const initialState = {
  params: {limit : 10, offset : 0, sort : "launch_year", order : "desc"},
  data: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SET_PARAMS:
      return {
        ...state,
        params: action.params
      };
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
