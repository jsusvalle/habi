import React from "react";
import PropTypes from "prop-types";

import { Vertical, Horizontal } from "./Spacer.styles";
import { options } from "./Spacer.constants";

const Spacer = ({ type, spacing }) => {
  return type === "horizontal" ? (
    <Horizontal data-testid="horizontal" spacing={spacing} />
  ) : (
    <Vertical data-testid="vertical" spacing={spacing} />
  );
};

Spacer.propTypes = {
  type: PropTypes.oneOf(options.types),
  spacing: PropTypes.oneOf(options.spacings),
};

Spacer.defaultProps = {
  type: "horizontal",
  spacing: 0,
};

export default Spacer;
