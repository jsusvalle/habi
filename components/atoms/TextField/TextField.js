import React from "react";
import PropTypes from "prop-types";

import { ContainerTextField, InputTextField, Label } from "./TextField.styles";
import { options } from "./TextField.constants";

const handleChange =
  ({ onChange }) =>
  (e) => {
    onChange(e);
  };

const TextField = React.forwardRef(
  (
    {
      type,
      bgColor,
      color,
      spacing,
      value,
      onChange,
      name,
      label,
      error,
      ...restProps
    },
    ref
  ) => {
    return (
      <ContainerTextField error={error} bgColor={bgColor} {...restProps}>
        <InputTextField
          ref={ref}
          type={type}
          value={value}
          onChange={handleChange({ onChange })}
          placeholder=""
          color={color}
          spacing={spacing}
          name={name}
          role="input"
        />
        <Label>{label}</Label>
      </ContainerTextField>
    );
  }
);

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string]),
  color: PropTypes.oneOf(options.colors),
  bgColor: PropTypes.oneOf(options.colors),
  spacing: PropTypes.oneOf(options.spacings),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  type: "text",
  color: "white",
  bgColor: "grayDark",
  onChange: () => {},
  value: "",
  label: "",
  error: "",
};

export default TextField;
