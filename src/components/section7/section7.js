// Storyboards.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEye, FaDownload } from 'react-icons/fa'; // Importing icons from React Icons

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #f7f7f7; // Background color for the section
`;

const StoryboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 80%;
`;

const Storyboard = styled.div`
  background-color: #e1f5fe; // Light blue background for storyboard
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease forwards;
  opacity: 0; // Initial opacity for fade-in effect

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(1) {
    background-color: #cfd8dc; // Light grey
  }

  &:nth-child(2) {
    background-color: #b2ebf2; // Light cyan
  }

  &:nth-child(3) {
    background-color: #ffccbc; // Light orange
  }

  &:nth-child(4) {
    background-color: #ffe0b2; // Light peach
  }
`;

const Title = styled.h3`
  color: #37474f; // Dark grey for title
`;

const Content = styled.p`
  color: #546e7a; // Medium grey for content
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.a`
  background: linear-gradient(90deg, #2196f3, #21cbf3); // Blue gradient background
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center; // Center items vertically
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  animation: ${slideUp} 0.5s ease forwards;
  opacity: 0; // Initial opacity for slide-up effect

  &:hover {
    background: linear-gradient(90deg, #1976d2, #1e88e5); // Darker gradient on hover
    transform: translateY(-5px) rotate(2deg); // Move upward and slightly rotate
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Shadow effect on hover
  }

  &:nth-child(1) {
    animation-delay: 0.1s; // Delay for view button
  }

  &:nth-child(2) {
    animation-delay: 0.2s; // Delay for download button
  }
`;

const Icon = styled.span`
  margin-right: 5px; // Space between icon and text
  transition: transform 0.2s; // Animation for icon
  display: flex;
  align-items: center; // Center icon vertically

  ${Button}:hover & {
    transform: scale(1.2); // Scale up the icon on hover
  }
`;

const Storyboards = () => {
  return (
    <Section>
      <StoryboardContainer>
        <Storyboard>
          <Title>Storyboard 1</Title>
          <Content>This is the content for storyboard 1.</Content>
          <ButtonContainer>
            <Button href="#download1">
              <Icon>
                <FaDownload /> {/* Download icon */}
              </Icon>
              Download
            </Button>
          </ButtonContainer>
        </Storyboard>
        <Storyboard>
          <Title>Storyboard 2</Title>
          <Content>This is the content for storyboard 2.</Content>
          <ButtonContainer>
            <Button href="#download2">
              <Icon>
                <FaDownload />
              </Icon>
              Download
            </Button>
          </ButtonContainer>
        </Storyboard>
        <Storyboard>
          <Title>Storyboard 3</Title>
          <Content>This is the content for storyboard 3.</Content>
          <ButtonContainer>
            <Button href="#download3">
              <Icon>
                <FaDownload />
              </Icon>
              Download
            </Button>
          </ButtonContainer>
        </Storyboard>
        <Storyboard>
          <Title>Storyboard 4</Title>
          <Content>This is the content for storyboard 4.</Content>
          <ButtonContainer>
            <Button href="#download4">
              <Icon>
                <FaDownload />
              </Icon>
              Download
            </Button>
          </ButtonContainer>
        </Storyboard>
      </StoryboardContainer>
    </Section>
  );
};

export default Storyboards;
