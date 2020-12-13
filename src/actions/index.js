import { SET_DATA, SET_LOADING } from "../constants/actionTypes";
import agent from "./../agent";



 
export const get = (params) => (dispatch) => {
    dispatch({
      type: SET_LOADING,
      isLoading: true,
    });
  agent.Data.get(params)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_DATA,
        data: res,
      });
       dispatch({
         type: SET_LOADING,
         isLoading: false,
       });
    })
    .catch((err) => {
      console.log("err", err);
      // Process error code
    });
};
