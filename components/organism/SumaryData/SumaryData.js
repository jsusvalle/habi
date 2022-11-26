import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import { Box, Text, Grid, Spacer } from "components/atoms";

const booleanTrans = (val) => val ? "Sí" : "No";

const validationStrings = (val) => val ? val : "-----";

const SumaryData = () => {
    const dataForm = useSelector(({main}) => main);

    return (
        <Box
            width="full"
            padding={10}
            color="grayLight"
            radius="lg"
            style={{
                margin: "0 auto",
            }}
        >
            <Text size="xl" weight="bold">Resumen</Text>

            <Spacer spacing={5} />

            <Grid>
                <Text size="base" weight="bold">Nombres</Text>
                <Text textAlign="end" size="base" weight="normal">{validationStrings(dataForm.fullname)}</Text>
            </Grid>

            <Spacer spacing={3} />

            <Grid>
                <Text size="base" weight="bold">Correo</Text>
                <Text textAlign="end" size="base" weight="normal">{validationStrings(dataForm.email)}</Text>
            </Grid>

            <Spacer spacing={3} />

            <Grid>
                <Text size="base" weight="bold">Dirección</Text>
                <Text textAlign="end" size="base" weight="normal">{validationStrings(dataForm.address)}</Text>
            </Grid>

            <Spacer spacing={3} />
                
            <Grid>
                <Text size="base" weight="bold">Número de piso:</Text>
                <Text textAlign="end" size="base" weight="normal">{validationStrings(dataForm.num_floors)}</Text>
            </Grid>

            <Spacer spacing={3} />
                
            <Grid>
                <Text size="base" weight="bold">Apartamento cuenta con:</Text>
                <Text textAlign="end" size="base" weight="normal">{dataForm.apartment_options ? dataForm.apartment_options.join(", ") : "-----"}</Text>
            </Grid>

            <Spacer spacing={3} />

            <Grid>
                <Text size="base" weight="bold">Parqueadero</Text>
                <Text textAlign="end" size="base" weight="normal">{dataForm.parking_lot ? booleanTrans(dataForm.parking_lot) : "-----"}</Text>
            </Grid>

            <Spacer spacing={3} />

            <Grid>
                <Text size="base" weight="bold">Costo</Text>
                <Text textAlign="end" size="base" weight="normal">{validationStrings(dataForm.amount)}</Text>
            </Grid>

            <Spacer spacing={3} />

            <Grid>
                <Text size="base" weight="bold">Foto</Text>
                <Text textAlign="end" size="base" weight="normal">{dataForm.photo ? <Image width={100} height={50} src={dataForm.photo} /> : "-----"}</Text>
            </Grid>

            <Spacer spacing={3} />

            <Grid>
                <Text size="base" weight="bold">Ascensor</Text>
                <Text textAlign="end" size="base" weight="normal">{dataForm.elevator ? booleanTrans(dataForm.elevator) : "-----"}</Text>
            </Grid>
        </Box>
    );
};

export default SumaryData;
