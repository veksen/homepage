// @flow

import React from "react";

type Props = {
  className?: string
};

const Logo = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 316.01 262.05"
      style={{ width: "200px" }}
    >
      <defs />
      <path fill="#d71b1b" d="M27.72 0h262.05v262.05H27.72z" />
      <g id="JP">
        <path d="M201.08 62.49l28.49 12.48L147.62 262l-33.97.05 87.43-199.56z" fill="#ffffff" />
        <path
          d="M315.41 78.19a60 60 0 1 0-51 67.77 60 60 0 0 0 51-67.77zm-55.36 37a30.47 30.47 0 0 1-3.14.27h-45.08l17.59-40.14a28.88 28.88 0 1 1 30.63 39.85zM114.93 199.56l-28.49-12.48L168.39.05 202.35 0l-87.42 199.56z"
          fill="#ffffff"
        />
        <path d="M59.08 115.48h195v31.1h-195z" fill="#ffffff" />
        <path
          fill="#ffffff"
          d="M119.39 167.11a60 60 0 1 0-51 67.77 60 60 0 0 0 51-67.77zM86.56 186.8a1.42 1.42 0 0 1-.08.18v.1A28.88 28.88 0 1 1 56 146.89a30.47 30.47 0 0 1 3.14-.27h45.08z"
        />
      </g>
    </svg>
  );
};

export default Logo;
