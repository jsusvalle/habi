import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { saveData } from "redux/actions/main";

// Components
import { TextField } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";

const EmailForm = ({ description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();
    const { formData, handleInputChange, handleSubmit, errors } =
    useForm(
        {
            initialState: {
                email: "",
            },
            validations: {
                email: {
                    required: true, 
                    type: "email",
                },
            },
        },
        (formData) => dispatch(saveData("email", formData.email, onPushRoute))
    );


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                bgColor="grayMain"
                spacing={2}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                label={description}
            />

            <ButtonForm />
        </form>
    );
};

EmailForm.propTypes = {
    description: PropTypes.string,
    next_path: PropTypes.string,
};

export default EmailForm;