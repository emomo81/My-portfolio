
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const personalInfo = {
  name: "Emmanuel G. Momo",
  title: "Data Scientist | Web Developer | Virtual Assistant",
  location: "Kigali, Rwanda",
  email: "emomo2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/emmanuel-momo-b97681250/",
  github: "https://github.com/emomo81",
  summary: "A detail-oriented Data Science student and web developer with experience in Python, R, SQL, and modern web technologies. Passionate about turning data into actionable insights, building polished web experiences, and creating efficient digital solutions."
};

export const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Python", icon: "Code2" },
      { name: "JavaScript", icon: "Code2" },
      { name: "TypeScript", icon: "Code2" },
      { name: "Next.js", icon: "Cpu" },
      { name: "React", icon: "Atom" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "R Programming", icon: "BarChart3" }
    ]
  },
  {
    category: "Data Science & Tools",
    items: [
      { name: "Pandas/NumPy", icon: "Database" },
      { name: "Statistical Analysis", icon: "BarChart3" },
      { name: "Data Visualization", icon: "PieChart" },
      { name: "Git/GitHub", icon: "Github" },
      { name: "Figma", icon: "Figma" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "Database" },
      { name: "Oracle DB 19c", icon: "Database" },
      { name: "SQL", icon: "Table2" }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Virtual Assistance", icon: "UserCheck" },
      { name: "Social Media Mgmt", icon: "Share2" },
      { name: "Content Creation", icon: "PenTool" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Student Management System",
    description: "Full-featured desktop app built with Python Tkinter and MySQL. Manages students, enrollments, lecturers, subjects, and lectures with a polished GUI.",
    tags: ["Python", "Tkinter", "MySQL", "XAMPP"],
    image: PlaceHolderImages.find(img => img.id === 'student-mgmt')?.imageUrl || "",
    liveUrl: "https://github.com/emomo81",
    githubUrl: "https://github.com/emomo81",
    featured: true,
  },
  {
    id: 2,
    title: "Medical Insurance Management App",
    description: "Authentication system with policy/claim management, analytics dashboard, and optional AI-based fraud detection module.",
    tags: ["Python", "Tkinter", "MySQL", "AI"],
    image: PlaceHolderImages.find(img => img.id === 'medical-insurance')?.imageUrl || "",
    liveUrl: "https://github.com/emomo81",
    githubUrl: "https://github.com/emomo81",
    featured: true,
  },
  {
    id: 3,
    title: "Car Insurance Management System",
    description: "Multi-role access system (employees, clients, CEOs) with dashboards, vehicle management, and advanced search capabilities.",
    tags: ["Python", "Tkinter", "MySQL"],
    image: PlaceHolderImages.find(img => img.id === 'car-insurance')?.imageUrl || "",
    liveUrl: "https://github.com/emomo81",
    githubUrl: "https://github.com/emomo81",
    featured: false,
  },
  {
    id: 4,
    title: "Bank Customer Enquiry App",
    description: "Desktop application for bank employee and boss registration with customer enquiry management workflows.",
    tags: ["Python", "Tkinter", "MySQL"],
    image: PlaceHolderImages.find(img => img.id === 'bank-enquiry')?.imageUrl || "",
    liveUrl: "https://github.com/emomo81",
    githubUrl: "https://github.com/emomo81",
    featured: false,
  },
  {
    id: 5,
    title: "Statistical Analysis in R",
    description: "Group assignment covering missing value imputation strategies, sample variance, and statistical modeling in R.",
    tags: ["R", "Statistics", "Data Analysis"],
    image: PlaceHolderImages.find(img => img.id === 'r-analysis')?.imageUrl || "",
    liveUrl: "https://github.com/emomo81",
    githubUrl: "https://github.com/emomo81",
    featured: false,
  },
  {
    id: 6,
    title: "New World Institute Database",
    description: "Foundational database project with a registration system handling users, departments, and year-of-study tracking.",
    tags: ["SQL", "Oracle DB", "Database Design"],
    image: PlaceHolderImages.find(img => img.id === 'database-project')?.imageUrl || "",
    liveUrl: "https://github.com/emomo81",
    githubUrl: "https://github.com/emomo81",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    role: "Social Media Virtual Assistant",
    company: "Freelance",
    period: "2023 - Present",
    description: "Managed social media calendars, created visual content, and analyzed engagement metrics to optimize posting strategies for clients.",
  },
  {
    id: 2,
    role: "ALX Program Graduate",
    company: "ALX Africa",
    period: "2023",
    description: "Completed intensive tech training focusing on virtual assistant skills, Python, and modern web technologies.",
  },
  {
    id: 3,
    role: "Knowledge Sharing / Mentoring",
    company: "Indaba Program",
    period: "2022 - 2023",
    description: "Participated in peer mentoring and knowledge-sharing activities within a collaborative tech environment.",
  }
];
