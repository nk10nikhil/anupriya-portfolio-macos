import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:user-circle",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-mdi:account",
        excerpt: "Hey there! I'm Anupriya Saini, Backend Developer & AI/ML Engineer..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some stats about my GitHub account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this portfolio website..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "medihelp",
        title: "MediHelp",
        file: "markdown/projects/medihelp.md",
        icon: "i-mdi:hospital-box",
        excerpt: "AI-powered medical chatbot with LangChain and Pinecone...",
        link: "https://github.com/anupriyasaini21/medihelp"
      },
      {
        id: "bachat",
        title: "Bachat",
        file: "markdown/projects/bachat.md",
        icon: "i-mdi:wallet",
        excerpt: "Local MCP expense tracker integrated with Claude Desktop...",
        link: "https://github.com/anupriyasaini21/bachat"
      },
      {
        id: "qr-ticketing",
        title: "QR Ticketing System",
        file: "markdown/projects/qr-ticketing.md",
        icon: "i-mdi:qrcode",
        excerpt: "QR-based ticketing platform built for SIH 2024...",
        link: "https://myeventorg.vercel.app/"
      },
      {
        id: "sentiment-analyzer",
        title: "Sentiment Analyzer",
        file: "markdown/projects/sentiment-analyzer.md",
        icon: "i-mdi:emoticon-outline",
        excerpt: "Code-mixed sentiment analysis with graphemic normalization...",
        link: "https://github.com/anupriyasaini21/sentiment-analyzer"
      },
      {
        id: "genai-analytics",
        title: "Predictive Analytics",
        file: "markdown/projects/predictive-analytics.md",
        icon: "i-mdi:chart-line",
        excerpt: "AI dashboard with React, Flask & Scikit-learn...",
        link: "https://mycollegeorg.vercel.app/"
      },
      {
        id: "chatapp",
        title: "Real-Time Chat App",
        file: "markdown/projects/chat-app.md",
        icon: "i-mdi:chat",
        excerpt: "Real-time messaging with WebSocket supporting 500+ concurrent users...",
        link: "https://networkup.vercel.app/"
      },
      {
        id: "ecommerce",
        title: "E-Commerce Platform",
        file: "markdown/projects/ecommerce.md",
        icon: "i-mdi:cart",
        excerpt: "Secure e-commerce platform handling 6,000+ transactions monthly...",
        link: "https://myprojectbazaar.vercel.app/"
      },
      {
        id: "social-media",
        title: "SocioPulse",
        file: "markdown/projects/sociopulse.md",
        icon: "i-mdi:share-variant",
        excerpt: "Feature-rich social media platform with real-time chat...",
        link: "https://sociopulse.vercel.app/"
      },
      {
        id: "restaurant",
        title: "Restaurant App",
        file: "markdown/projects/restaurant.md",
        icon: "i-mdi:silverware-fork-knife",
        excerpt: "Branded restaurant website with Google Maps and booking system...",
        link: "https://restaurantworld.vercel.app/"
      },
      {
        id: "salon",
        title: "Glamour Grid",
        file: "markdown/projects/glamour-grid.md",
        icon: "i-mdi:content-cut",
        excerpt: "Salon branding website with WCAG accessibility standards...",
        link: "https://glamourgrid.vercel.app/"
      },
      {
        id: "webuilt",
        title: "WeBuilt_U",
        file: "markdown/projects/webuilt.md",
        icon: "i-mdi:web",
        excerpt: "Marketing agency website with Framer Motion animations...",
        link: "https://webuiltu.vercel.app/"
      },
      {
        id: "blog",
        title: "WriteMyBlog",
        file: "markdown/projects/writemyblog.md",
        icon: "i-mdi:pencil",
        excerpt: "Online blogging platform with WYSIWYG editor...",
        link: "https://writemyblog.vercel.app/"
      },
      {
        id: "auth-system",
        title: "Auth System",
        file: "markdown/projects/auth-system.md",
        icon: "i-mdi:shield-lock",
        excerpt: "Full stack authentication with JWT and MongoDB...",
        link: "https://github.com/anupriyasaini21"
      },
      {
        id: "sudoku",
        title: "Sudoku Solver",
        file: "markdown/projects/sudoku.md",
        icon: "i-mdi:grid",
        excerpt: "Solves Sudoku puzzles using backtracking algorithm...",
        link: "https://github.com/anupriyasaini21"
      },
      {
        id: "qna",
        title: "Q&A System",
        file: "markdown/projects/qna.md",
        icon: "i-mdi:comment-question",
        excerpt: "Q&A platform with upvote/downvote and reputation system...",
        link: "https://github.com/anupriyasaini21"
      }
    ]
  },
  {
    id: "certificates",
    title: "Certifications",
    icon: "i-mdi:certificate",
    md: [
      {
        id: "genai-analytics-cert",
        title: "GenAI Data Analytics",
        file: "markdown/certificates/genai-analytics.md",
        icon: "i-mdi:robot",
        excerpt: "GenAI Powered Data Analytics Certification"
      },
      {
        id: "google-analytics",
        title: "Google Analytics",
        file: "markdown/certificates/google-analytics.md",
        icon: "i-mdi:google-analytics",
        excerpt: "Google Analytics Certification"
      },
      {
        id: "google-genai",
        title: "Google Gen AI",
        file: "markdown/certificates/google-genai.md",
        icon: "i-mdi:google",
        excerpt: "Google Generative AI Leader Certification"
      },
      {
        id: "aws-fundamentals",
        title: "AWS Fundamentals",
        file: "markdown/certificates/aws-fundamentals.md",
        icon: "i-mdi:aws",
        excerpt: "AWS Cloud Fundamentals Certification"
      }
    ]
  }
];

export default bear;
