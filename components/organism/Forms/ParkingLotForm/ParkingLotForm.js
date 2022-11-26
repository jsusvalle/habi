import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { saveData } from "redux/actions/main";

// Components
import { Select } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";

const ParkingLotForm = ({ description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();
    const [isRequired, setIsRequired] = useState(false);
    const { formData: { parking_lot, covered_parking }, handleInputChange, handleSubmit, errors } =
    useForm(
        {
            initialState: {
                parking_lot: "",
                covered_parking: ""
            },
            validations: {
                parking_lot: {
                    required: true, 
                    type: "boolean",
                },
                covered_parking: {
                    required: isRequired, 
                    type: "boolean",
                },
            },
        },
        (formData) => dispatch(saveData("parking_lot", formData.parking_lot, onPushRoute))
    );

    const handleHandle = (e) => {
        setIsRequired(e.target.value === "true")
        handleInputChange(e);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Select
                bgColor="grayMain"
                spacing={2}
                name="parking_lot"
                value={parking_lot}
                onChange={handleHandle}
                error={errors.parking_lot}
                label={description}
            >
                <option value={true}>Sí</option>
                <option value={false}>No</option>
            </Select>

            {isRequired && (
                <Select
                    bgColor="grayMain"
                    spacing={2}
                    name="covered_parking"
                    value={covered_parking}
                    onChange={handleInputChange}
                    error={errors.covered_parking}
                    label={"¿El parqueadero es cubierto?"}
                >
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </Select>
            )}

            <ButtonForm />
        </form>
    );
};

ParkingLotForm.propTypes = {
    description: PropTypes.string,
    next_path: PropTypes.string,
};

export default ParkingLotForm;