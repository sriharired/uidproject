import React from 'react';
import styled from 'styled-components';

const cardsData = [
  {
    id: 1,
    name: 'HTML',
    description: 'The standard markup language for creating web pages.',
    image: 'html-5.png',
  },
  {
    id: 2,
    name: 'CSS',
    description: 'A style sheet language used for describing the look of a document',
    image: 'css-3.png',
  },
  {
    id: 3,
    name: 'JavaScript',
    description: 'A versatile programming language for web development.',
    image: 'js.png',
  },
  {
    id: 4,
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 engine.',
    image: 'nodejs.png',
  },
  {
    id: 5,
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    image: 'react.png',
  },
];

const Technologies = () => {
  return (
    <Wrapper>
      <Heading>Technologies</Heading>
      <Section>
        {cardsData.map((card) => (
          <Card key={card.id}>
            <CardImageWrapper>
              <CardImage src={`${process.env.PUBLIC_URL}/`+ card.image} alt={card.name} />
            </CardImageWrapper>
            <CardContent>
              <CardTitle>{card.name}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </Section>
    </Wrapper>
  );
};

export default Technologies;

const Wrapper = styled.div`
  padding: 30px;
  background-color: #f0f2f5; /* Light gray background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  margin: 5%;
  font-size: 2em;
  color: #333333;
  margin-bottom: 30px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: 260px;
  margin: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #f7f7f7; 
`;

const CardImage = styled.img`
  width: 60%;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.25em;
  color: #111111;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: #555555;
  line-height: 1.5;
`;
