import styled from "styled-components";
import { device } from "utils/device";

export const FloatContainer = styled.button`
    position: fixed;
    width: 6rem;
    height: 40px;
    bottom: 40px;
    right: 40px;
    background-color: ${(props) => props.theme.colors.purple};
    color: #FFF;
    border-radius: 0.5rem;
    text-align: center;
    display: block;
    cursor: pointer;
    border: none;

    @media ${device.laptop} {
        display: none;
    }
`;

