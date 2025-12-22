export const portfolioData = {
  sectionTitle: {
    title: "My Portfolio",
    subtitle:
      "Explore my works, certifications, and the technologies I use — all in one place.",
  },

  tabs: {
    projects: [
      {
        id: 1,
        img: "/assets/project1.png",
        title: "Platform ERP (Enterprice Resource Planing)",
        subtitle:
          "Memperkenalkan kepada dunia mengenai siapa saya dan skill yang saya miliki.",
        desc: "webiste ini adalah website yang gunakan melakukan meagement atau melakukan monitoring beberapa platform Ecommerce dalam satu platform berbasis website",
        demo: "#",
        tags: ["Laravel", "Tailwind CSS", "Mysql", "Vite", "Node js"],
      },

      {
        id: 2,
        img: "/assets/project2.png",
        title: "PLatform POS (Point Of Sales)",
        subtitle: "Website Point Of Sales perusahaan A2M Jaya Teknologi.",
        desc: "Webiste ini adalah website yang digunakan oleh perusahaan untuk Memanagement setiap proses bisnis dengan platform yang modern.",
        demo: "#",
        tags: ["laravel", "Tailwind CSS", "Node.js", "MySql", "Node.js", "Vite"],
      },
      {
        id: 3,
        img: "/assets/project3.png",
        title: "Platform Website E-Commerce",
        subtitle: "Website E-Commerce untuk menjual produk perusahaan.",
        desc: "Webiste ini memungkinkan perusahaan mempromosikan produk yang mereka produksi untuk diperjualbelikan untuk publik.",
        demo: "#",
        tags: ["Vite", "Tailwind CSS", "JavaScript", "laravel", "Node.js", "MySql"],
      },
            {
        id: 4,
        img: "/assets/project4.png",
        title: "Platform CCTV Management System",
        subtitle:
          "Solusi terbaik untuk masalah akses cctv yang terbatas",
        desc: "Platform ini memberikan solusi dari permasalahan yang sering dialami dalam hal monitoring cctv serta memberikan akses yang mudah dan cepat",
        demo: "#",
        tags: ["Kotlin", "Golang", "PostgreSQL", "Redis", "WebRTC"],
      },
                  {
        id: 5,
        img: "/assets/project2.png",
        title: "Platform Company Profile",
        subtitle:
          "Memperkenalkan pada dunia tentang perusahaan A2M Jaya Teknologi",
        desc: "Adalah sebuah website yang memegang peran dalam mempromosikan serta meningkatkan image perusahaan",
        demo: "#",
        tags: ["Vite", "Tailwind CSS", "JavaScript", "laravel", "Node.js", "MySql"],
      },

    ],

    certificates: [
      {
        id: 1,
        img: "/assets/cert.jpg",
      },
      {
        id: 2,
        img: "/assets/cert.jpg",
      },
      {
        id: 3,
        img: "/assets/cert.jpg",
      },
    ],

    techStacks: [
      { id: 1, icon: "bx bxl-php", label: "PHP", color: "#777BB4" },
      {
        id: 2,
        icon: "bx bxl-tailwind-css",
        label: "Tailwind CSS",
        color: "#38BDF8",
      },
      { id: 3, icon: "bx bxl-nodejs", label: "Node.js", color: "#3C873A" },
      {
        id: 4,
        icon: "bx bxl-javascript",
        label: "JavaScript",
        color: "#F7DF1E",
      },
      { id: 5, icon: "bx bxl-react", label: "React", color: "#61DAFB" },
      { id: 6, icon: "bx bxl-git", label: "Git", color: "#F05032" },
      { id: 7, icon: "bx bxl-go-lang", label: "Golang", color: "#00ADD8" },
      { id: 8, icon: "bx bxl-docker", label: "Docker", color: "#2496ED" },
      { id: 9, icon: "bx bxl-aws", label: "AWS", color: "#FF9900" },
      {
        id: 10,
        icon: "bx bxl-kubernetes",
        label: "Kubernetes",
        color: "#326CE5",
      },
      {
        id: 11,
        icon: "bx bxl-visual-studio",
        label: "VS Code",
        color: "#007ACC",
      },
      // Redis menggunakan URL gambar agar bentuknya sempurna
      {
        id: 12,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        label: "Redis",
        color: "#DC382D",
        isCustomIcon: true,
      },
      {
        id: 13,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        label: "MySQL",
        color: "#4479A1",
        isCustomIcon: true,
      },
    ],
  },
};
