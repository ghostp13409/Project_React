import { color } from "chart.js/helpers";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { SiLeetcode } from "react-icons/si";


// Social Links
export const socials = [
  {
    title: "Github",
    Icon: <Github className="w-6 h-6" />,
    url: "github.com/ghostp13409",
  },
  {
    title: "LinkedIn",
    Icon: <Linkedin className="w-6 h-6" />,
    url: "linkedin.com/in/parth-gajjar09",
  },
  {
    title: "LeetCode",
    Icon: <SiLeetcode className="w-6 h-6" />,
    url: "leetcode.com/ghostp134",
  },
  {
    title: "Instagram",
    Icon: <Instagram className="w-6 h-6" />,
    url: "https://www.instagram.com/p_13_4/profilecard/?igsh=MTBrbThrNHc1aWR3NA==",
  },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "DSA Exercises",
    description:
      "Solved 70+ algorithmic problems on LeetCode. Analyzed time and space complexity for multiple algorithms, ensuring efficient and scalable solutions. Implemented and optimized algorithms for sorting, searching, and dynamic programming, reducing computation time by 30%.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["Java", "C#", "Algorithms"],
  },
  {
    id: 2,
    title: "LMS – Learning Management System (Open Source)",
    description:
      'Designed and integrated core system component "Progress Items". Developed comprehensive test cases for seamless system integration. Maintained and improved documentation and code formatting.',
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["C#", "SQLite"],
  },
  {
    id: 3,
    title: "Web Scrapper",
    description:
      "Developed Selenium-based web scrapers for stock and price monitoring on local retail sites. Implemented customized SMS-based alerts using IFTTT APIs, resulting in an early edge on stock details in a competitive market.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["Python", "Selenium", "Web Scraping"],
  },
  {
    id: 4,
    title: "Trading Bot",
    description:
      "Strategized a volatility-based trading bot. Designed the trading algorithm and simulated paper trading for testing. Deployed and experimented on the Binance platform for performance tuning.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["Python", "Trading", "Binance"],
  },
  {
    id: 5,
    title: "E-commerce Website",
    description:
      "Designed a fully class-based product and order system for scalability and code efficiency. Handcrafted CSS styling for a unique web design.",
    imageUrl: "./logos/profile_logo.jpeg",
    tags: ["JavaScript", "Express", "MongoDB", "EJS"],
  },
];


// Skills
export const Skills = [
  {
    id: 1,
    title: "Languages",
    tags: ["Java", "C#", "Python", "JavaScript", "HTML", "CSS"],
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Frameworks",
    tags: ["React", "Express.js", "ASP.NET", "Node", "Entity Framework", "EJS"],
    color: "bg-green-600"
  },
  {
    id: 3,
    title: "Databases",
    tags:["MySQL", "SQLite", "MongoDB"],
    color: "bg-purple-600"
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    tags: [
      "Arrays",
      "Stacks",
      "Queues",
      "Hash Tables",
      "Binary Serach",
      "Two-Pointer",
      "Bubble Sort",
      "Insertion Sort",
      "Selection Sort",
      "Merge Sort",
    ],
    color: "bg-sky-900"
  }
]
