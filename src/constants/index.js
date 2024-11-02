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
    nodejs,
    mongodb,
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
        "A robust Management System featuring secure, role-based authentication for streamlined access control. The system integrates a webcam for real-time attendance tracking and leverages MySQL for efficient data handling. It includes comprehensive CRUD functionalities, enabling easy management of student records and information.",
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
   
  ];
  
  export {navLinks, services, technologies, experiences, projects };