import React from "react";

export const IconSearch = ({ color = "#000", width = "18", height = "18" }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 1.3C3.70899 1.3 1.3 3.70899 1.3 6.75C1.3 9.79102 3.70899 12.2 6.75 12.2C9.79102 12.2 12.2 9.79102 12.2 6.75C12.2 3.80204 9.78411 1.3 6.75 1.3ZM0 6.75C0 2.99101 2.99101 0 6.75 0C10.5159 0 13.5 3.09796 13.5 6.75C13.5 10.509 10.509 13.5 6.75 13.5C2.99101 13.5 0 10.509 0 6.75Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6786 10.6025C10.9257 10.3421 11.3371 10.3314 11.5975 10.5786L17.4975 16.1786C17.7579 16.4257 17.7686 16.8371 17.5214 17.0975C17.2743 17.3579 16.8629 17.3686 16.6025 17.1214L10.7025 11.5214C10.4421 11.2743 10.4314 10.8629 10.6786 10.6025Z"
      fill={color}
    />
  </svg>
);

export const IconCheck = ({ color = "#fff", width = "14", height = "14" }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 490 490`}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill={color} d="M452.253 28.326L197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z">
    </path>
  </svg>
);