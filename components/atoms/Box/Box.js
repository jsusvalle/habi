import React from "react";
import PropTypes from "prop-types";

import { Container } from "./Box.styles";
import { options } from "./Box.constants";

const Box = ({
  display,
  padding,
  margin,
  color,
  width,
  radius,
  children,
  style,
}) => {
  return (
    <Container
      display={display}
      padding={padding}
      margin={margin}
      color={color}
      width={width}
      radius={radius}
      style={style}
    >
      {children}
    </Container>
  );
};

Box.propTypes = {
  display: PropTypes.string,
  padding: PropTypes.oneOf(options.spacings),
  margin: PropTypes.oneOf(options.spacings),
  color: PropTypes.oneOf(options.colors),
  width: PropTypes.oneOf(options.widths),
  radius: PropTypes.oneOf(options.radius),
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Box.defaultProps = {
  display: "block",
  padding: 0,
  margin: 0,
  color: "none",
  width: "auto",
  radius: "none",
};

export default Box;
