import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <SectionTitle>Certifications</SectionTitle>
      <CertificationsList>
        <CertificationItem>
          <CertificationTitle>Programming - Data Structures and Algorithms in Python</CertificationTitle>
          <CertificationIssuer>NPTEL</CertificationIssuer>
        </CertificationItem>
        <CertificationItem>
          <CertificationTitle>Introduction to Machine Learning</CertificationTitle>
          <CertificationIssuer>NPTEL</CertificationIssuer>
        </CertificationItem>
        <CertificationItem>
          <CertificationTitle>SQL Intermediate Certification</CertificationTitle>
          <CertificationIssuer>HackerRank</CertificationIssuer>
        </CertificationItem>
      </CertificationsList>
    </TestimonialsSection>
  );
};

export default Testimonials;

const TestimonialsSection = styled.section`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.body};
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.5rem;
`;

const CertificationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const CertificationItem = styled.li`
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const CertificationIssuer = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.secondaryText};
`;
