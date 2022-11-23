import React from "react";
import PropTypes from "prop-types";

import { Font } from "./Text.styles";
import { options } from "./Text.constants";

const Text = React.forwardRef(
  (
    {
      type,
      color,
      weight,
      size,
      width,
      spacing,
      textAlign,
      children,
      ...restProps
    },
    ref
  ) => {
    return (
      <Font
        ref={ref}
        as={type}
        color={color}
        weight={weight}
        size={size}
        spacing={spacing}
        textAlign={textAlign}
        width={width}
        {...restProps}
      >
        {children}
      </Font>
    );
  }
);

Text.propTypes = {
  type: PropTypes.string,
  color: PropTypes.oneOf(options.colors),
  spacing: PropTypes.oneOf(options.spacings),
  weight: PropTypes.oneOf(options.weights),
  size: PropTypes.oneOf(options.sizes),
  width: PropTypes.oneOf(options.widths),
  textAlign: PropTypes.oneOf(options.textAligns),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  type: "p",
  size: "base",
  color: "grayDark",
  weight: "normal",
  spacing: 0,
  textAlign: "initial",
  width: "full",
};

export default Text;
