import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Text } from "components/atoms";

const LinkText = ({ href, children, ...restProps }) => {
  return (
    <Link href={href} passHref>
      <Text {...restProps}>{children}</Text>
    </Link>
  );
};

LinkText.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

LinkText.defaultProps = {
  href: "/",
};

export default LinkText;
