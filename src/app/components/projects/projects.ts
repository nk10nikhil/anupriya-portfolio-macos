import medihelp from '@/app/components/projects/assets/medihelp.png'
import bachat from '@/app/components/projects/assets/bachat.png'
import qr_ticketing from '@/app/components/projects/assets/qr_ticketing.png'
import sentiment_analyzer from '@/app/components/projects/assets/sentiment_analyzer.png'
import genai_analytics from '@/app/components/projects/assets/genai_analytics.png'
import auth_system from '@/app/components/projects/assets/auth_system.png'
import restaurant from '@/app/components/projects/assets/restaurant.png'
import everydaylife from '@/app/components/projects/assets/everydaylife.png'
import harbor from '@/app/components/projects/assets/harbor.png'
import ecommerce from '@/app/components/projects/assets/ecommerce.png'
import chatapp from '@/app/components/projects/assets/chatapp.png'
import salon from '@/app/components/projects/assets/salon.png'
import webuilt from '@/app/components/projects/assets/webuilt.png'
import sudoku from '@/app/components/projects/assets/sudoku.png'
import social_media from '@/app/components/projects/assets/social_media.png'
import blog from '@/app/components/projects/assets/blog.png'
import qna from '@/app/components/projects/assets/qna.png'
import aisaas from '@/app/components/projects/assets/aisaas.png'
import payment from '@/app/components/projects/assets/payment.png'
import workout from '@/app/components/projects/assets/workout.png'
import flight from '@/app/components/projects/assets/flight.png'
import dataautomation from '@/app/components/projects/assets/dataautomation.png'

import { StaticImageData } from 'next/image'

export type Projects = {
  id: number | string
  title: string
  description: string
  live_url: string
  github: string
  thumbnail: StaticImageData
}

export const projects: Projects[] = [
  {
    id: 1,
    title: 'MediHelp - AI Medical Chatbot',
    description:
      'An AI-powered medical chatbot leveraging LLMs and LangChain for real-time conversational responses to medical queries. Features Pinecone-based vector search for efficient medical data processing, Flask web interface, and Dockerized deployment pipeline with AWS EC2, ECR, and CI/CD integration via GitHub Actions.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: medihelp,
  },
  {
    id: 2,
    title: 'Bachat - MCP Expense Tracker',
    description:
      'A local MCP server for personal expense tracking integrated with Claude Desktop. Features efficient CRUD operations on financial data, expense entry, listing, and summarization tools. Includes dynamic JSON-based category resources and seamless Claude Desktop integration for interactive querying and real-time expense analysis.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: bachat,
  },
  {
    id: 3,
    title: 'QR-Based Ticketing System',
    description:
      'A comprehensive QR-based ticketing platform built for SIH 2024 hackathon in 36 hours. Managed 3,000+ attendees with secure event registration and check-in. Features RESTful APIs, real-time dashboards with 30% improved check-in efficiency, and achieved 90+ Lighthouse performance score with Agile Scrum practices.',
    live_url: 'https://myeventorg.vercel.app/',
    github: 'https://github.com/anupriyasaini21/qr-ticketing',
    thumbnail: qr_ticketing,
  },
  {
    id: 4,
    title: 'Code-Mixed Sentiment Analyzer',
    description:
      'A final year project implementing advanced NLP techniques for sentiment analysis on code-mixed text with graphemic normalization. Features high accuracy sentiment classification, normalized data processing, and machine learning models optimized for multilingual social media content analysis.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: sentiment_analyzer,
  },
  {
    id: 5,
    title: 'Predictive Analytics Dashboard',
    description:
      'Built an AI dashboard using React, Flask & Scikit-learn achieving 87% model accuracy on 1,500+ entries. Automated real-time updates via REST APIs, reduced latency by 25%, and visualized data effectively with Pandas, NumPy, and Matplotlib for comprehensive data insights.',
    live_url: 'https://mycollegeorg.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: genai_analytics,
  },
  {
    id: 6,
    title: 'Real-Time Chat Application',
    description:
      'Built a real-time chat app with React, Next.js, WebSocket, MongoDB, Express, and JWT encryption, supporting 500+ concurrent users. Tested with Jest & Cypress achieving 95% coverage. Features secure messaging with end-to-end encryption and deployed on Vercel.',
    live_url: 'https://networkup.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: chatapp,
  },
  {
    id: 7,
    title: 'Full Stack Authentication System',
    description:
      'A comprehensive full stack authentication system with user registration, login, and password reset functionality. Built with Node.js, Express, React, and Tailwind CSS, using JWT for secure token-based authentication and MongoDB for data persistence.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: auth_system,
  },
  {
    id: 8,
    title: 'Our Restaurant – Booking & Branding Web App',
    description:
      'Developed a branded restaurant website using React, integrating Google Maps API for location services and a real-time booking system. Responsive design optimized for mobile and desktop, increasing online reservations by 30% with smooth user experience.',
    live_url: 'https://restaurantworld.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: restaurant,
  },
  {
    id: 9,
    title: 'Everyday Life – E-Commerce Website',
    description:
      'Built a minimalist e-commerce platform showcasing household products with lazy loading, Webpack optimization, and Lighthouse audits. Features responsive design, shopping cart functionality, and performance optimizations reducing load times by 50%.',
    live_url: 'https://everydaylife.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: everydaylife,
  },
  {
    id: 10,
    title: 'Harbour Haven - Beverage Store',
    description:
      'A modern beverage store website built with React and Tailwind CSS, featuring a responsive design, smooth animations, and an intuitive user interface. Includes product listings, shopping cart, checkout process, and optimized for performance.',
    live_url: 'https://harborhaven.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: harbor,
  },
  {
    id: 11,
    title: 'E-commerce Platform with Secure Payments',
    description:
      'Architected a secure e-commerce platform with React, Next.js, Tailwind, Node.js, Express, MongoDB, handling 6,000+ transactions monthly. Integrated Razorpay payments, JWT authentication, and optimized with lazy loading & code splitting for 40% faster checkout.',
    live_url: 'https://myprojectbazaar.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: ecommerce,
  },
  {
    id: 12,
    title: 'Glamour Grid – Salon Branding Website',
    description:
      'Crafted a salon branding website focusing on WCAG/ARIA accessibility standards with vibrant UI using Tailwind CSS and component-based Next.js architecture. Features booking system, service listings, and gallery showcase with optimized performance.',
    live_url: 'https://glamourgrid.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: salon,
  },
  {
    id: 13,
    title: 'WeBuilt_U – Agency Website',
    description:
      'Developed WeBuilt_U marketing site to showcase services and client work, built with React, Tailwind CSS, Framer Motion, boosting engagement by 60%. Features smooth animations, portfolio showcase, and optimized for conversion.',
    live_url: 'https://webuiltu.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: webuilt,
  },
  {
    id: 14,
    title: 'Sudoku Solver',
    description:
      'A web application that solves Sudoku puzzles using a backtracking algorithm. Built with Next.js and MongoDB for storing user data. Supports OAuth authentication using Google and Facebook, allowing users to save and track puzzle solutions.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: sudoku,
  },
  {
    id: 15,
    title: 'SocioPulse – Social Media Platform',
    description:
      'Built a feature-rich social media platform with user authentication, real-time chat using WebSocket, and media sharing capabilities. Includes post creation, likes, comments, follower system, and real-time notifications using Next.js and Firebase.',
    live_url: 'https://sociopulse.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: social_media,
  },
  {
    id: 16,
    title: 'WriteMyBlog – Online Blogging Platform',
    description:
      'Created a web application for users to write, edit, and publish blogs online with an interactive WYSIWYG editor and SEO-friendly features. Built with Next.js and PostgreSQL, includes rich text editing, tagging system, and analytics dashboard.',
    live_url: 'https://writemyblog.vercel.app/',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: blog,
  },
  {
    id: 17,
    title: 'Full-Stack Q&A System',
    description:
      'Designed a Q&A platform allowing users to post questions, upvote/downvote answers, and follow topics using Next.js and Appwrite. Features include reputation system, badges, search functionality, and community moderation tools.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: qna,
  },
  {
    id: 18,
    title: 'AI-Powered SaaS Platform',
    description:
      'Developed a software-as-a-service platform with AI-driven features, database management with Prisma, and scalable cloud deployment using Next.js and Neon DB. Includes subscription management, AI content generation, and analytics dashboard.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: aisaas,
  },
  {
    id: 19,
    title: 'Secure LMS with Payment Gateway',
    description:
      'Built a learning management system with secure course access, student progress tracking, and integrated payment solutions using Stripe and Next.js. Features video hosting, assignments, quizzes, certificates, and instructor dashboard.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: payment,
  },
  {
    id: 20,
    title: 'Workout Tracking System',
    description:
      'Developed an automated workout tracker that logs fitness data to Google Sheets using Python and Google Sheets API, enabling easy tracking and visualization of progress. Features include exercise logging, calorie tracking, and progress charts.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: workout,
  },
  {
    id: 21,
    title: 'Flight Deal Finder',
    description:
      'Developed an automated flight deal finder that scrapes and alerts users about discounted airline tickets using Python and various APIs. Features price tracking, email notifications, and comparison across multiple airlines.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: flight,
  },
  {
    id: 22,
    title: 'Data Entry Job Automation',
    description:
      'Automated repetitive data entry tasks using Python and Selenium, improving efficiency and reducing manual errors. Features web scraping, form filling automation, and data validation with error handling and logging.',
    live_url: 'https://github.com/anupriyasaini21',
    github: 'https://github.com/anupriyasaini21',
    thumbnail: dataautomation,
  },
]
