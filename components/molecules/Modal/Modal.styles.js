import styled from "styled-components";

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: ${props => props.active ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)'};
	padding: 1rem;
	display: flex;
	align-items: ${props => props.position ? props.position : 'center'};
	justify-content: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
	width: 100%;
	min-height: 100px;
	background: #fff;
	position: relative;
	border-radius: 5px;
	box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
	padding: ${props => props.padding ? props.padding : '20px'};
`;

export const HeadModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #E8E8E8;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 15px;
	right: 20px;
    width: 60px;
    height: 40px;
	border: none;
	background: none;
	cursor: pointer;
	transition: .3s ease all;
	border-radius: 5px;
	color: #000;
	&:hover {
		background: #f2f2f2;
	}
	svg {
		width: 100%;
		height: 100%;
	}
`;