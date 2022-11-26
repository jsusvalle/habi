import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { saveData } from "redux/actions/main";

// Components
import { TextField } from "components/atoms";
import { ButtonForm } from "components/molecules";

// Custom Hooks
import { useForm, usePushRoute } from "hooks";

const PhotoForm = ({ description, next_path }) => {
    const { onPushRoute } = usePushRoute(next_path);
    const dispatch = useDispatch();
    const { formData: { photo }, handleChangeWithoutValidations, handleSubmit } =
    useForm(
        {
            initialState: {
                photo: "",
            },
            validations: {
                photo: {
                    required: false, 
                    type: "text",
                },
            },
        },
        (formData) => dispatch(saveData("photo", formData.photo, onPushRoute))
    );

    const handleChange = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        handleChangeWithoutValidations("photo", url)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type="file"
                bgColor="grayMain"
                spacing={2}
                name="photo"
                onChange={handleChange}
                label={description}
            />

            {photo && <Image width={300} height={150} src={photo} />}

            <ButtonForm />
        </form>
    );
};

PhotoForm.propTypes = {
    description: PropTypes.string,
    next_path: PropTypes.string,

};


export default PhotoForm;