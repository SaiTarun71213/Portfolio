import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation or submission logic here
    alert('Message sent!');
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  padding: 4rem 2rem;
  background-color: #0d0d0d;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #feb47b;
  margin-bottom: 2rem;
`;

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 1rem;
  resize: none;

  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #00f2fe;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #00f2fe;
  }
`;

export default Contact;
