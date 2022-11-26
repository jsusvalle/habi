import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { useRouter } from 'next/router';

import { ContainerStepper, StepperStep, StepperIndicator, StepperIndicatorNumber, StepperLabel } from "./Stepper.styles";
import { IconCheck } from "public/assets/icons";

const Stepper = ({ steps }) => {
    const router = useRouter();
    const { step: stepPath } = router.query;

    const currentStep = useMemo(() => steps.find(p => p.path === stepPath), [steps, stepPath]);

    const isActive = (path) => path === stepPath;

    const isCompleted = (path, step) => (path !== stepPath) && currentStep?.step > step;

    return (
        <ContainerStepper>
            {steps.map(({step, path}) => (
                <StepperStep key={step}>
                    <StepperIndicator>
                        <StepperIndicatorNumber active={isActive(path)} completed={isCompleted(path, step)}>
                            {isCompleted(path, step) ? <IconCheck /> : step}
                        </StepperIndicatorNumber>
                    </StepperIndicator>

                    <StepperLabel active={isActive(path)} completed={isCompleted(path, step)}>
                        Paso {step}
                    </StepperLabel>
                </StepperStep>
            ))}
        </ContainerStepper>
    );
};

Stepper.propTypes = {
    steps: PropTypes.array,
};

export default Stepper;
