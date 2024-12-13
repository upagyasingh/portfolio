import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    next,
    star,
    nodejs,
    mongodb,
    portfolio,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo2,sql,shad,java,php,
  } from "../assets";
  
  const navLinks = [ 
    {
      id: "/",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },

  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: creator,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },{
      name: "React JS",
      icon: reactjs,
    },{
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Shadcn/UI",
      icon: shad,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "IT-Skills",
      icon: logo2,
      iconBg: "#001f3f",
      date: "October 2023 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "designed, developed and implemented user authentication, role-based access control, and responsive interfaces",
        " Managed database integration and collaborated with the team to meet project requirements",
      ],
    },
    
  ];
  
 
  const projects = [
    { 
      name: "Student Management System",
      description:
        "A robust Management System featuring secure, role-based authentication for streamlined access control. The system integrates a webcam for real-time attendance tracking and leverages MySQL for efficient data handling. It includes comprehensive CRUD functionalities.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "DSA",
          color: "pink-text-gradient",
        },
        {
          name: "Gson library",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/upagyasingh/student-management-system",
    },
    {
      name: "Code Master",
      description:
        "Developed a comprehensive software solution for managing courses, student records, and fee data for educational institutes. Built with Next.js for a fast, scalable front-end experience, MongoDB and Mongoose for robust and flexible data storage, and styled with ShadCN for a clean, modern UI.",
      tags: [
        {
          name: "next js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "shadcn/ui",
          color: "pink-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: next,
      source_code_link: "https://github.com/aayushdhimaann/it-skills",
    },
    {
      name: "Portfolio Website",
      description:
        " A dynamic, interactive portfolio built with React, featuring seamless page transitions powered by React-Routing and engaging animations with Framer Motion. The site showcases a visually immersive 3D model experience, providing a modern and interactive showcase of my skills and projects. Hosted on Vercel for fast, reliable performance.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "react-three/fibre",
          color: "pink-text-gradient",
        },
        
      ],
      image: portfolio,
      source_code_link: "https://github.com/upagyasingh/portfolio",
    },
    {
      name: "StarGazer",
      description:
        "Stargazer is an interactive space-themed website that integrates real-time data from space-related APIs, including NASA’s Astronomy Picture of the Day API. It features dynamic animations, such as glassmorphism and hover interactions, to enhance user experience. The website provides up-to-date information on celestial events and astronomy.",
      tags: [
        {
          name: "html 5",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
        {
          name: "fetch api",
          color: "pink-text-gradient",
        },
      ],
      image: star,
      source_code_link: "https://github.com/upagyasingh/stargazer",
    },
   
   
  ];
  
  export {navLinks, services, technologies, experiences, projects };