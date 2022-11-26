import React from 'react';
import PropTypes from "prop-types";

import { FloatContainer } from "./FloatButton.styles";

const FloatButton = ({
	onClick,
    children
}) => {
	return (
		<FloatContainer onClick={onClick}>
			{children}
		</FloatContainer>
	);
}

FloatButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};

export default FloatButton;
