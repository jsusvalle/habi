import React from "react";
import PropTypes from "prop-types";

import { InputCheckbox } from "./CheckBox.styles";

const handleChange =
  ({ onChange }) =>
  (e) => {
    onChange(e);
  };

const CheckBox = React.forwardRef(
  (
    {
      onChange,
      name,
      value,
      label,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <InputCheckbox
          ref={ref}
          type="checkbox"
          id={name}
          checked={value}
          name={name}
          onChange={handleChange({ onChange })}
          {...restProps}
        />
        <label htmlFor={name}>{label}</label>
      </>
    );
  }
);

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  label: "",
  onClick: () => {},
};

CheckBox.displayName = 'CheckBox';

export default CheckBox;
