import {
  ProjectItem,
  ExperienceItem,
  SkillItem,
  ServiceItem,
  CertificationItem,
  PublicationItem,
  AchievementStats,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Arjun S',
  brandName: 'ARJUN',
  monogram: 'AD',
  title: 'Full-Stack Developer & Security Researcher',
  phone: '+91 9629815505',
  email: 'arjunshanmugam2023ece@sece.ac.in',
  location: 'Coimbatore, Tamil Nadu, India',
  hometown: 'Kumbakonam, Tamil Nadu, India',
  education: {
    degree: 'B.E. Electronics and Communication Engineering',
    college: 'Sri Eshwar College of Engineering, Coimbatore',
    cgpa: '8.02 (up to 6th semester)',
    period: '2023 - 2027',
    statusLabel: 'ECE Undergraduate | Class of 2027',
    hsc: 'Ponnaiyah Ramajayam Public School CBSE, Kumbakonam (66%)',
    sslc: 'Ponnaiyah Ramajayam Public School CBSE, Kumbakonam (75%)',
  },
  roles: [
    'FULL-STACK DEVELOPER',
    'CYBERSECURITY RESEARCHER',
    'NETWORKING SPECIALIST',
    'IEEE RESEARCH AUTHOR',
  ],
  headline: 'Building Scalable Web Applications & Secure 6G Network Architectures',
  bio: 'I build fast, responsive, and secure web applications with clean code, alongside research in network security, AI threat classification, and distributed architectures.',
  detailedBio:
    "I am an Electronics and Communication Engineering student at Sri Eshwar College of Engineering, Coimbatore, maintaining an 8.02 CGPA. I specialize in the MERN stack, Next.js, and computer network security. My practical work spans building enterprise-grade incident response platforms (CyberSentinel), cloud-deployed full-stack platforms (Nibble, EduSync), and published IEEE research on 6G security architectures using Federated Learning and Multi-Agent systems.",
  availability: 'Open to Internship & Full-Time Opportunities',
  links: {
    github: 'https://github.com/Arjun3748',
    linkedin: 'https://www.linkedin.com/in/arjun-s-9b5934291/',
    email: 'arjunshanmugam2023ece@sece.ac.in',
    phone: '+91 9629815505',
    resumeFileName: 'Arjun_S_Resume.pdf',
    resumeAvailable: true,
  },
};

export const ACHIEVEMENTS_STATS: AchievementStats = {
  leetCodeSolved: 320,
  leetCodeRating: 1545,
  codeChefSolved: 183,
  codeChefRating: 1019,
  skillRackSolved: 430,
  cgpa: 8.02,
  certificationsCount: 8,
  publicationsCount: 1,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'frontend-fullstack',
    title: 'Full-Stack Web Development',
    description:
      'Architecting responsive, high-performance web applications using React.js, Next.js, Node.js, Express, and Tailwind CSS with secure RESTful APIs.',
    iconName: 'Code',
    techList: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    id: 'cybersecurity-incident',
    title: 'AI Cyber Incident Response',
    description:
      'Designing enterprise-grade security platforms with JWT authentication, role-based dashboards, automated incident timelines, and AI threat triage.',
    iconName: 'Shield',
    techList: ['JWT Auth', 'RBAC', 'AI Threat Triage', 'Evidence Mgmt', 'CyberSentinel'],
  },
  {
    id: 'networking-6g',
    title: 'Networking & 6G Architecture',
    description:
      'Configuring and simulating complex network topologies via Cisco Packet Tracer, alongside research in Federated Learning for 6G edge security.',
    iconName: 'Network',
    techList: ['Cisco Packet Tracer', 'TCP/IP', 'Routing & Switching', '6G Security', 'Federated Learning'],
  },
  {
    id: 'dsa-problem-solving',
    title: 'Algorithmic Problem Solving',
    description:
      'Strong foundation in Data Structures, Algorithms, and OOP in C, C++, and Java with 900+ coding problems solved across LeetCode, CodeChef, and SkillRack.',
    iconName: 'Cpu',
    techList: ['C++', 'Java', 'LeetCode (320+)', 'CodeChef (183)', 'SkillRack (430+)'],
  },
];

export const TECH_STACK = [
  { name: 'HTML5', category: 'Frontend', badge: 'HTML' },
  { name: 'CSS3', category: 'Frontend', badge: 'CSS' },
  { name: 'JavaScript', category: 'Frontend', badge: 'JS' },
  { name: 'TypeScript', category: 'Frontend', badge: 'TS' },
  { name: 'React.js', category: 'Frontend', badge: 'React' },
  { name: 'Next.js', category: 'Frontend', badge: 'Next' },
  { name: 'Tailwind CSS', category: 'Frontend', badge: 'Tailwind' },
  { name: 'Node.js', category: 'Backend', badge: 'Node' },
  { name: 'Express.js', category: 'Backend', badge: 'Express' },
  { name: 'Python', category: 'Languages', badge: 'Python' },
  { name: 'C', category: 'Languages', badge: 'C' },
  { name: 'C++', category: 'Languages', badge: 'C++' },
  { name: 'Java', category: 'Languages', badge: 'Java' },
  { name: 'MySQL', category: 'Databases', badge: 'MySQL' },
  { name: 'MongoDB', category: 'Databases', badge: 'MongoDB' },
  { name: 'Cisco Packet Tracer', category: 'Tools & Security', badge: 'Cisco' },
  { name: 'Git', category: 'Tools & Security', badge: 'Git' },
  { name: 'GitHub', category: 'Tools & Security', badge: 'GitHub' },
  { name: 'VS Code', category: 'Tools & Security', badge: 'VSCode' },
  { name: 'SQL Workbench', category: 'Tools & Security', badge: 'SQL' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'cybersentinel',
    title: 'CyberSentinel',
    subtitle: 'AI Cyber Incident Response Platform',
    category: 'AI & Security',
    period: 'AUG 2025',
    summary:
      'Enterprise-grade Cyber Incident Response Platform streamlining incident reporting, investigation, and rapid containment using AI classification.',
    description:
      'Built an enterprise-grade Cyber Incident Response Platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline security incident reporting and investigation. Implemented JWT authentication, role-based dashboards, evidence management, automated timelines, and analytics, with AI-powered incident classification, duplicate detection, and risk assessment for faster threat response.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'AI Threat Classifier',
      'Tailwind CSS',
    ],
    features: [
      'JWT-authenticated role-based dashboards for SecOps teams and analysts.',
      'AI-powered incident classification, risk scoring, and duplicate threat detection.',
      'Cryptographically verified digital evidence management and chain-of-custody tracking.',
      'Automated investigation timelines and incident containment analytics.',
    ],
    highlights: [
      'Enterprise MERN architecture with stateless JWT security.',
      'Rapid incident triage reducing manual classification time.',
      'Role-based access control protecting critical vulnerability disclosures.',
    ],
    metrics: [
      { label: 'Role Dashboards', value: '3 RBAC Roles' },
      { label: 'AI Detection', value: 'Real-time Triage' },
      { label: 'Stack', value: 'Full MERN' },
    ],
    status: 'Enterprise Platform',
    githubUrl: 'https://github.com/Arjun-Shanmugam/cybersentinel',
    liveUrl: 'https://cybersentinel.arjun-dev.tech',
  },
  {
    id: 'nibble',
    title: 'Nibble',
    subtitle: 'Intelligent Food Ordering Ecosystem',
    category: 'Full-Stack',
    period: 'JAN 2025',
    summary:
      'Full-stack food ordering platform featuring restaurant discovery, dynamic cart state management, and cloud deployment.',
    description:
      'Engineered a full-stack food ordering platform with secure authentication, restaurant discovery, dynamic cart management, and seamless order processing. Developed RESTful backend services, integrated MongoDB Atlas, and built a responsive frontend using Next.js and Tailwind CSS. Deployed the platform on the cloud for scalable and reliable user access.',
    technologies: [
      'Next.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'MongoDB Atlas',
      'RESTful APIs',
      'Cloud Deployment',
    ],
    features: [
      'Modern Next.js responsive user interface with server-side and client rendering.',
      'Restaurant catalog search with live filtering and dynamic menus.',
      'Optimistic state cart management and atomic checkout workflow.',
      'MongoDB Atlas cloud database cluster with replica persistence.',
    ],
    highlights: [
      'Engineered with modern Next.js App Router and Tailwind styling.',
      'Cloud-deployed architecture for high availability and low latency.',
      'Structured REST backend with modular route controllers.',
    ],
    metrics: [
      { label: 'Frontend', value: 'Next.js App Router' },
      { label: 'Database', value: 'MongoDB Atlas' },
      { label: 'Hosting', value: 'Cloud Deployed' },
    ],
    status: 'Deployed & Cloud',
    githubUrl: 'https://github.com/Arjun-Shanmugam/nibble-food-ordering',
    liveUrl: 'https://nibble-app.arjun-dev.tech',
  },
  {
    id: 'edusync',
    title: 'EduSync',
    subtitle: 'College Workflow & Academic Platform',
    category: 'Full-Stack',
    period: 'JUL 2025',
    summary:
      'Full-stack college platform simplifying daily communication, leave approvals, circulars, and academic operations.',
    description:
      'Developed a full-stack web application using MongoDB, Express.js, React.js, and Node.js, featuring a dynamic and responsive UI with well-structured RESTful APIs. Implemented efficient user management, data operations, and interactive workflows, showcasing full MERN stack capabilities and modern web development expertise.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'RESTful APIs',
      'Tailwind CSS',
      'Workflow State Engine',
    ],
    features: [
      'Comprehensive student and faculty academic management portal.',
      'Leave and On-Duty (OD) application, tracking, and approval engine.',
      'Digital department circular distribution with read acknowledgment receipts.',
      'Interactive workflows and real-time announcement board.',
    ],
    highlights: [
      'Demonstrated end-to-end MERN architecture with robust error boundaries.',
      'Automated multi-step approval pipelines between students and mentors.',
      'Responsive, accessible interface crafted with modern design standards.',
    ],
    metrics: [
      { label: 'Architecture', value: 'MERN Stack' },
      { label: 'Workflows', value: 'OD & Leave Pipeline' },
      { label: 'APIs', value: 'RESTful Controllers' },
    ],
    status: 'Enterprise Platform',
    githubUrl: 'https://github.com/Arjun-Shanmugam/edusync-college-portal',
    liveUrl: 'https://edusync.arjun-dev.tech',
  },
  {
    id: '6g-security-paper',
    title: '6G Security Architecture',
    subtitle: 'IEEE Published Research Paper (ICCIRT 2024)',
    category: 'Research & 6G',
    period: 'ICCIRT 2024',
    summary:
      'AI-Enhanced Security Architecture for 6G Networks utilizing Federated Learning and Multi-Agent coordination.',
    description:
      'Authored and published research paper titled "AI-Enhanced Security Architecture for 6G Networks: Federated Learning and Multi-Agent Approach" at the IEEE International Conference on Computing, Communication, Internet of Things and Robotics (ICCIRT 2024). Explored decentralized threat detection, privacy-preserving model updates, and autonomous multi-agent defense for next-generation telecommunication grids.',
    technologies: [
      'Federated Learning',
      'Multi-Agent Systems',
      '6G Network Security',
      'Python',
      'Decentralized Privacy',
      'IEEE Publication',
    ],
    features: [
      'Privacy-preserving Federated Learning algorithm for edge-tier intrusion detection.',
      'Multi-agent consensus protocol defending against distributed cyber attacks in 6G grids.',
      'Peer-reviewed publication indexed in IEEE Xplore with DOI: 10.1109/ICCIRT59484.2024.10921972.',
    ],
    highlights: [
      'Published IEEE Conference Paper (ICCIRT 2024).',
      'Bridged advanced artificial intelligence with next-generation cellular communication security.',
      'Official DOI: 10.1109/ICCIRT59484.2024.10921972.',
    ],
    metrics: [
      { label: 'Indexing', value: 'IEEE Xplore' },
      { label: 'Conference', value: 'ICCIRT 2024' },
      { label: 'DOI', value: '10.1109/...' },
    ],
    paperDoi: '10.1109/ICCIRT59484.2024.10921972',
    status: 'IEEE Published',
    liveUrl: 'https://doi.org/10.1109/ICCIRT59484.2024.10921972',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'cisco-internship',
    title: 'Cisco Networking Intern',
    organization: 'AICTE Virtual Internship',
    role: 'Networking Intern',
    track: 'Computer Networking & Network Security',
    period: 'JUL 2025',
    hasCertificate: true,
    certificateLabel: 'AICTE & Cisco Certified',
    summary:
      'Accomplished the Cisco AICTE Virtual Internship, obtaining real-time experience in networking principles and project building via Cisco Packet Tracer for designing, simulating, and debugging networks. Strengthened knowledge of IP addressing, routing, switching, network security, and troubleshooting through hands-on practical exercises.',
    highlights: [
      'Simulated multi-tier enterprise networks using Cisco Packet Tracer.',
      'Configured static/dynamic routing, VLANs, and switch trunking protocols.',
      'Implemented IP addressing, subnet masking schemes, and gateway routes.',
      'Executed network security rules, access control lists (ACLs), and troubleshooting drills.',
    ],
    skills: ['Cisco Packet Tracer', 'TCP/IP', 'Routing & Switching', 'Subnetting', 'Network Security'],
  },
  {
    id: 'mern-internship',
    title: 'MERN Stack Developer Intern',
    organization: 'Better Tomorrow Training Institute',
    role: 'Full-Stack Developer Intern',
    track: 'Full-Stack Web Development',
    period: 'JAN 2025',
    hasCertificate: true,
    certificateLabel: 'Verified Internship Certificate',
    summary:
      'Completed a MERN stack internship, gaining hands-on experience in building full-stack applications with MongoDB, Express.js, React.js, and Node.js. Learned RESTful API development, database management, and frontend-backend integration for practical project deployment.',
    highlights: [
      'Engineered production REST APIs with Node.js and Express controllers.',
      'Designed responsive UI components and application state handling in React.',
      'Managed schema modeling and data operations with MongoDB.',
      'Practiced end-to-end integration and secure deployment pipelines.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Frontend Integration'],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'ccna-intro',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    date: 'OCT 2025',
    domain: 'Cisco Networking Academy',
  },
  {
    id: 'cisco-cybersecurity',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    date: 'JUN 2025',
    domain: 'Cisco Networking Academy',
  },
  {
    id: 'cisco-networking-essentials',
    title: 'Networking Essentials',
    issuer: 'Cisco',
    date: 'MAY 2024',
    domain: 'Cisco Networking Academy',
  },
  {
    id: 'cisco-data-analytics',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    date: 'JUN 2026',
    domain: 'Cisco Networking Academy',
  },
  {
    id: 'hackerrank-sql',
    title: 'Certified in SQL - Basic (Standard)',
    issuer: 'HackerRank',
    date: 'NOV 2025',
    domain: 'Database Querying & Management',
  },
  {
    id: 'udemy-python',
    title: '100 Days of Code: Complete Python Pro Bootcamp',
    issuer: 'Udemy',
    date: 'NOV 2024',
    domain: 'Python Programming & Automation',
  },
  {
    id: 'udemy-dsa',
    title: 'Mastering Data Structures & Algorithms Using C & C++',
    issuer: 'Udemy',
    date: 'JUN 2024',
    domain: 'Data Structures & Algorithms',
  },
  {
    id: 'udemy-frontend',
    title: 'Foundations of Front-End Web Development',
    issuer: 'Udemy',
    date: 'DEC 2024',
    domain: 'Frontend Engineering',
  },
];

export const PUBLICATION_DATA: PublicationItem = {
  title: 'AI-Enhanced Security Architecture for 6G Networks: Federated Learning and Multi-Agent Approach',
  conference: 'International Conference on Computing, Communication, Internet of Things and Robotics (ICCIRT 2024)',
  year: '2024',
  doi: '10.1109/ICCIRT59484.2024.10921972',
  abstract:
    'Proposes a decentralized, privacy-preserving AI architecture for 6G cellular networks combining Federated Learning on distributed edge devices with autonomous Multi-Agent reinforcement coordination for rapid anomaly detection and threat mitigation.',
  tags: ['6G Networks', 'Federated Learning', 'Multi-Agent Systems', 'IEEE Xplore', 'Cybersecurity'],
};
