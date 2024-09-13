// Contact.js
import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <ContactSection>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows="4" />
        </FormGroup>
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentDark};
  }
`;

