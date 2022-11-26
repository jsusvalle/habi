import * as t from "../types";

const initialState = {
    fullname: "",
    email: "",
    address: "",
    num_floors: 0,
    apartment_options: [],
    parking_lot: false,
    amount: 0,
    photo: 0,
    elevator: false
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case t.SAVE_DATA:
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      return state;
  }
};

export default main;
