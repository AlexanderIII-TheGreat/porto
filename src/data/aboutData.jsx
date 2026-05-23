const aboutData = {
    title: "About Me",
    subtitle: "Discover my journey, passions, and the story behind my work",
    image: "/assets/hadesh.jpeg",

    biodata: [
        { label: "Name", value: "Abiyyu Abdiffatir Al Majid", icon: "bx bx-id-card" },
        { label: "Place of Birth", value: "Sragen, Indonesia", icon: "bx bx-map" },
        { label: "Email", value: "abiyyu040@gmail.com", icon: "bx bx-envelope" },
        { label: "Phone", value: "+62 857 1200 6320", icon: "bx bx-phone" },
        { label: "Education", value: "SMK Negeri 1 Mondokan", icon: "bx bx-book" },
    ],

    software: {
        role: "Software Engineer",
        glowClass: "from-blue-600 to-cyan-400",
        accentColor: "#2563eb",
        narrative: {
            whoAmI: {
                text: "Saya adalah seorang software engineer yang terbiasa dalam melakukan perancangan, pengembangan dan juga pemeliharaan sebuah software secara end-to-end serta berorientasi pada best practice dari setiap case itu sendiri.",
                icon: "bx-code-alt"
            },
            approach: {
                text: "Saya berfokus melakukan perancangan sebuah software yang dapat meningkatkan efisiensi serta efektifitas operasional dari perusahaan serta membantu perusahaan bertumbuh menjadi lebih baik dengan pendekatan digitalisasi.",
                icon: "bx-bulb"
            }
        }
    },

    network: {
        role: "Network Engineer",
        glowClass: "from-purple-600 to-indigo-400",
        accentColor: "#8b5cf6",
        narrative: {
            whoAmI: {
                text: "Saya adalah seorang network engineer yang berpengalaman dalam merancang, mengonfigurasi, dan memelihara infrastruktur jaringan komputer, routing protokol, serta arsitektur cloud terdistribusi yang aman.",
                icon: "bx-server"
            },
            approach: {
                text: "Pendekatan saya berfokus pada perancangan jaringan dengan tingkat ketersediaan tinggi (high-availability), keamanan cyber yang tangguh, optimalisasi bandwidth, serta manajemen infrastruktur cloud AWS yang efisien.",
                icon: "bx-shield-quarter"
            }
        }
    }
};

export default aboutData;
