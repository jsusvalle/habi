import React from "react";
import PropTypes from "prop-types";

import { options, IconsOptions } from "./Icon.constants";

const Icon = ({ icon, size, color, style }) => {
  return (
    <div data-testid="icon" style={style}>
      {IconsOptions[icon]({ size, color })}
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(options.icons),
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.size),
  style: PropTypes.object,
};

Icon.defaultProps = {
  icon: "search",
  size: "small",
  color: "white",
};

export default Icon;
