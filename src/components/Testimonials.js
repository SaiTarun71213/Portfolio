import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'John Doe', feedback: 'Amazing work! Highly recommended.', image: '/images/john.jpg' },
  { name: 'Jane Smith', feedback: 'A talented developer with great skills!', image: '/images/jane.jpg' },
  { name: 'Sam Green', feedback: 'Delivered everything on time with perfect quality.', image: '/images/sam.jpg' },
];

const Testimonials = () => {
  return (
    <TestimonialSection>
      <SectionTitle>What People Say</SectionTitle>
      <TestimonialWrapper>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TestimonialImage src={testimonial.image} alt={testimonial.name} />
            <TestimonialContent>
              <TestimonialText>"{testimonial.feedback}"</TestimonialText>
              <TestimonialName>- {testimonial.name}</TestimonialName>
            </TestimonialContent>
          </TestimonialCard>
        ))}
      </TestimonialWrapper>
    </TestimonialSection>
  );
};

const TestimonialSection = styled.div`
  padding: 4rem 2rem;
  background-color: #0d0d0d;
  color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #feb47b;
`;

const TestimonialWrapper = styled(motion.div)`
  display: flex;
  gap: 2rem;
  overflow: hidden;
`;

const TestimonialCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 15px;
  width: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const TestimonialText = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  color: #ccc;
`;

const TestimonialName = styled.h4`
  font-size: 1.2rem;
  color: #fff;
`;

export default Testimonials;
