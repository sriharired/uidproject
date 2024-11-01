import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  background-color: lightblue;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  font-size: 1.2em;
  border: 2px solid #3498db;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #3498db;
    color: white;
  }
`;

const PaperPrototype = () => {
  return (
    <Section>
      <Heading>Paper Prototyping & Low-fidelity Testing </Heading>
      <Paragraph>Click the link below to access the PDF file:</Paragraph>
      <Link 
        href="https://drive.google.com/file/d/1vFHM4LDja55uXADTh6Gdn0OpOFsT_B_q/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View PDF
      </Link>
    </Section>
  );
};

export default PaperPrototype ;
