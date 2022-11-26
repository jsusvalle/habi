import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { saveData } from "redux/actions/main";

// Components
import { Select } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";

const NumFloorsForm = ({ description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();
    const { formData: { num_floors }, handleInputChange, handleSubmit, errors } =
    useForm(
        {
            initialState: {
                num_floors: "",
            },
            validations: {
                num_floors: {
                    required: true, 
                    type: "text",
                },
            },
        },
        (formData) => dispatch(saveData("num_floors", formData.num_floors, onPushRoute))
    );

    const generateNumberOptions = Array.from(Array(50), (e,i)=>i+1);

    return (
        <form onSubmit={handleSubmit}>
            <Select
                bgColor="grayMain"
                spacing={2}
                name="num_floors"
                value={num_floors}
                onChange={handleInputChange}
                error={errors.num_floors}
                label={description}
            >
                {generateNumberOptions && generateNumberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Select>

            <ButtonForm />
        </form>
    );
};

NumFloorsForm.propTypes = {
    description: PropTypes.string,
    next_path: PropTypes.string,
};


export default NumFloorsForm;