import styled, { keyframes } from "styled-components";
import theme from "styles/theme";

const loaderAnimation = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
export const CircleLoader = styled.div`
  display: inline-block;
  margin-right: ${(props) => (props.isIconButton ? "10px" : "0")};
  width: ${(props) => props.width + 10}px;
  &:after {
    content: " ";
    display: block;
    width: ${(props) => props.width}px;
    height: ${(props) => props.width}px;
    margin: 0;
    border-radius: 50%;
    border: 6px solid ${(props) => theme.colors[props.color]};
    border-color: ${(props) => theme.colors[props.color]} transparent
      ${(props) => theme.colors[props.color]} transparent;
    animation: ${loaderAnimation} 1.2s linear infinite;
  }
`;
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: auto;
  padding-top: ${(props) => props.paddingTop};
`;
