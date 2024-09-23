import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: cadetblue;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center;
  margin: 10px;


  @media (min-width: 1024px ) {
    text-align: left;
    margin: 0 20px 0 0;
  }
`;

const ImageWrapper = styled.div`

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  img {
    max-width: 80%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
    @media (min-width: 769px) and (max-width: 1023px){
       max-width: 50%
    }
`;

const Heading = styled.h1`
  font-size: 1.0rem;
  color: #1b1b1b;
  margin-bottom: 20px;
  text-decoration: underline;
  text-align: center;
  @media (min-width: 1024px){
    text-align: left;
    font-size: 2.0rem;
  }
`;

const Introduction = styled.p`
  font-size: 0.6rem;
  line-height: 1.2;
  color: #333;
  text-align: justify;
    @media (min-width: 1024px){
      font-size: 1.3rem;
  }
`;

const ProejctDescription = () => {
  return (
    <Section id='projectdescription'>
      <Content>
        <Heading>Project Description</Heading>
        <Introduction>
            The intention of this project is to investigate and evaluate important mythical figures found in Indian epics such as the Puranas, the Ramayana, and the Mahabharata. 
            This focuses on comprehending the moral principles, cultural relevance, and symbolism embodied by figures such as Draupadi, Shiva, Parvati, Rama, Krishna, Arjuna, and others. 
            The project aims to provide a more profound knowledge of India's unique mythological past by highlighting how these figures have affected Indian history, traditions, and morals through a combination of textual research, art, and multimedia storytelling.
        </Introduction>
      </Content>
      <ImageWrapper>
        <img src={`${process.env.PUBLIC_URL}/karna.png`} alt="Sample" />
      </ImageWrapper>
    </Section>
  );
};

export default ProejctDescription;
