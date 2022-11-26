import React from "react";
import PropTypes from "prop-types";

import { Box } from "components/atoms";
import { Stepper } from "components/molecules";
import DynamicForm from "../../../hoc/DynamicForm/DynamicForm";

const DataForm = ({ steps }) => {
    return (
        <Box display="flex" style={{justifyContent: "space-between", flexDirection: "column"}}>
            <Stepper steps={steps} />

            <DynamicForm steps={steps} />
        </Box>
    );
};

DataForm.propTypes = {
    steps: PropTypes.array,
};

export default DataForm;
