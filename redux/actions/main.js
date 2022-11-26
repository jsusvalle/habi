import * as t from "../types";

export const saveData = (name, value, onSuccess) => (dispatch) => {
  dispatch({
    type: t.SAVE_DATA,
    payload: {
      name,
      value
    },
  });
  onSuccess();
};

