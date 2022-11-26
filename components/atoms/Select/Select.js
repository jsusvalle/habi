import React from "react";
import PropTypes from "prop-types";

import { ContainerForm, ContainerSelect, ContainerError, InputSelect, LabelContainer, Label } from "./Select.styles";
import { options } from "./Select.constants";

const handleChange =
  ({ onChange }) =>
  (e) => {
    onChange(e);
  };

const Select = React.forwardRef(
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
      children,
      ...restProps
    },
    ref
  ) => {
    return (
      <ContainerForm>
        <LabelContainer>  
          <Label>{label}</Label>
        </LabelContainer>
      
        <ContainerSelect error={error} {...restProps}>
          <InputSelect
            ref={ref}
            type={type}
            value={value}
            onChange={handleChange({ onChange })}
            placeholder=""
            color={color}
            bgColor={bgColor}
            spacing={spacing}
            name={name}
            role="select"
          >
            <option value={""}>Escoge una opción</option>
            {children}
          </InputSelect>
        </ContainerSelect>

        <ContainerError>{error && error}</ContainerError>
      </ContainerForm>
    );
  }
);

Select.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string]),
  color: PropTypes.oneOf(options.colors),
  bgColor: PropTypes.oneOf(options.colors),
  spacing: PropTypes.oneOf(options.spacings),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  type: "text",
  color: "black",
  bgColor: "grayDark",
  onChange: () => {},
  value: null,
  label: "",
  error: "",
};

Select.displayName = 'Select';

export default Select;
