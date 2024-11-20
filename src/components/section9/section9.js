import React from "react";
import styled from "styled-components";

const StyledIframe = styled.iframe`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 450px;
`;

const Heading = styled.h3`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;


const ComputerPrototype = () => {
  return (
    <div>
        <Heading>Computer Prototype</Heading>
      <StyledIframe
        src="https://embed.figma.com/proto/jXSRgjIK00FjxQfjATJt96/UID-Project?page-id=0%3A1&node-id=2-6&node-type=canvas&viewport=158%2C117%2C0.12&scaling=contain&content-scaling=fixed&starting-point-node-id=2%3A6&embed-host=share"
        title="Figma Design"
        allowFullScreen
      />
    </div>
  );
};



export default ComputerPrototype;
