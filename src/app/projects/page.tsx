'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; // Importing Link from next.js

const songs = [
  { id: 1, title: 'to late', videoId: 'AzZ2ozYxzm0' },
  { id: 2, title: 'bad company', videoId: '4_g7kwFEypg' },
  { id: 3, title: 'alt vi hadde', videoId: 'N-Vtvw7bFBQ' },
  { id: 4, title: 'raknet bort', videoId: 'yCCH6h8lTcg' },
  { id: 5, title: 'wanted me first', videoId: '98MbQTW9sKE' },
  { id: 6, title: 'blanke ark', videoId: 'JeQkgg3uUQc' },
  { id: 7, title: 'fly', videoId: 'FMUOy4SaeyQ' },
  { id: 8, title: 'igjen og igjen', videoId: 'CymZA4NYUw0' },
  { id: 9, title: 'Casual', videoId: 'igHZG1YyBXI' },
];

const Projects: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Utgivelser</Title>
        <Description>
          Utforsk LIORAs utgivelser – en reise gjennom hennes unike, drømmende pop- og folkemusikk med et snev av elektronikk.
          Her finner du en oversikt over hennes musikkutgivelser.
        </Description>
        <SongsGrid>
          {songs.map((song) => (
            <SongCard key={song.id} href={`https://www.youtube.com/watch?v=${song.videoId}`} target="_blank">
              <Thumbnail src={`https://img.youtube.com/vi/${song.videoId}/hqdefault.jpg`} alt={song.title} />
              <SongTitle>{song.title}</SongTitle>
            </SongCard>
          ))}
        </SongsGrid>
      </Content>
      <BottomNav>
        <NavLink href="/about">Om</NavLink> {/* Norwegian translation for About */}
        <NavLink href="/projects">Utgivelser</NavLink> {/* Norwegian translation for Projects */}
        <NavLink href="/contact">Kontakt</NavLink> {/* Norwegian translation for Contact */}
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

export default Projects;

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

const SongsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const SongCard = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const SongTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
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

const NavLink = styled(Link)` /* Using Link component for client-side navigation */
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