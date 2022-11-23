import React from "react";
import PropTypes from "prop-types";

import { ButtonContainer } from "./Button.styles";

const handleClick =
  ({ onClick }) =>
  (event) => {
    onClick(event);
  };

const Button = React.forwardRef(
  (
    {
      type,
      color,
      spacing,
      loading,
      children,
      width,
      height,
      borderRadius,
      onClick,
      disabled,
      ...restProps
    },
    ref
  ) => {
    return (
      <ButtonContainer
        ref={ref}
        type={type}
        color={color}
        spacing={spacing}
        width={width}
        borderRadius={borderRadius}
        disabled={loading || disabled}
        height={height}
        $loading={loading}
        onClick={onClick && handleClick({ onClick })}
        {...restProps}
      >
        {children}
      </ButtonContainer>
    );
  }
);

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  color: "blue",
  spacing: "1rem",
  loading: false,
  disabled: false,
  width: "100%",
  height: "100%",
  borderRadius: "1rem",

  onClick: () => {},
};

export default Button;
