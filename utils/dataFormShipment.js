export const initialState = {
  address_from_zip: "",
  address_to_zip: "",
  weight: "",
  height: "",
  width: "",
  length: "",
};

export const validations = {
  address_from_zip: {
    required: true,
    type: "text",
  },
  address_to_zip: {
    required: true,
    type: "text",
  },
  weight: {
    required: true,
    type: "number",
  },
  height: {
    required: true,
    type: "number",
  },
  width: {
    required: true,
    type: "number",
  },
  length: {
    required: true,
    type: "number",
  },
};
