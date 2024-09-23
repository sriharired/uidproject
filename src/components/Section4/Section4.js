import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  padding: 50px;
  margin: 20px auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin: 5px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5em;
  color: #E65100;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: underline;
  
  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Details = styled.p`
  font-size: 1.2em;
  color: #424242;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 600px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;



const Problemstatement = () => {
  return (
    <Section id='problemstatement'>
      <Heading>Problem Statement</Heading>
      <Details>
            Many individuals lack a complete knowledge of Indian mythology's rich background due to broken information and current misinterpretations. 
            This online project seeks to build an interesting, visually appealing platform for exploring and presenting significant mythological figures and stories from Indian epics such as the Mahabharata, Ramayana, and Puranas. 
            The website's interactive design, multimedia storytelling, and educational information will make this history more accessible and relevant, increasing users' understanding of the cultural and historical relevance of these mythical individuals.
      </Details>
    </Section>
  );
};

export default Problemstatement;
