import React from "react";
import PropTypes from "prop-types";

import { LoaderContainer, CircleLoader } from "./Loader.styles";

const Loader = ({
  color,
  loading,
  width,
  paddingTop,
  isIconButton,
  children,
  ...restProps
}) => {
  if (loading)
    return (
      <LoaderContainer paddingTop={paddingTop} {...restProps}>
        <CircleLoader
          data-testid="circle-loader"
          isIconButton={isIconButton}
          color={color}
          width={width}
        ></CircleLoader>
      </LoaderContainer>
    );

  return <>{children}</>;
};

Loader.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  isIconButton: PropTypes.bool,
  width: PropTypes.number,
  paddingTop: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Loader.defaultProps = {
  color: "blue",
  loading: true,
  width: 40,
  paddingTop: "0px",
  isIconButton: false,
};

export default Loader;
