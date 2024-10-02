import React from "react";
import { SpinnerContainer, Dot, Dot1, Dot2, Dot3, SpinnerSvg } from "../styles";

const Spinner = () => {
  return (
    <div>
      {/* From Uiverse.io by Sourcesketch */}
      <SpinnerContainer>
        <Dot as={Dot1} />
        <Dot as={Dot2} />
        <Dot as={Dot3} />
      </SpinnerContainer>
      <SpinnerSvg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              result="blur"
              stdDeviation="10"
              in="SourceGraphic"
            ></feGaussianBlur>
            <feColorMatrix
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              mode="matrix"
              in="blur"
            ></feColorMatrix>
          </filter>
        </defs>
      </SpinnerSvg>
    </div>
  );
};

export default Spinner;
