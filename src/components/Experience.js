import React from 'react';
import styled from 'styled-components';

const experiences = [
  {
    year: '2022 - Present',
    position: 'Senior Developer',
    company: 'Tech Company',
    description: 'Leading the front-end development team to build scalable web applications.',
  },
  {
    year: '2020 - 2022',
    position: 'Frontend Developer',
    company: 'Web Solutions',
    description: 'Worked on multiple client projects focusing on UI/UX and performance optimization.',
  },
  {
    year: '2018 - 2020',
    position: 'Junior Developer',
    company: 'Creative Agency',
    description: 'Developed small websites and managed content for various clients.',
  },
];

const Experience = () => {
  return (
    <ExperienceSection>
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineYear>{exp.year}</TimelineYear>
            <TimelineContent>
              <Position>{exp.position} - {exp.company}</Position>
              <Description>{exp.description}</Description>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.div`
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

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TimelineYear = styled.div`
  flex: 0 0 150px;
  font-size: 1.5rem;
  color: #00f2fe;
`;

const TimelineContent = styled.div`
  flex-grow: 1;
  padding-left: 1.5rem;
  border-left: 2px solid #00f2fe;
`;

const Position = styled.h4`
  font-size: 1.25rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

export default Experience;
