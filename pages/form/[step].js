import React from "react";
import PropTypes from "prop-types";

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

import { LayoutForm } from "components/templates";

const FormPage = ({ steps }) => {
    return (
        <LayoutForm steps={steps} />
    );
};

export const getStaticPaths = async () => ({
    paths: [],
    fallback: 'blocking' 
})

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'steps.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData,
    }
}

FormPage.propTypes = {
    steps: PropTypes.array,
};

export default FormPage;

