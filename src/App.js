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
import profileImage from './profile.jpg';

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.3s linear;
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
          <HeroText>
            <h1>Hi, I'm a Web Developer</h1>
            <p>Building modern, responsive web applications that delight users.</p>
          </HeroText>
          <ThreeDModel />
        </Hero>

        {/* About Me Section */}
        <Section id="about">
          <SectionTitle>About Me</SectionTitle>
          <AboutMeContainer>
            <ProfileImage src={profileImage} alt="profile" />
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
          </AboutMeContainer>
        </Section>

        {/* Experience Section */}
        <Section id="experience">
          <Experience />
        </Section>

        {/* Portfolio Section */}
        <Section id="portfolio">
          <Portfolio />
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials">
          <Testimonials />
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
const Container = styled.div`
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.body};
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
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

  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  margin-top: 60px; /* Adjust to account for fixed header */
`;

const HeroText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.accent};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.secondaryText};
  }

  @media (max-width: 768px) {
    text-align: center;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
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
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
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

const AboutText = styled.div`
  max-width: 600px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondaryText};

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillItem = styled.div`
  text-align: center;
`;

const SkillIcon = styled.div`
  margin-bottom: 0.5rem;
`;

const SkillName = styled.div`
  font-weight: bold;
`;

const SkillLevel = styled.div`
  color: ${({ theme }) => theme.secondaryText};
`;

const Footer = styled.footer`
  padding: 2rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
`;

const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const SocialMedia = styled.div`
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  margin: 0 0.5rem;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
