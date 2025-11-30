// Fix: Import React to make JSX-related types like React.ReactNode available.
import React from 'react';

export interface Skill {
  name: string;
  // Fix: Changed type from JSX.Element to React.ReactNode to resolve the "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
