import React from "react";
import PropTypes from "prop-types";

import { Box, Text, Button } from "components/atoms";

import { ContainerCardList, Pill } from "./CardList.styles";

const CardList = ({
  title,
  price,
  days,
  textButton,
  isBestOption,
  onClick,
}) => {
  return (
    <ContainerCardList>
      {isBestOption && <Pill>Mejor Opción</Pill>}

      {title && (
        <Box width="full">
          <Text size="sm" color="grayMedium">
            Servicio
          </Text>
          <Text weight="bold">{title}</Text>
        </Box>
      )}

      {days && (
        <Box width="full">
          <Text size="sm" color="grayMedium">
            Entrega Estimada
          </Text>
          <Text weight="bold">{days} Días</Text>
        </Box>
      )}

      {price && (
        <Box width="full">
          <Text size="sm" color="grayMedium">
            Tarifa
          </Text>
          <Text weight="bold">{price}</Text>
        </Box>
      )}

      {onClick && (
        <Box width="full">
          <Button
            color="blueDark"
            width="100%"
            height="auto"
            spacing="0.5rem"
            onClick={onClick}
          >
            <Text textAlign="center" color="white">
              {textButton}
            </Text>
          </Button>
        </Box>
      )}
    </ContainerCardList>
  );
};

CardList.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  textButton: PropTypes.string,
  days: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isBestOption: PropTypes.bool,
  onClick: PropTypes.func,
};

CardList.defaultProps = {
  isBestOption: false,
};

export default CardList;
