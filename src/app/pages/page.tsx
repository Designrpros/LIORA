'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Waveform from '../../components/Waveform'; // Adjust path as needed
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Using react-icons
import About from './about/page'; // Import your actual About component
import Projects from './projects/page'; // Import your actual Projects component
import Contact from './contact/page'; // Import your actual Contact component

const AuroraB = "/AuroraB.jpeg";
const flows = "/flows.png"; // Define flows for FlowerBackground

// Define Home content inline
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
  const [currentPage, setCurrentPage] = useState('/'); // State for manual navigation

  const getContent = () => {
    switch (currentPage) {
      case '/about':
        return <About setCurrentPage={setCurrentPage} />;
      case '/projects':
        return <Projects setCurrentPage={setCurrentPage} />;
      case '/contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case '/':
      default:
        return <HomeContent />;
    }
  };

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
          <TabButton onClick={() => setCurrentPage('/')}>Home</TabButton>
          <TabButton onClick={() => setCurrentPage('/about')}>About</TabButton>
          <TabButton onClick={() => setCurrentPage('/projects')}>Projects</TabButton>
          <TabButton onClick={() => setCurrentPage('/contact')}>Contact</TabButton>
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
  text-align: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  border: 8px solid #000000;  /* Added border */
  box-sizing: border-box;      /* Ensures border doesn't affect layout */
  padding-bottom: 80px;        /* Space for bottom navigation */
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
  font-size: 3.5rem; /* Larger font size */
  font-weight: bold;
  color: #333;
  margin-top: 160px; /* Increased margin-top to push the title even closer to the Polaroid */
  margin-bottom: 15px; /* Further reduced margin-bottom */
  text-transform: uppercase;
  z-index: 1; /* Above flower background */
`;

const CustomTabBar = styled.div`
  display: flex;
  gap: 18px; /* Reduced gap between tabs */
  margin-bottom: 25px; /* Reduced margin-bottom for tabs */
  z-index: 1; /* Above flower background */
`;

const TabLink = styled.a`
  font-size: 1.3rem; /* Slightly larger font size */
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
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
`;

const TabButton = styled.button`
  font-size: 1.3rem; /* Larger font size */
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
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PolaroidWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px; /* Reduced margin to bring content closer */
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
`;

const Caption = styled.p`
  margin-top: 8px; /* Reduced margin to tighten spacing */
  font-size: 1rem;
  color: #555;
  text-transform: uppercase;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px; /* Reduced gap between icons */
  margin-top: 25px; /* Reduced margin-top for better spacing */
  margin-bottom: 30px; /* Reduced margin-bottom to bring it closer to the bottom */
`;

const SocialLink = styled.a`
  font-size: 1.7rem; /* Larger social icon size */
  color: #333;

  &:hover {
    color: #555;
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
`;