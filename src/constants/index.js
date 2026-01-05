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
  hp_white,
  hp_blue,
  utd,
  ambitech,
  pccoe,
  carrent,
  toll,
  insightgen,
  threejs,
  the_lady,
  horse,
  falcon,
  banking,
  hb1,
  hb2,
  hb3,
  hb4,
  hb5,
  fb1,
  fb2,
  fb3,
  fb4,
  fb5,
  fb6,
  fb7,
} from '../assets';

export const navLinks = [
  // {
  //   id: 'work',
  //   title: 'Work',
  // },
  {
    id: 'pricing',
    title: 'Pricing',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'UX Designer',
    icon: mobile,
  },
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Artist & Illustrator',
    icon: creator,
  },
];

// Pricing sections for artwork categories
const pricingSections = [
  {
    title: 'Half Body',
    price: '$100+',
    description:
      'Upper-body 3D character sculpt from head to the upper thighs focusing on pose, anatomy and clothing.',
    images: [hb1, hb2, hb3, hb4, hb5],
  },
  {
    title: 'Full Body',
    price: '$150+',
    description:
      'Complete full-body 3D character sculpt from head to feet, including pose and overall proportions.',
    images: [fb1, fb2, fb3, fb4, fb5, fb6, fb7],
  },
  // {
  //   title: 'Bust / Portrait',
  //   price: '$40+',
  //   description: 'Head and shoulders portrait with focus on expression.',
  //   images: [falcon, the_lady, horse, falcon, the_lady, horse],
  // },
  // // Optional custom section
  // {
  //   title: 'Custom',
  //   price: 'Varies',
  //   description: 'Tell me your idea — backgrounds, props, pets, couples, more.',
  //   images: [the_lady, horse, falcon],
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full stack developer',
    company_name: 'IEEE UTD',
    icon: utd,
    iconBg: '#E6DEDD',
    date: 'Aug 2024 - Apr 2025',
    points: [
      'Developed scalable React.js web applications with responsive, cross-browser-compatible designs, optimizing performance across devices.',
      'Enhanced the IEEE UTD website by integrating interactive features like a chatbot, boosting user engagement by 30% fostering team collaboration.',
      'Conducted code reviews and provided constructive feedback, promoting best practices and maintaining high-quality standards.',
    ],
  },
  {
    title: 'Software Applications Engineer',
    company_name: 'Hewlett Packard',
    icon: hp_blue,
    iconBg: '#E6DEDD',
    date: 'Jul 2023 - Aug 2024',
    points: [
      'Enhanced frontend performance in React.js using Webpack, Jenkins, Jira, and AWS, contributing to a scalable platform with improved security.',
      'Optimized the sign-up process by integrating Google Maps for auto-suggestions, reducing sign-up time by 70% & improving user experience.',
      'Created a map widget for partner dashboards, enabling real-time regional customer visibility & streamlined identification by counts and names.',
      'Significantly boosted code efficiency by 30% through refactoring, adopting functional components, and a microservice architecture.',
    ],
  },
  {
    title: 'R&D Software Intern',
    company_name: 'Hewlett Packard',
    icon: hp_blue,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Jul 2023',
    points: [
      "Spearheaded the development of Plantify (POC for HP's initiative) enabling the planting of a sapling based on customer purchases.",
      'Led agile practices as Scrum Master, coordinating UI design in Figma & React, with secure token integration, optimizing performance by 20%.',
      'Enhanced localization by adding Korean language support, and gained exposure to tools like EC2, S3, and CDN for streamlined deployment.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Ambitech Pvt Ltd',
    icon: ambitech,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Dec 2022',
    points: [
      'Delivered patient platform (Angular, Spring Boot, AWS Lambda) for 10K+ users with MFA security.',
      'Integrated Bluetooth glucometer sync + RazorPay API, handling $20K monthly transactions.',
      'Improved mobile UI workflows with glucose alerts, boosting engagement by 40%.',
    ],
  },
  {
    title: 'UI/UX Intern',
    company_name: 'Ambitech Pvt Ltd',
    icon: ambitech,
    iconBg: '#E6DEDD',
    date: 'Jul 2021 - Dec 2021',
    points: [
      'Designed UX for mobile & web apps with Adobe XD/Figma, streamlining patient workflows.',
      'Created prototypes & Storybook UI components for consistent healthcare workflows.',
      'Conducted usability testing with patients & doctors, reducing navigation errors by 25%.',
    ],
  },
  {
    title: 'Content Designer',
    company_name: 'IEEE PCCOE',
    icon: pccoe,
    iconBg: '#E6DEDD',
    date: 'January 2021 - February 2023',
    points: [
      'Organized over 10+ cultural and technical events, showcasing strong planning & coordination skills.',
      'One of the technical events was a coding competition, which sparked interest in competitive programming among students.',
      'Designed 4 newsletters with creative layouts and engaging content, significantly enhancing communication and participation.',
    ],
  },
];

const publications = [
  {
    title: '1. Smart Toll Booth System using Smart Contracts',
    desc: 'Our paper introduces a GPS-based toll collection system addressing challenges like inconsistent rates, long waits, and traffic congestion in India. Unlike RFID-based systems, it uses real-time vehicle tracking for seamless, stop-free toll payments. Blockchain integration ensures security and transparency with decentralized smart contracts, enhancing toll collection efficiency and integrity.',
    name: 'IEEE Explore',
    date: 'May 2023',
    link: 'https://ieeexplore.ieee.org/document/10126123',
  },
  {
    title: '2. Exploration of Crowd Detection Techniques',
    desc: 'With a growing population, crowd density estimation has become crucial for safety and effective surveillance. People counting plays a vital role in preventing risks during large gatherings. Techniques like crowd anomaly detection, behavior analysis, and human action identification aid in monitoring crowd density. This project leverages image and video processing to estimate the number of individuals, benefiting public event organizers, security systems, and campus management.',
    name: 'International Journal of Application or Innovation in Engineering & Management',
    date: 'May 2022',
    link: '',
  },
  {
    title: '3. Decentralized voting with Ethereum Blockchain ',
    desc: 'Traditional e-voting reduced costs and improved convenience but lacked reliability and security, as it relied on centralized systems vulnerable to manipulation. This project proposes a decentralized e-voting system using blockchain technology to ensure voter identity protection, secure data exchange, and a transparent, tamper-proof voting process.',
    name: 'International Journal of Innovation Engineering and Science Research',
    date: 'July 2021',
    link: 'https://ijiesr.com/liebrary/e31/922429333.pdf',
  },
];

const projects = [
  {
    name: 'AutoToll',
    description:
      'GPS-based toll collection system leveraging blockchain and smart contracts for secure, automated transactions and real-time tracking, reducing toll processing by 60%.',
    tags: [
      {
        name: 'blockchain',
        color: 'blue-text-gradient',
      },
      {
        name: 'smartcontracts',
        color: 'green-text-gradient',
      },
      {
        name: 'truffle',
        color: 'pink-text-gradient',
      },
    ],
    image: toll,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'QuickRide',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient & efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Horizon',
    description:
      'A modern banking app with a dashboard for managing accounts, real-time transactions, and seamless user-to-user transfers, built with Next.js 14.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'plaid',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: banking,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Reviewer LLM',
    description:
      'Web application that showcases various products, providing users with AI-generated sentiment-based summaries of customer reviews for better insights.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'nlp',
        color: 'green-text-gradient',
      },
      {
        name: 'ml',
        color: 'pink-text-gradient',
      },
    ],
    image: insightgen,
    source_code_link: 'https://github.com/',
  },
];

export {
  services,
  pricingSections,
  technologies,
  experiences,
  publications,
  projects,
};
