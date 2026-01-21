import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiSupabase,
  SiLaravel,
  SiFlutter,
  SiDart,
  SiExpress,
} from "react-icons/si";

export const METADATA = {
  author: "Andhika Presha Saputra",
  title: "Portfolio | Andhika Presha Saputra",
  description:
    "Andhika Presha Saputra is a Frontend Developer building modern, responsive web interfaces with care and creativity.",
  siteUrl: "https://andhikapresha.vercel.app/",
  twitterHandle: "@dhikaaaaaaa",
  keywords: [
    "Andhika Presha Saputra",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
  ].join(", "),
  image: "/foto-andhika-porto.jpg",
  language: "Indonesian",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Frontend Developer",
  "I build modern web interfaces",
  "I create responsive web applications",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: andhika0143@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/andhika-presha-saputra-23b0232b0/",
  },
  {
    name: "github",
    url: "https://github.com/Dhikaaapr",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/dhik.favor",
  },
];

export const SKILLS = [
  {
    category: "Languages & Tools",
    items: [
      { name: "HTML", icon: <FaHtml5 size={32} /> },
      { name: "CSS", icon: <FaCss3Alt size={32} /> },
      { name: "JavaScript", icon: <FaJs size={32} /> },
      { name: "TypeScript", icon: <SiTypescript size={32} /> },
      { name: "Dart", icon: <SiDart size={32} /> },
      { name: "Git", icon: <FaGitAlt size={32} /> },
      { name: "Figma", icon: <FaFigma size={32} /> },
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Next.js", icon: <SiNextdotjs size={32} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
      { name: "Node.js", icon: <FaNodeJs size={32} /> },
      { name: "Express", icon: <SiExpress size={32} /> },
      { name: "Laravel", icon: <SiLaravel size={32} /> },
      { name: "Flutter", icon: <SiFlutter size={32} /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql size={32} /> },
      { name: "Supabase", icon: <SiSupabase size={32} /> },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Bibliotech",
    imageKey: "login_bibliotech",
    description:
      "Perpustakaan digital dengan sistem rekomendasi buku menggunakan metode SAW 📚",
    gradient: ["#1A1A2E", "#16213E"],
    url: "https://github.com/dhikaaaaaaa",
    tech: ["nextjs", "tailwindcss", "mysql"],
  },
  {
    name: "Calmora",
    imageKey: "login_calmora",
    description:
      "Platform kesehatan mental dengan chatbot AI dan fitur konseling 🧠",
    gradient: ["#134E5E", "#71B280"],
    url: "https://github.com/dhikaaaaaaa",
    tech: ["react", "nodejs", "mysql", "tailwindcss"],
  },
  {
    name: "Portfolio Website",
    imageKey: "web_portofolio",
    description: "Website portfolio personal dengan desain modern 🎨",
    gradient: ["#0F2027", "#203A43"],
    url: "https://github.com/dhikaaaaaaa",
    tech: ["nextjs", "tailwindcss", "typescript"],
  },
];

export const WORK_CONTENTS = {
  PARAMADINA: [
    {
      title: "Universitas Paramadina",
      description:
        "Berkontribusi dalam pengembangan Calmora, sebuah platform digital berbasis web yang menyediakan akses informasi kesehatan mental dan membantu pengguna menemukan konselor secara mudah.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer
        </div>
      ),
    },
    {
      title: "Calmora Project",
      description:
        "Bertanggung jawab melakukan slicing desain UI ke dalam bentuk halaman website responsif menggunakan teknologi frontend modern seperti HTML, CSS, dan Tailwind CSS. Mengintegrasikan API chatbot khusus kesehatan mental.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Sep 2024 - Jan 2025
        </div>
      ),
    },
  ],
  HIMTI: [
    {
      title: "HIMTI",
      description:
        "Himpunan Mahasiswa Teknik Informatika - Aktif dalam perencanaan dan pelaksanaan berbagai kegiatan edukatif seperti pelatihan, workshop, dan webinar untuk meningkatkan kemampuan akademik dan teknis mahasiswa.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Anggota Human Education
        </div>
      ),
    },
    {
      title: "Program Kegiatan",
      description:
        "Berperan dalam realisasi program unggulan seperti BRAHMA: IT FEAST READY, Kobit Academy, dan Webinar Series Alumni. Membantu penyusunan kurikulum, koordinasi pemateri, serta pengelolaan logistik kegiatan.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Jun 2022 - Des 2022
        </div>
      ),
    },
  ],
};

export const GTAG = "G-XXXXXXXXXX";
