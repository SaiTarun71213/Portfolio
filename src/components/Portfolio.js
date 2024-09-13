import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Application',
    description: `Built a full-featured e-commerce platform using Angular and TypeScript, enabling users to browse over 1,000 products, 
      add items to the cart, and proceed to checkout, resulting in a 30% increase in user engagement. Designed a responsive and interactive user 
      interface using Angular components and services, enhancing navigation across 15+ product categories and pages, facilitating in a 25% 
      improvement in user satisfaction. Utilized Angular’s built-in forms and reactive programming to handle user inputs and validate over 10,000 forms, 
      providing real-time feedback during checkout and reducing form submission errors by 20%.`,
    imageUrl: '/images/ecommerce.jpg' // Add an appropriate image for this project
  },
  {
    title: 'Book Recommendation System',
    description: `Created a personalized book recommendation system that improved recommendation accuracy by 40%, enhancing user engagement. 
      Established user authentication, a responsive home page, and tailored recommendations, enhancing user experience and engagement.`,
    imageUrl: '/images/book-recommendation.jpg' // Add an appropriate image for this project
  },
  {
    title: 'Weather Monitoring System',
    description: `Established an IoT-based system using Arduino to monitor weather conditions such as temperature, humidity, and pressure, 
      achieving data accuracy within ±2% and reliability over 90%. Deployed sensors to collect real-time data and wirelessly transmit it to a cloud-based 
      platform, successfully handling with an uptime of 99.5%. Devised a user-friendly web interface to display weather data and trends, enhancing accessibility 
      and data visualization.`,
    imageUrl: '/images/weather-monitoring.jpg' // Add an appropriate image for this project
  }
];

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <SectionTitle>My Work</SectionTitle>
      <PortfolioGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <CardImage src={project.imageUrl} alt={project.title} /> */}
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </ProjectCard>
        ))}
      </PortfolioGrid>
    </PortfolioSection>
  );
};

const PortfolioSection = styled.div`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.portfolioBackground}; // Use theme variable
  color: ${({ theme }) => theme.text};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 3rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground}; // Use theme variable
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.cardTitle}; // Use theme variable
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.cardDescription}; // Use theme variable
  text-align: justify; // Ensures the description text is justified
`;

export default Portfolio;
