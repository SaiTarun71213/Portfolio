import React, { useContext } from 'react';
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from './contexts/ThemeContext';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import ThreeDModel from './components/ThreeDModel';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaAngular, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from 'react-icons/fa';

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s linear;
    margin: 0;
    padding: 0;
  }
`;

// Light and Dark themes
const lightTheme = {
  body: '#ffffff',
  text: '#121212',
  accent: '#feb47b',
  secondaryText: '#555',
};

const darkTheme = {
  body: '#121212',
  text: '#ffffff',
  accent: '#ff7e5f',
  secondaryText: '#ccc',
};

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo>My Portfolio</Logo>
          <Nav>
            <NavItem href="#about">About Me</NavItem>
            <NavItem href="#portfolio">Portfolio</NavItem>
            <NavItem href="#testimonials">Testimonials</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </Nav>
          <ThemeToggle onClick={toggleTheme}>
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </ThemeToggle>
        </Header>

        {/* Hero Section */}
        <Hero>
          <HeroContent>
            <HeroText>
              <h1>Hi, I'm a Web Developer</h1>
              <p>Building modern, responsive web applications that delight users.</p>
            </HeroText>
            <ThreeDModel />
          </HeroContent>
        </Hero>

        {/* About Me Section */}
        <Section id="about">
          <SectionTitle>About Me</SectionTitle>
          <AboutMeContainer>
            <ProfileSection>
              <ProfileImage src="path_to_your_image.jpg" alt="Your Photo" />
            </ProfileSection>
            <DescriptionSection>
              <AboutText>
                <p>
                  I'm a passionate web developer with a strong foundation in front-end technologies.
                  I have excellent knowledge of Angular, HTML, CSS, and JavaScript, as well as
                  intermediate-level proficiency in React. Additionally, I have some experience
                  with Spring Boot, making me well-rounded in both front-end and back-end development.
                </p>
                <SkillsGrid>
                  <SkillItem>
                    <SkillIcon><FaAngular color="#DD0031" size={40} /></SkillIcon>
                    <SkillName>Angular</SkillName>
                    <SkillLevel>Expert</SkillLevel>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon><FaHtml5 color="#E34F26" size={40} /></SkillIcon>
                    <SkillName>HTML5</SkillName>
                    <SkillLevel>Expert</SkillLevel>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon><FaCss3Alt color="#1572B6" size={40} /></SkillIcon>
                    <SkillName>CSS3</SkillName>
                    <SkillLevel>Expert</SkillLevel>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon><FaJs color="#F7DF1E" size={40} /></SkillIcon>
                    <SkillName>JavaScript</SkillName>
                    <SkillLevel>Expert</SkillLevel>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon><FaReact color="#61DAFB" size={40} /></SkillIcon>
                    <SkillName>React</SkillName>
                    <SkillLevel>Intermediate</SkillLevel>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon><FaJava color="#007396" size={40} /></SkillIcon>
                    <SkillName>Spring Boot</SkillName>
                    <SkillLevel>Beginner</SkillLevel>
                  </SkillItem>
                </SkillsGrid>
              </AboutText>
            </DescriptionSection>
          </AboutMeContainer>
        </Section>

        {/* Experience Timeline */}
        <Section>
        <SectionTitle>Experience</SectionTitle>
          <Experience />
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials">
          {/* <SectionTitle>Testimonials & Certifications</SectionTitle> */}
          <Testimonials />
          {/* <Certifications>
            <CertTitle>Certifications</CertTitle>
            <CertList>
              <CertItem>Programming - Data Structures and Algorithms in Python (NPTEL)</CertItem>
              <CertItem>Introduction to Machine Learning (NPTEL)</CertItem>
              <CertItem>SQL Intermediate Certification (HackerRank)</CertItem>
            </CertList>
          </Certifications> */}
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <Contact />
        </Section>

        {/* Footer */}
        <Footer>
          <FooterText>© 2024 Your Name - All Rights Reserved.</FooterText>
          <SocialMedia>
            <SocialLink href="https://twitter.com" target="_blank">Twitter</SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank">LinkedIn</SocialLink>
            <SocialLink href="https://github.com" target="_blank">GitHub</SocialLink>
          </SocialMedia>
        </Footer>
      </Container>
    </StyledThemeProvider>
  );
}

export default App;

// Styled Components

// const Container = styled.div`
//   padding: 0 1rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   @media (max-width: 768px) {
//     padding: 0 0.5rem;
//   }
// `;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 0;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

const Logo = styled.div`
  margin-left: 50px;

  /* Media Queries */
  @media (max-width: 768px) {
    margin-left: 20px; /* Adjust margin for smaller screens */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-wrap: wrap;
  }
`;

const NavItem = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  margin-right: 50px;

  /* Media Queries */
  @media (max-width: 768px) {
    margin-right: 20px; /* Adjust margin for smaller screens */
  }
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;
  }
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 600px;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.accent};
    white-space: nowrap; /* Prevents the text from wrapping */
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.body};
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.accent};
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const DescriptionSection = styled.div`
  flex: 2;
  max-width: 600px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AboutText = styled.div`
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.secondaryText};
    margin-bottom: 1.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

const SkillItem = styled.div`
  text-align: center;
`;

const SkillIcon = styled.div`
  margin-bottom: 0.5rem;
`;

const SkillName = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const SkillLevel = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const Footer = styled.footer`
  padding: 2rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
`;

const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.secondaryText};
`;

const SocialMedia = styled.div`
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Certifications = styled.div`
  text-align: center;
`;

const CertTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
`;

const CertList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CertItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Media Queries */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Container = styled.div`
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px; /* Adjust based on the header height */

  /* Media Queries */
  @media (max-width: 768px) {
    padding-top: 60px; /* Adjust to accommodate smaller header */
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem; /* Reduce horizontal padding on very small screens */
  }
`;
