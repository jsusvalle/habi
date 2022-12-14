import React from "react";
import PropTypes from "prop-types";

import { ContainerForm, ContainerTextField, ContainerError, InputTextField, LabelContainer, Label } from "./TextField.styles";
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
      placeholder,
      ...restProps
    },
    ref
  ) => {
    return (
      <ContainerForm>
        <LabelContainer>  
          <Label>{label}</Label>
        </LabelContainer>
      
        <ContainerTextField error={error} {...restProps}>
          <InputTextField
            ref={ref}
            type={type}
            value={value}
            onChange={handleChange({ onChange })}
            placeholder={placeholder}
            color={color}
            bgColor={bgColor}
            spacing={spacing}
            name={name}
            role="input"
          />
        </ContainerTextField>

        <ContainerError>{error && error}</ContainerError>
      </ContainerForm>
    );
  }
);

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string]),
  color: PropTypes.oneOf(options.colors),
  bgColor: PropTypes.oneOf(options.colors),
  spacing: PropTypes.oneOf(options.spacings),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  type: "text",
  color: "black",
  bgColor: "grayDark",
  onChange: () => {},
  value: "",
  label: "",
  error: "",
  placeholder: "",
};

TextField.displayName = 'TextField';

export default TextField;
