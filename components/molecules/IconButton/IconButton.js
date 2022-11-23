import React from "react";
import PropTypes from "prop-types";

import { Button, Icon, Loader } from "components/atoms";

const IconButton = ({ onClick, icon, children, loading, ...restProps }) => {
  return (
    <Button onClick={onClick} loading={loading} {...restProps}>
      <Loader width={5} color="white" loading={loading} isIconButton={true}>
        <Icon {...icon} />
      </Loader>
      {children}
    </Button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
  }).isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  onClick: () => {},
  loading: false,
};

export default IconButton;
