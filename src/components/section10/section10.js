import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #1e3c72, #f56b2a);
  color: #ffffff;
  text-align: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const LinkButton = styled.a`
  text-decoration: none;
  background: #ff5722;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #1e3c72;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;

const VideoContainer = styled.div`
  margin: 2rem 0;
  max-width: 800px;
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }
`;

const Instructions = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  color: #ffffff;
  text-align: left;
  max-width: 100%;
  width: 100%;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #ffd700;
  }
    code{
    color: #ff5722;
    }
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ProjectSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Project Resources</SectionHeader>
      <LinksContainer>
        <LinkButton href="https://github.com/sriharired/IHM" target="_blank" rel="noopener noreferrer"> 
          View Code
        </LinkButton>

      </LinksContainer>
      <Instructions>
        <h3>Instructions</h3>
        <p>
          1. Clone the repository from the link provided by using  <code> git clone "enter-git-link-here"</code><br />
          2. Install the required dependencies by running <code>npm install</code>.<br />
          3. Start the development server using <code>npm run start</code>.<br />
        </p>
      </Instructions>
      <VideoContainer>
        <iframe
          src="https://youtu.be/TEpicQc7cWc?si=8QZE4g1z-UpZxvJ2"
          title="Project Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </SectionWrapper>
  );
};

export default ProjectSection;
