'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Kontakt</Title>
        <Description>
          LIORA er alltid åpen for samarbeid og prosjekter. For forespørsler om samarbeid eller konserter, vennligst ta kontakt.
        </Description>
        <Email href="mailto:liora@example.com">liora@example.com</Email>
      </Content>
      <BottomNav>
        <TabLink href="/about">Om</TabLink>
        <TabLink href="/projects">Utgivelser</TabLink>
        <TabLink href="/contact">Kontakt</TabLink>
        <ExternalTabLink href="https://studio51.vercel.app" target="_blank">
          Studio 51
        </ExternalTabLink>
      </BottomNav>
      <Footer>
        © {new Date().getFullYear()} Studio 51. All rights reserved.
      </Footer>
    </Container>
  );
};

export default Contact; // Default export

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

const Email = styled.a`
  font-size: 20px;
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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

const TabLink = styled(Link)`
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