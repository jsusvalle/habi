import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { saveData } from "redux/actions/main";

// Components
import { CheckBox, Text, Box } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";

const checkboxOptions = ["Zona BBQ", "Salón comunal", "Parque de juegos"];

const AptOptionsForm = ({ description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();
    const { formData: { apartment_options }, handleChangeWithoutValidations, handleSubmit } =
    useForm(
        {
            initialState: {
                apartment_options: [],
            },
            validations: {
                apartment_options: {
                    required: false, 
                    type: "array",
                },
            },
        },
        (formData) => dispatch(saveData("apartment_options", formData.apartment_options, onPushRoute))
    );

    const handleChange = (e) => {
        const checked = e.target.checked;
        const name = e.target.name;
        
        if(checked) {
            handleChangeWithoutValidations("apartment_options", [...apartment_options, name])
            return;
        }

        const removeItem = apartment_options.filter(e => e !== name);
        handleChangeWithoutValidations("apartment_options", removeItem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box style={{ marginBottom: "1rem" }}>  
                <Text color="black" weight="bold">{description}</Text>
            </Box>

            {checkboxOptions.map((option) => (
                <Box key={option} style={{ marginBottom: "1rem" }}>
                    <CheckBox name={option} label={option} value={apartment_options.includes(option)} onChange={handleChange} />
                </Box>
            ))}

            <ButtonForm />
        </form>
    );
};

AptOptionsForm.propTypes = {
    description: PropTypes.string,
    next_path: PropTypes.string,
};


export default AptOptionsForm;