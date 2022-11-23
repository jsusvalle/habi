import React from "react";
import { useDispatch } from "react-redux";
import { createShipment } from "redux/actions/main";

// UI
import { TextField, Box, Text, Spacer, Grid } from "components/atoms";
import { IconButton } from "components/molecules";

// Hooks
import useForm from "hooks/useForm";

// Utils
import { initialState, validations } from "utils/dataFormShipment";

const propsTextField = {
  bgColor: "grayMedium",
  spacing: 2,
};

const FormQuoteShipping = ({ loading }) => {
  const dispatch = useDispatch();
  const { formData, handleInputChange, handleSubmit, resetForm, errors } =
    useForm(
      {
        initialState,
        validations,
      },
      (formData) => dispatch(createShipment(formData, resetForm))
    );

  const { address_from_zip, address_to_zip, weight, height, width, length } =
    formData;

  return (
    <form onSubmit={handleSubmit}>
      <Box
        width="full"
        color="grayDark"
        padding={10}
        style={{
          minHeight: "270px",
          position: "relative",
        }}
      >
        <Text size="xl" color="white" weight="bold" textAlign="center">
          Cotizador de Envíos
        </Text>

        <Spacer spacing={6} />

        <Grid items={2}>
          <TextField
            {...propsTextField}
            name="address_from_zip"
            value={address_from_zip}
            onChange={handleInputChange}
            error={errors.address_from_zip}
            label="Código postal de origen"
          />

          <TextField
            {...propsTextField}
            name="address_to_zip"
            value={address_to_zip}
            onChange={handleInputChange}
            error={errors.address_to_zip}
            label="Código postal de destino"
          />
        </Grid>

        <Spacer spacing={6} />

        <Grid items={4}>
          <TextField
            {...propsTextField}
            name="length"
            value={length}
            onChange={handleInputChange}
            error={errors.length}
            label="Largo (CM)"
          />

          <TextField
            {...propsTextField}
            name="height"
            value={height}
            onChange={handleInputChange}
            error={errors.height}
            label="Alto (CM)"
          />

          <TextField
            {...propsTextField}
            name="width"
            value={width}
            onChange={handleInputChange}
            error={errors.width}
            label="Ancho (CM)"
          />

          <TextField
            {...propsTextField}
            name="weight"
            value={weight}
            onChange={handleInputChange}
            error={errors.weight}
            label="Peso (KG)"
          />
        </Grid>

        <Box
          display="flex"
          width="full"
          style={{
            position: "absolute",
            bottom: "-25px",
            right: "0",
            justifyContent: "center",
          }}
        >
          <IconButton
            icon={{
              icon: "search",
              size: "small",
              color: "white",
              style: { marginRight: 10 },
            }}
            width={"300px"}
            height={"50px"}
            loading={loading}
            type="submit"
            borderRadius="2rem"
          >
            <Text color="white" size="md" weight="medium" width="auto">
              {loading ? "Cotizando..." : "Cotizar"}
            </Text>
          </IconButton>
        </Box>
      </Box>
    </form>
  );
};

export default FormQuoteShipping;
