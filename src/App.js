import React, { useContext } from 'react';
 // Import ThemeProvider
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from './contexts/ThemeContext'; // Import ThemeContext
// import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Experience from './components/Experience';
import ThreeDModel from './components/ThreeDModel';
import { FaSun, FaMoon } from 'react-icons/fa';

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
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
  const { darkMode, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

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
            <NavItem href="#blog">Blog</NavItem>
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
          <AboutMe>
            <Text>
              I'm a passionate developer focused on building visually stunning websites and providing
              an exceptional user experience.
            </Text>
          </AboutMe>
        </Section>

        {/* Experience Timeline */}
        <Section>
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

        {/* Blog Section */}
        <Section id="blog">
          <Blog />
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <Contact />
        </Section>

        {/* Footer */}
        <Footer>
          <FooterText>© 2024 Your Name - All Rights Reserved.</FooterText>
          <SocialMedia>
            <SocialLink href="https://twitter.com" target="_blank">
              Twitter
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com" target="_blank">
              GitHub
            </SocialLink>
          </SocialMedia>
        </Footer>
      </Container>
    </StyledThemeProvider>
  );
}

export default App;

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
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
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
`;

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.body};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
`;

const AboutMe = styled.div`
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.body};
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
