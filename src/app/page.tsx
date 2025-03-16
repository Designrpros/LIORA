'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Waveform from '../components/Waveform';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';

const AuroraB = "/AuroraB.jpeg";
const flows = "/flows.png";

const HomeContent = () => (
  <MainContent>
    <PolaroidWrapper>
      <Waveform />
      <PolaroidFrame>
        <Image 
          src={AuroraB} 
          alt="Polaroid" 
          width={320} 
          height={320}
          priority
        />
        <Caption><strong>LIORA</strong></Caption>
      </PolaroidFrame>
    </PolaroidWrapper>
    <SocialIcons>
      <SocialLink href="https://facebook.com" target="_blank"><FaFacebookF /></SocialLink>
      <SocialLink href="https://twitter.com" target="_blank"><FaTwitter /></SocialLink>
      <SocialLink href="https://instagram.com" target="_blank"><FaInstagram /></SocialLink>
    </SocialIcons>
  </MainContent>
);

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('/');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getContent = () => {
    switch (currentPage) {
      case '/about':
        return <About />;
      case '/projects':
        return <Projects />;
      case '/contact':
        return <Contact />;
      case '/':
      default:
        return <HomeContent />;
    }
  };

  if (!isMounted) return null;

  return (
    <Container>
      <FlowerBackground />
      {currentPage === '/' && <Title>LIORA</Title>}
      {currentPage === '/' && (
        <CustomTabBar>
          <TabLink onClick={() => setCurrentPage('/about')}>OM</TabLink>
          <TabLink onClick={() => setCurrentPage('/projects')}>UTGIVELSER</TabLink>
          <TabLink onClick={() => setCurrentPage('/contact')}>KONTAKT</TabLink>
          <TabLink href="https://studio51.vercel.app" target="_blank">STUDIO 51</TabLink>
        </CustomTabBar>
      )}
      {getContent()}
      {currentPage !== '/' && (
        <TabBar>
          <TabButton onClick={() => setCurrentPage('/')}>Hjem</TabButton>
          <TabButton onClick={() => setCurrentPage('/about')}>Om</TabButton>
          <TabButton onClick={() => setCurrentPage('/projects')}>Utgivelser</TabButton>
          <TabButton onClick={() => setCurrentPage('/contact')}>Kontakt</TabButton>
        </TabBar>
      )}
      <Footer>© {new Date().getFullYear()} STUDIO 51. ALL RIGHTS RESERVED.</Footer>
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  background-color: #f9f9f9;
  position: relative;
  overflow-y: auto; /* Enable scrolling */
  padding-bottom: 80px; /* Make room for footer and tab bar */
  width: 100vw;

  @media (max-width: 768px) {
    padding-bottom: 60px;
  }
`;

const FlowerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 0;

  @media (max-width: 480px) {
    background-size: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 160px;
  margin-bottom: 15px;
  text-transform: uppercase;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 120px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-top: 80px;
  }
`;

const CustomTabBar = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 25px;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const TabLink = styled.a`
  font-size: 1.3rem;
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 8px 12px;
  }
`;

const TabBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    padding: 8px 0;
    gap: 8px;
  }
`;

const TabButton = styled.button`
  font-size: 1.3rem;
  color: #333;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #0070f3;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  text-align: center;
  margin-bottom: 80px; /* Add margin to avoid footer overlap */
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const PolaroidWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const PolaroidFrame = styled.div`
  width: 320px;
  height: 320px;
  background: white;
  border: 10px solid #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const Caption = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  color: #555;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 25px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 15px;
  }
`;

const SocialLink = styled.a`
  font-size: 1.7rem;
  color: #333;

  &:hover {
    color: #555;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Footer = styled.footer`
  font-size: 0.9rem;
  color: #777;
  text-transform: uppercase;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;