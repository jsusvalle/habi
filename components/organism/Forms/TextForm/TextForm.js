import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { saveData } from "redux/actions/main";

// Components
import { TextField } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";

const TextForm = ({ name, description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();

    const { formData, handleInputChange, handleSubmit, errors } =
    useForm(
        {
            initialState: {
                [name]: "",
            },
            validations: {
                [name]: {
                    required: true, 
                    type: "text",
                },
            },
        },
        (formData) => dispatch(saveData(name, formData[name], onPushRoute))
    );
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                bgColor="grayMain"
                spacing={2}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                error={errors[name]}
                label={description}
            />

            <ButtonForm />
        </form>
    );
};

TextForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    next_path: PropTypes.string,
};


export default TextForm;