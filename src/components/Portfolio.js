import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project One', description: 'A stunning project.', imageUrl: '/images/project1.jpg' },
  { title: 'Project Two', description: 'Another cool project.', imageUrl: '/images/project2.jpg' },
  { title: 'Project Three', description: 'Yet another one.', imageUrl: '/images/project3.jpg' },
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
            <CardImage src={project.imageUrl} alt={project.title} />
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
  background-color: #1a1a1a;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #feb47b;
  margin-bottom: 3rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #282828;
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
  color: #00f2fe;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

export default Portfolio;
