import React from "react";

import { Button, Box, Spacer, Text } from "components/atoms";

const Pagination = ({
  color,
  page,
  onClick,
  disableBack,
  disableNext,
  loading,
}) => {
  const handleClick = (newPage) => {
    onClick(newPage);
  };

  return (
    <Box display="flex" width="full">
      <Button
        loading={loading}
        onClick={() => handleClick(page - 1)}
        color={color}
        disabled={page === 1 || disableBack}
      >
        <Text color="white" textAlign="center">
          Atrás
        </Text>
      </Button>
      <Spacer type="vertical" spacing={10} />
      <Button
        loading={loading}
        onClick={() => handleClick(page + 1)}
        color={color}
        disabled={disableNext}
      >
        <Text color="white" textAlign="center">
          Siguiente
        </Text>
      </Button>
    </Box>
  );
};

export default Pagination;
