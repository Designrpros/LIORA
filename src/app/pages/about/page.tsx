// About.tsx

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface AboutProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <Container>
      <Content>
        <ImageWrapper>
          <CircularImageWrapper>
            <Image 
              src="/AuroraB.jpeg" // Directly reference image from public folder
              alt="Liora"
              width={150}
              height={150}
              style={{ borderRadius: '50%' }} 
            />
          </CircularImageWrapper>
        </ImageWrapper>
        <Title>Om LIORA</Title>
        <Description>
          Liora er en norsk singer-songwriter som er kjent for sin eteriske stemme og naturinspirerte lydlandskap.
          Født og oppvokst i de vakre landskapene i Norge, oppdaget hun sin lidenskap for musikk i ung alder og lot seg inspirere
          av den stille majesteten i skogene og fjordene. Med en blanding av drømmende pop, folkemusikk og elektroniske elementer,
          tilbyr musikken hennes en intim reise inn i hjerte og sjel.
          <br /><br />
          Hennes nyeste utgivelse eksemplifiserer hennes forpliktelse til ærlig og hjertelig kunstnerisk uttrykk.
          Lioras arbeid handler ikke bare om melodi, men også om å skape forbindelse – å knytte mennesker til naturen og til hverandre
          gjennom stemningsfulle tekster og fengslende opptredener.
          <br /><br />
          Hennes studio, Studio51, er hjertet i den kreative prosessen og bidrar sterkt til produksjonen av hennes unike lyd.
        </Description>
      </Content>
      <BottomNav>
        <NavLink href="/about">Om</NavLink>
        <NavLink href="/projects">Utgivelser</NavLink>
        <NavLink href="/contact">Kontakt</NavLink>
        <ExternalTabLink href="https://studio51.vercel.app" target="_blank">Studio 51</ExternalTabLink>
      </BottomNav>
      <Footer>
        © {new Date().getFullYear()} Studio 51. All rights reserved.
      </Footer>
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #000000;
  font-family: 'Inter', sans-serif;
  text-align: center;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 20px 40px 80px; /* Horizontal padding and space for fixed bottom navigation */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 150px auto 0 auto; /* Increased margin-top to push content further down */
  padding: 20px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

const CircularImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: 5px solid #000; /* Adding border */
  
  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 8px solid #000000;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  z-index: 2;
`;

const NavLink = styled.a`
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ExternalTabLink = styled.a`
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  z-index: 1;
  margin-top: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;