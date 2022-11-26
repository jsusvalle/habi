import React from "react";

import { Box, Button, Text } from "components/atoms";

const ButtonForm = () => (
    <Box display="flex" style={{justifyContent: "flex-end", marginTop: 20}}>
        <Button
            type="submit"
            color="purple"
            height="auto"
            width="10rem"
            spacing="0.5rem"
            borderRadius="0.5rem"
        >
            <Text textAlign="center" color="white">
                Siguiente
            </Text>
        </Button>
    </Box>
);

export default ButtonForm;
