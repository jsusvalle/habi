import React from "react";

import { Loader, Box } from "components/atoms";
import { DisplayMessage } from "components/molecules";
import FormQuoteShipping from "components/organism/FormQuoteShipping/FormQuoteShipping";
import ListRates from "components/organism/ListRates/ListRates";

const QuoteShipping = ({ loading, error, listRates }) => {
  return (
    <>
      <FormQuoteShipping loading={loading} />

      <Box
        width="full"
        color="grayLight"
        style={{
          minHeight: "400px",
        }}
      >
        <DisplayMessage
          isActive={!loading && listRates.length === 0}
          spacing={32}
          error={error}
          messageDefault="Ingresa los datos para conocer las tarifas disponibles"
        />

        <Loader paddingTop="100px" loading={loading} color="blueDark">
          <ListRates data={listRates} />
        </Loader>
      </Box>
    </>
  );
};

export default QuoteShipping;
