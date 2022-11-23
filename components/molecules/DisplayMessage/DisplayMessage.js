import React from "react";
import PropTypes from "prop-types";

import { Text, Spacer } from "components/atoms";

const DisplayMessage = ({ isActive, spacing, error, messageDefault }) => {
  if (!isActive) return null;
  return (
    <>
      <Spacer spacing={spacing} />
      <Text
        weight="bold"
        size="md"
        textAlign="center"
        color={error ? "red" : "grayDark"}
      >
        {error ? error : messageDefault}
      </Text>
    </>
  );
};

DisplayMessage.propTypes = {
  isActive: PropTypes.bool,
  spacing: PropTypes.number,
  error: PropTypes.string,
  messageDefault: PropTypes.string,
};

DisplayMessage.defaultProps = {
  isActive: false,
  spacing: 0,
  error: "",
  messageDefault: "",
};

export default DisplayMessage;
