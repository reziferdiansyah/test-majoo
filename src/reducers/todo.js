import { LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS } from "constants/index";

const initialState = {
  data: false,
  isLoading: false,
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: {
          unCompletedList: action.data.filter(({ status }) => !status),
          completedList: action.data.filter(({ status }) => status),
        },
      };
    case LOAD_DATA_FAILURE:
      return state;

    default:
      return state;
  }
};

export default todo;
