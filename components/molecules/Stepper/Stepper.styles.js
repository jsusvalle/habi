import styled from "styled-components";

export const ContainerStepper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    overflow-x: auto;
`;

export const StepperStep = styled.div`
    position: relative;
    text-align: center;
    padding: 0.5rem;
    flex-basis: 100%;

    &:after {
        content: " ";
        position: absolute;
        left: 50%;
        top: 1.5rem;
        width: 100%;
        height: 0.125rem;
        background-color: #e3e8ec;
        z-index: 1;
    }

    &:last-child:after {
        display: none;
    }
`;

export const StepperIndicator = styled.div`
    position: relative;
    display: block;
    z-index: 2;
`;

export const StepperIndicatorNumber = styled.span`
    border-color: ${(props) => props.completed ? "#4caf50" : props.active ?"#627c90" : "#e3e8ec"};
    background-color: ${(props) => props.completed ? "#4caf50" : props.active ? "#627c90" : "#e3e8ec"};
    cursor: initial;

    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid #e3e8ec;
    border-radius: 50%;
    font-size: 1rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
    z-index: 2;
`;


export const StepperLabel = styled.div`
    color: ${(props) => props.completed ? "#4caf50" : props.active ?"#627c90" : "#cfd7de"};
    position: relative;
    display: block;
    margin: 0.5rem 0;
    z-index: 2;
`;