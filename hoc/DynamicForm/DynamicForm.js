import React from "react";
import PropTypes from "prop-types";

import { useRouter } from 'next/router';

import { TextForm, EmailForm, NumFloorsForm, AptOptionsForm, ParkingLotForm, AmountForm, PhotoForm, ElevatorForm } from "components/organism/Forms";
import SumaryData from "components/organism/SumaryData/SumaryData";

const formToRender = {
    TextForm: TextForm,
    EmailForm: EmailForm,
    AddressForm: TextForm,
    NumFloorsForm: NumFloorsForm,
    AptOptionsForm: AptOptionsForm,
    ParkingLotForm: ParkingLotForm,
    AmountForm: AmountForm,
    PhotoForm: PhotoForm,
    ElevatorForm: ElevatorForm,
    SumaryData: SumaryData
}

const DynamicForm = ({ steps }) => {
    const router = useRouter();
    const { step: stepPath } = router.query;
    
    const findStep = steps.find((p) => p.path === stepPath);
    
    let Component = findStep ? formToRender[findStep.component] : null;

    return Component && (
        <>
            {stepPath !== "datos-resumen" && (
                <h2>Completa los datos</h2>
            )}
            <Component {...findStep} />
        </>
    );
};

DynamicForm.propTypes = {
    steps: PropTypes.array,
};

export default DynamicForm;
