import React from "react";
import PropTypes from "prop-types";
import { useRouter } from 'next/router';

import { ContainerLayout, ContainerForm, ContainerSumary } from "./LayoutForm.styles";

import { SumaryData, DataForm, ModalSumary } from "components/organism";

const LayoutForm = ({ steps }) => {
    const router = useRouter();
    const { step: stepPath } = router.query;

    return (
        <ContainerLayout>
            <ContainerForm>
                <DataForm steps={steps} />
            </ContainerForm>

            {stepPath !== "datos-resumen" && (
                <ModalSumary />
            )}

            {stepPath !== "datos-resumen" && (
                <ContainerSumary>
                    <SumaryData />
                </ContainerSumary>
            )}
        </ContainerLayout>
    );
};

LayoutForm.propTypes = {
    steps: PropTypes.array,
};

export default LayoutForm;
