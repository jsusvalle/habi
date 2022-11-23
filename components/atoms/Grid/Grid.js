import React from "react";
import PropTypes from "prop-types";

import { GridContainer } from "./Grid.styles";
import { options } from "./Grid.constants";

const Grid = ({ items, children }) => {
  return <GridContainer items={items}>{children}</GridContainer>;
};

Grid.propTypes = {
  items: PropTypes.oneOf(options.items),
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  items: 2,
};

export default Grid;
