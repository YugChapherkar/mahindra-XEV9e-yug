import { NavItem, NewsItem, CarProduct } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'XEV 9e', href: '#models' },
  { label: 'Technology', href: '#tech' },
  { label: 'News', href: '#news' },
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'INGLO: Electric Origin Architecture',
    date: 'February 2025',
    readTime: '3 min read',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Combining indomitable spirit with global standards, the INGLO platform is as adaptable as it is innovative, featuring 152 patents.',
  },
  {
    id: '2',
    title: 'Safety is in our DNA',
    date: 'February 2025',
    readTime: '2 min read',
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Featuring 7 airbags, frontal crash protection, and a reinforced BIW structure for ultimate level of protection.',
  },
  {
    id: '3',
    title: 'Battery Robustness',
    date: 'February 2025',
    readTime: '4 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1620883651111-50ae8665b16f?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Tested for 14,577 hours and over 55+ Lakh KM. Fire-tested at 900°C and waterproofed for maximum safety.',
  },
];

export const products: CarProduct[] = [
  {
    id: '1',
    name: 'XEV 9e',
    tagline: 'Desert Myst',
    image: 'https://yugc.site/wp-content/uploads/2025/12/205A1271-scaled.jpg',
  },
  {
    id: '2',
    name: 'XEV 9e',
    tagline: 'Everest White',
    image: 'https://yugc.site/wp-content/uploads/2025/12/1-1-scaled.jpg',
  },
  {
    id: '3',
    name: 'XEV 9e',
    tagline: 'Deep Forest',
    image: 'https://yugc.site/wp-content/uploads/2025/12/205A1252-scaled.webp',
  }
];