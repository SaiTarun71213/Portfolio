import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const posts = [
  { title: 'React Hooks Deep Dive', date: 'Jan 5, 2024', description: 'Learn advanced hooks in React.' },
  { title: 'Styling in CSS and Beyond', date: 'Feb 2, 2024', description: 'How to master CSS for responsive design.' },
  { title: 'Building Animations with Framer Motion', date: 'March 15, 2024', description: 'Create beautiful animations using Framer Motion.' },
];

const Blog = () => {
  return (
    <BlogSection id="blog">
      <SectionTitle>Latest Blog Posts</SectionTitle>
      <PostGrid>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PostDate>{post.date}</PostDate>
            <PostTitle>{post.title}</PostTitle>
            <PostDescription>{post.description}</PostDescription>
          </PostCard>
        ))}
      </PostGrid>
    </BlogSection>
  );
};

const BlogSection = styled.div`
  padding: 4rem 2rem;
  background-color: #282828;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #feb47b;
  margin-bottom: 3rem;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PostCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: #999;
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  color: #00f2fe;
`;

const PostDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

export default Blog;
