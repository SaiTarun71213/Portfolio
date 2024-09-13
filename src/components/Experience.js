import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaRegBuilding } from 'react-icons/fa'; // Add icons for visual appeal

const Experience = () => {
  return (
    <ExperienceSection>
      <ExperienceTimeline>
        <ExperienceItem>
          <TimelineIcon><FaRegBuilding size={30} /></TimelineIcon>
          <ExperienceContent>
            <ExperienceRole>Associate Software Developer</ExperienceRole>
            <ExperienceCompany>Brane Enterprises, Hyderabad</ExperienceCompany>
            <ExperienceDate>January 2024 – Present</ExperienceDate>
            <ExperienceDetails>
              <li>Engineered a comprehensive user interface for Page-Builder, enabling flexible landing page creation and customizable styles for individual pages and content elements, offering extensive design control.</li>
              <li>Integrated comprehensive REST APIs throughout the application, ensuring smooth communication between the front-end and back-end components and facilitating efficient data handling.</li>
              <li>Implemented robust authentication and authorization protocols with auth guards, achieving a 30% improvement in system security and user access control.</li>
              <li>Developed over six distinct types of charts using the FusionCharts library, tailoring each chart type to meet specific data visualization needs and requirements.</li>
              <li>Engineered the dashboard interface, integrating multiple charts into a cohesive and user-friendly layout that aggregates over 10 key metrics and insights.</li>
              <li>Customized multi-tabbed dashboards, increasing user efficiency and enhancing the overall user experience with seamless navigation between 10+ different data sets and visualizations.</li>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceItem>

        <ExperienceItem>
          <TimelineIcon><FaCalendarAlt size={30} /></TimelineIcon>
          <ExperienceContent>
            <ExperienceRole>Associate Software Developer Intern</ExperienceRole>
            <ExperienceCompany>Brane Enterprises, Hyderabad</ExperienceCompany>
            <ExperienceDate>April 2023 – December 2023</ExperienceDate>
            <ExperienceDetails>
              <li>Achieved 40% overall code coverage by writing comprehensive test cases for the application, ensuring more robust and maintainable code.</li>
              <li>Increased user flexibility and customization options by 40% by providing customizable design options for entity cards, including dropdowns and calendars.</li>
              <li>Crafted over 20 card designs for representing various entities, using data-driven templates to ensure accurate and engaging presentations.</li>
              <li>Addressed over 30 bugs, leading to optimized and refactored code, achieving enhanced application performance and stability.</li>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceItem>
      </ExperienceTimeline>
    </ExperienceSection>
  );
};

export default Experience;

const ExperienceSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.body};
`;

const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border-left: 2px solid ${({ theme }) => theme.accent};
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 50%;
  }
`;

const TimelineIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.accent};
`;

const ExperienceContent = styled.div`
  flex: 1;
`;

const ExperienceRole = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const ExperienceCompany = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  margin: 0.5rem 0;
`;

const ExperienceDate = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1rem;
`;

const ExperienceDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.accent};
      font-size: 1.25rem;
    }
  }
`;
