import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { saveData } from "redux/actions/main";

// Components
import { Select } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";

const ElevatorForm = ({ description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();
    const { formData: { elevator }, handleInputChange, handleSubmit, errors } =
    useForm(
        {
            initialState: {
                elevator: "",
            },
            validations: {
                elevator: {
                    required: true, 
                    type: "boolean",
                },
            },
        },
        (formData) => dispatch(saveData("elevator", formData.elevator, onPushRoute))
    );


    return (
        <form onSubmit={handleSubmit}>
            <Select
                bgColor="grayMain"
                spacing={2}
                name="elevator"
                value={elevator}
                onChange={handleInputChange}
                error={errors.elevator}
                label={description}
            >
                <option value={true}>Sí</option>
                <option value={false}>No</option>
            </Select>

            <ButtonForm />
        </form>
    );
};

ElevatorForm.propTypes = {
    description: PropTypes.string,
    next_path: PropTypes.string,
};


export default ElevatorForm;