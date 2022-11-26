import React, { useState } from "react";
import PropTypes from "prop-types";

import { FloatButton, Modal } from "components/molecules";
import { SumaryData } from "components/organism";

const ModalSumary = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Modal title="Resumen" active={open} onClose={() => setOpen(false)}>
                <SumaryData />
            </Modal>

            <FloatButton onClick={() => setOpen(true)}>Resumen</FloatButton>
        </>
    );
};

ModalSumary.propTypes = {
    steps: PropTypes.array,
};

export default ModalSumary;
