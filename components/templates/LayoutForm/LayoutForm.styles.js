import styled from "styled-components";
import { device } from "utils/device";

export const ContainerLayout = styled.div`
    background: ${(props) => props.theme.colors.gray};
    padding: 1rem;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    @media ${device.tablet} {
        justify-content: center;
        padding: 1.5rem 3rem;
    }
`;

export const ContainerForm = styled.div`
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
`;

export const ContainerSumary = styled.div`
    padding: 1rem;
    width: 60%;
    margin: 0 auto;
    display: none;

    @media ${device.laptop} {
        display: block;
    }
`;