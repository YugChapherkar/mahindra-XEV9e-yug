import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  category: string;
}

export interface CarProduct {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price?: string;
}

export interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}