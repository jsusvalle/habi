import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { saveData } from "redux/actions/main";

// Components
import { TextField } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";


const AmountForm = ({ description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();
    const { formData: { amount }, handleInputChange, handleSubmit, errors } =
    useForm(
        {
            initialState: {
                amount: "",
            },
            validations: {
                amount: {
                    required: true, 
                    type: "number",
                },
            },
        },
        (formData) => dispatch(saveData("amount", formData.amount, onPushRoute))
    );


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                bgColor="grayMain"
                spacing={2}
                name="amount"
                placeholder="$"
                value={amount}
                onChange={handleInputChange}
                error={errors.amount}
                label={description}
            />

            <ButtonForm />
        </form>
    );
};

AmountForm.propTypes = {
    description: PropTypes.string,
    next_path: PropTypes.string,
};


export default AmountForm;