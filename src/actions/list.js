import request from "./connect";
import { LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS } from "constants/index";
//load data
export const loadDataSuccess = (data) => ({
  type: LOAD_DATA_SUCCESS,
  data,
});

export const loadDataFailure = () => ({
  type: LOAD_DATA_FAILURE,
});

export const loadData = () => {
  return (dispatch) => {
    return request
      .get("to-do-list")
      .then((response) => {
        dispatch(loadDataSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(loadDataFailure());
      });
  };
};
//end load data
