const createSvgDataUri = (svg) =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const createAvatar = (name) =>
    createSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#2563eb" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#22c55e" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" rx="36" fill="url(#bg)" />
      <circle cx="160" cy="120" r="62" fill="rgba(255,255,255,0.1)" />
      <circle cx="160" cy="112" r="40" fill="rgba(255,255,255,0.9)" />
      <path d="M92 258c12-42 40-64 68-64s56 22 68 64" fill="rgba(255,255,255,0.9)" />
      <path d="M80 86h160" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
      <path d="M80 236h160" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
      <rect x="42" y="42" width="236" height="236" rx="28" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
      <circle cx="248" cy="72" r="9" fill="url(#accent)" />
      <text x="160" y="292" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="Arial, sans-serif" font-size="20" font-weight="700">${name}</text>
    </svg>
  `);

const createProjectPreview = (title) =>
    createSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 440">
      <defs>
        <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="55%" stop-color="#1d4ed8" />
          <stop offset="100%" stop-color="#0f766e" />
        </linearGradient>
        <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#22c55e" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>
      </defs>
      <rect width="720" height="440" rx="32" fill="url(#a)" />
      <rect x="44" y="48" width="632" height="344" rx="24" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <rect x="76" y="84" width="568" height="34" rx="10" fill="rgba(255,255,255,0.14)" />
      <rect x="76" y="144" width="280" height="150" rx="18" fill="rgba(255,255,255,0.12)" />
      <rect x="376" y="144" width="268" height="150" rx="18" fill="rgba(255,255,255,0.1)" />
      <rect x="76" y="316" width="568" height="42" rx="14" fill="url(#b)" />
      <circle cx="118" cy="101" r="8" fill="#f97316" />
      <circle cx="146" cy="101" r="8" fill="#eab308" />
      <circle cx="174" cy="101" r="8" fill="#22c55e" />
      <text x="92" y="224" fill="white" font-family="Arial, sans-serif" font-size="26" font-weight="700">${title}</text>
      <text x="92" y="258" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="16">Modern dashboard preview</text>
    </svg>
  `);

const createCertificatePreview = (title) =>
    createSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#dbeafe" />
        </linearGradient>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="100%" stop-color="#14b8a6" />
        </linearGradient>
      </defs>
      <rect width="720" height="520" rx="34" fill="#0f172a" />
      <rect x="34" y="34" width="652" height="452" rx="28" fill="url(#g)" />
      <circle cx="132" cy="130" r="54" fill="url(#ring)" opacity="0.9" />
      <circle cx="132" cy="130" r="30" fill="#ffffff" />
      <path d="M120 354l32-48 32 48" fill="none" stroke="#2563eb" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="240" y="110" width="320" height="28" rx="12" fill="#dbeafe" />
      <rect x="240" y="154" width="220" height="20" rx="10" fill="#bfdbfe" />
      <rect x="92" y="412" width="536" height="18" rx="9" fill="#dbeafe" />
      <text x="240" y="256" fill="#0f172a" font-family="Arial, sans-serif" font-size="28" font-weight="700">${title}</text>
      <text x="240" y="298" fill="#334155" font-family="Arial, sans-serif" font-size="16">Professional training certificate</text>
    </svg>
  `);

export const defaultPortfolioData = {
    profileImage: "/fotoRisma1.jpeg",
    navItems: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Skills", path: "/skills" },
        { label: "Projects", path: "/projects" },
        { label: "Experience", path: "/experience" },
        { label: "Certificates", path: "/certificates" },
        { label: "Contact", path: "/contact" },
    ],
    profile: {
        name: "Risma Paramesti",
        role: "Fullstack Developer",
        summary:
            "I am a Fullstack Web Developer focused on building functional, efficient, and user-friendly web applications. I am passionate about creating digital solutions that address real-world needs while continuously expanding my skills in UI/UX Design and Data Analytics.",
    },
    aboutPoints: ["Fullstack Developer", "Data Analyst", "UI UX Designer"],
    skillGroups: [
        {
            title: "React.js",
            skills: [{ name: "React.js", level: 90 }],
        },
        {
            title: "JavaScript",
            skills: [{ name: "JavaScript", level: 92 }],
        },
        {
            title: "REST API",
            skills: [{ name: "REST API", level: 90 }],
        },
        {
            title: "HTML & CSS",
            skills: [{ name: "HTML & CSS", level: 90 }],
        },
        {
            title: "Tailwind CSS",
            skills: [{ name: "Tailwind CSS", level: 89 }],
        },
        {
            title: "Node.js",
            skills: [{ name: "Node.js", level: 92 }],
        },
        {
            title: "Express.js",
            skills: [{ name: "Express.js", level: 86 }],
        },
        {
            title: "PHP",
            skills: [{ name: "PHP", level: 83 }],
        },
        {
            title: "Python",
            skills: [{ name: "Python", level: 82 }],
        },
        {
            title: "MySQL",
            skills: [{ name: "MySQL", level: 90 }],
        },
        {
            title: "Git",
            skills: [{ name: "Git", level: 88 }],
        },
        {
            title: "GitHub",
            skills: [{ name: "GitHub", level: 90 }],
        },
        {
            title: "Postman",
            skills: [{ name: "Postman", level: 88 }],
        },
        {
            title: "VS Code",
            skills: [{ name: "VS Code", level: 90 }],
        },
        {
            title: "Pentaho Data Integration",
            skills: [{ name: "Pentaho Data Integration", level: 80 }],
        },
        {
            title: "Figma",
            skills: [{ name: "Figma", level: 76 }],
        },
        {
            title: "Dart",
            skills: [{ name: "Dart", level: 80 }],
        },
        {
            title: "Flutter",
            skills: [{ name: "Flutter", level: 80 }],
        },
    ],
    projects: [
        {
            name: "Employee Management Information System",
            description:
                "An internal application for managing employee data, attendance, payroll, recruitment, leave, reimbursement, and salary appeals in a structured workflow.",
            tech: ["React.js", "Node.js", "Express.js", "MySQL"],
            features: [
                "Attendance Management",
                "Payroll Processing",
                "Recruitment",
                "Leave Management",
                "Reimbursement",
                "Salary Appeals",
            ],
            demo: "",
            github: "https://github.com/RismaParamesti/simpegawai",
            image: ["/project/simpegawai.jpeg"],
        },
        {
            name: "Disaster Socialization Data Management System",
            description:
                "A web-based system for managing disaster socialization data to support data processing and decision-making.",
            tech: [
                "React.js",
                "Node.js",
                "Pentaho Data Integration",
                "MySQL",
                "JavaScript",
            ],
            features: [
                "Data Collection",
                "Data Processing",
                "Data Visualization",
                "Decision Support",
            ],
            demo: "",
            github: "https://github.com/RismaParamesti/Web-BPBD",
            image: ["/project/manajemen-data-sosialisasi.png"],
        },
        {
            name: "Point of Sale (POS) System",
            description:
                "A responsive web-based Point of Sale (POS) interface designed to support sales, inventory, and product management.",
            tech: ["React.js", "Tailwind CSS", "Figma"],
            features: [
                "Product Management",
                "Inventory Management",
                "Responsive User Interface",
            ],
            demo: "",
            github: "https://github.com/RismaParamesti/WEB-POS",
            image: ["/project/web-pos.png"],
        },
    ],

    workExperiences: [
        {
            company: "MBKM PT Otak Kanan",
            period: "September 2024 – December 2024",
            role: "Fullstack Web Developer Intern",
            description:
                "Developed a web-based Point of Sale (POS) system using React.js, Node.js, Express.js, and MySQL. Contributed to frontend and backend development, database management, and the implementation of features to support product and warehouse management.",
        },
        {
            company: "MBKM BPBD Kota Surabaya",
            period: "March 2025 – June 2025",
            role: "Fullstack Web Developer Intern",
            description:
                "Developed a web-based disaster socialization data management system to support data processing and decision-making. Contributed to UI/UX design, frontend and backend development, database management, and data integration using Pentaho Data Integration.",
        },
        {
            company: "Universitas Pembangunan Nasional Veteran Jawa Timur",
            period: "June 2024",
            role: "Programming Language Teaching Assistant",
            description:
                "Assisted students in understanding programming concepts and practical implementation. Provided guidance during programming projects, supported classroom activities, and helped students solve technical problems throughout the learning process.",
        },
    ],
    activityExperiences: [
        {
            company: "MBKM BPBD Kota Surabaya",
            period: "Maret 2025 – Juni 2025",
            role: "Fullstack Web Developer Intern",
            description:
                "Mengembangkan sistem pendukung keputusan dan membantu digitalisasi proses kerja menggunakan teknologi web.",
            article: [
                "Selama mengikuti program MBKM di BPBD Kota Surabaya, saya berperan sebagai Fullstack Web Developer Intern dalam pengembangan sistem pendukung keputusan. Kegiatan ini mempertemukan kebutuhan operasional di lapangan dengan solusi digital yang lebih terstruktur.",
                "Saya terlibat dalam proses pengolahan dan integrasi data menggunakan metode ETL (Extract, Transform, Load) dengan Pentaho Data Integration. Data yang sebelumnya tersedia dalam format Microsoft Excel diekstraksi, ditransformasikan sesuai kebutuhan sistem, kemudian dimuat ke dalam database untuk mendukung pengelolaan dan pemanfaatan data secara lebih terstruktur.",
                "Selain pengolahan data, saya merancang desain UI/UX menggunakan Figma dengan menyesuaikan kebutuhan pengguna dan alur kerja yang ada. Desain tersebut kemudian diimplementasikan menjadi aplikasi web menggunakan React.js pada sisi frontend dan Node.js pada sisi backend, sehingga sistem dapat menyediakan antarmuka yang mudah digunakan serta mendukung pengelolaan dan akses data.",
                "Pengalaman ini memperkuat pemahaman saya tentang pengembangan sistem secara end-to-end, mulai dari pengolahan data, perancangan UI/UX, hingga implementasi aplikasi web. Saya juga belajar pentingnya komunikasi dengan pengguna, ketelitian dalam mengelola data, serta pengembangan sistem yang dapat membantu pengambilan keputusan secara lebih efektif.",
            ],
            images: [
                "/experience/mbkm-bpbd-1.jpeg",
                "/experience/mbkm-bpbd-2.jpg",
            ],
        },
        {
            company: "PT Otak Kanan",
            period: "September 2024 – Desember 2024",
            role: "Fullstack Web Developer Intern",
            description:
                "Berpartisipasi dalam pengembangan aplikasi Point of Sale (POS) untuk mendukung pengelolaan produk dan proses operasional perusahaan.",
            article: [
                "Selama mengikuti program MBKM di PT Otak Kanan, saya berperan sebagai Fullstack Web Developer Intern dan terlibat dalam pengembangan aplikasi berbasis web. Kegiatan ini memberikan pengalaman dalam menerjemahkan kebutuhan sistem menjadi solusi digital yang dapat mendukung proses operasional perusahaan.",
                "Saya terlibat dalam perancangan dan pengembangan fitur aplikasi Point of Sale (POS), khususnya pada pengelolaan produk dan gudang. Sebelum proses implementasi, saya membantu merancang tampilan dan pengalaman pengguna dengan mempertimbangkan kebutuhan pengguna serta alur penggunaan sistem.",
                "Pada tahap pengembangan, saya mengimplementasikan antarmuka aplikasi menggunakan React.js dan Tailwind CSS. Saya berfokus pada pembuatan tampilan yang responsif, terstruktur, dan mudah digunakan, serta memastikan setiap halaman dan komponen dapat mendukung kebutuhan pengelolaan data dalam sistem.",
                "Pengalaman ini memperkuat pemahaman saya mengenai proses pengembangan aplikasi web, mulai dari memahami kebutuhan pengguna, merancang UI/UX, hingga mengimplementasikan desain menjadi aplikasi yang fungsional. Saya juga memperoleh pengalaman bekerja dalam lingkungan pengembangan teknologi dan mengembangkan solusi digital yang sesuai dengan kebutuhan bisnis.",
            ],
            images: [
                "/experience/mbkm-otak-kanan-1.jpg",
                "/experience/mbkm-otak-kanan-2.jpeg",
            ],
        },
        {
            company: "BPBD Kota Surabaya",
            period: "22 Mei 2025",
            role: "Pemateri Sosialisasi Penanggulangan Bencana",
            description:
                "Memberikan edukasi mengenai penanggulangan bencana kepada 35 siswa TK Pembangun Surabaya melalui penyampaian materi, praktik simulasi, dan kegiatan interaktif.",
            article: [
                "Sebagai bagian dari kegiatan sosialisasi penanggulangan bencana di BPBD Kota Surabaya, saya berkesempatan menjadi pemateri bagi 35 anak di TK Pembangun Surabaya. Kegiatan ini bertujuan untuk mengenalkan pengetahuan dasar mengenai bencana serta meningkatkan kesiapsiagaan anak sejak usia dini.",
                "Saya menyampaikan materi dengan pendekatan yang sederhana, interaktif, dan mudah dipahami oleh anak-anak. Materi disesuaikan dengan usia peserta agar mereka dapat mengenali situasi bencana dan memahami langkah-langkah dasar yang dapat dilakukan untuk menjaga keselamatan diri.",
                "Selain penyampaian materi, kegiatan juga dilengkapi dengan praktik dan simulasi menghadapi bencana. Anak-anak diajak untuk mengikuti arahan dan mempraktikkan langkah-langkah kesiapsiagaan secara langsung sehingga proses pembelajaran menjadi lebih menarik dan mudah diingat.",
                "Untuk menciptakan suasana yang menyenangkan, kegiatan juga diselingi dengan hiburan dan interaksi bersama anak-anak. Pengalaman ini mengembangkan kemampuan saya dalam public speaking, komunikasi, dan menyampaikan informasi kepada audiens dengan karakteristik yang berbeda.",
            ],
            images: [
                "/experience/sosialisasi-bencana-1.jpeg",
                "/experience/sosialisasi-bencana-2.jpeg",
            ],
        },
        {
            company: "Pemerintah Kabupaten Sidoarjo",
            period: "26 Juni 2025",
            role: "Penerima Beasiswa Prestasi Akademik Kabupaten Sidoarjo",
            description:
                "Terpilih sebagai penerima Beasiswa Prestasi Akademik Kabupaten Sidoarjo Tahun 2025 sebagai bentuk apresiasi atas pencapaian akademik.",
            article: [
                "Pada tahun 2025, saya terpilih sebagai salah satu penerima Beasiswa Prestasi Akademik Kabupaten Sidoarjo. Penghargaan ini menjadi bentuk apresiasi atas komitmen dan pencapaian saya dalam bidang akademik selama menempuh pendidikan.",
                "Program beasiswa ini menjadi motivasi bagi saya untuk terus mempertahankan semangat belajar, meningkatkan kompetensi, dan mengembangkan potensi diri. Bagi saya, pencapaian akademik bukan hanya tentang memperoleh hasil yang baik, tetapi juga tentang proses belajar, konsistensi, dan kemauan untuk terus berkembang.",
                "Kesempatan menjadi penerima Beasiswa Prestasi Akademik Kabupaten Sidoarjo Tahun 2025 juga menjadi pengalaman yang membanggakan dan memberikan dorongan untuk terus memberikan hasil terbaik dalam perjalanan akademik maupun pengembangan karier.",
                "Pencapaian ini mengingatkan saya bahwa setiap proses dan usaha yang dilakukan secara konsisten dapat menghasilkan perkembangan yang berarti. Ke depannya, saya ingin terus mengembangkan kemampuan, memperluas pengalaman, dan menerapkan pengetahuan yang saya miliki untuk memberikan kontribusi positif melalui bidang teknologi.",
            ],
            images: ["/experience/beasiswa-sidoarjo-1.jpeg"],
        },
        {
            company: "PEPELINGASIH Kabupaten Sidoarjo",
            period: "14 Agustus 2025",
            role: "Juri Lomba Kebersihan Lingkungan Antar-RT",
            description:
                "Menjadi juri lomba kebersihan lingkungan antar-RT di Desa Sidomulyo, Kecamatan Buduran, Kabupaten Sidoarjo sebagai bagian dari peran Duta Pemuda Peduli Lingkungan Asri dan Bersih (PEPELINGASIH) Kabupaten Sidoarjo.",
            article: [
                "Pada 14 Agustus 2025, saya berkesempatan menjadi juri dalam Lomba Kebersihan Lingkungan Antar-RT yang diselenggarakan di Desa Sidomulyo, Kecamatan Buduran, Kabupaten Sidoarjo. Saya menjalankan peran tersebut sebagai bagian dari Duta Pemuda Peduli Lingkungan Asri dan Bersih (PEPELINGASIH) Kabupaten Sidoarjo.",
                "Dalam kegiatan ini, saya melakukan penilaian terhadap kebersihan dan kondisi lingkungan pada masing-masing RT peserta. Proses penilaian dilakukan dengan mengamati berbagai aspek lingkungan, termasuk kebersihan, kerapian, serta upaya masyarakat dalam menjaga dan menciptakan lingkungan yang bersih dan nyaman.",
                "Kegiatan ini menjadi salah satu bentuk partisipasi saya dalam mendukung kepedulian masyarakat terhadap kebersihan lingkungan. Selain menentukan hasil perlombaan, kegiatan ini juga bertujuan untuk mendorong semangat gotong royong dan meningkatkan kesadaran masyarakat akan pentingnya menjaga lingkungan secara bersama-sama.",
                "Pengalaman menjadi juri dalam kegiatan ini memberikan kesempatan bagi saya untuk berinteraksi langsung dengan masyarakat serta berkontribusi dalam kegiatan yang sejalan dengan semangat PEPELINGASIH. Pengalaman ini juga memperkuat kemampuan saya dalam melakukan observasi, penilaian, komunikasi, serta menjalankan tanggung jawab dalam sebuah kegiatan masyarakat.",
            ],
            images: [
                "/experience/juri-kebersihan-1.jpeg",
                "/experience/juri-kebersihan-2.jpeg",
            ],
        },
        {
            company: "PEPELINGASIH Kabupaten Sidoarjo",
            period: "4 Oktober 2024",
            role: "Pemateri Edukasi Pengelolaan Sampah",
            description:
                "Menjadi pemateri edukasi pengelolaan sampah sebagai Duta Pemuda Peduli Lingkungan Asri dan Bersih (PEPELINGASIH) Kabupaten Sidoarjo bagi siswa kelas 5 dan 6 SD Muhammadiyah Candi Sidoarjo.",
            article: [
                "Pada 4 Oktober 2024, saya berkesempatan menjadi pemateri dalam kegiatan edukasi lingkungan di SD Muhammadiyah Candi Sidoarjo sebagai bagian dari peran saya sebagai Duta Pemuda Peduli Lingkungan Asri dan Bersih (PEPELINGASIH) Kabupaten Sidoarjo. Kegiatan ini diikuti oleh siswa kelas 5 dan 6 dengan materi utama mengenai pengelolaan sampah.",
                "Dalam kegiatan tersebut, saya menyampaikan edukasi mengenai pentingnya menjaga kebersihan lingkungan, mengenali jenis-jenis sampah, serta memahami cara mengelola sampah dengan tepat. Materi disampaikan secara interaktif agar siswa dapat memahami bahwa pengelolaan sampah merupakan tanggung jawab bersama dan dapat dimulai dari kebiasaan sederhana dalam kehidupan sehari-hari.",
                "Saya juga mengajak para siswa untuk meningkatkan kepedulian terhadap lingkungan melalui penerapan prinsip pengelolaan sampah, seperti mengurangi penggunaan barang sekali pakai, menggunakan kembali barang yang masih dapat dimanfaatkan, serta memilah sampah sesuai jenisnya.",
                "Pengalaman menjadi pemateri memberikan kesempatan bagi saya untuk mengembangkan kemampuan public speaking, komunikasi, dan penyampaian materi edukatif kepada peserta didik. Kegiatan ini juga menjadi bentuk kontribusi saya sebagai Duta PEPELINGASIH dalam meningkatkan kesadaran generasi muda terhadap pentingnya menjaga kebersihan dan kelestarian lingkungan.",
            ],
            images: [
                "/experience/pemateri-sampah-1.jpeg",
                "/experience/pemateri-sampah-2.jpeg",
            ],
        },
        {
            company: "Garda Desa Pertiwi",
            period: "30 Juni 2024",
            role: "Master of Ceremony (MC)",
            description:
                "Menjadi Master of Ceremony dalam kegiatan sosialisasi kepada warga dan penanaman pohon di Desa Sidodadi, Sidoarjo, yang diselenggarakan melalui kerja sama dengan Disporapar dan DLHK Kabupaten Sidoarjo.",
            article: [
                "Pada 30 Juni 2024, saya berkesempatan menjadi Master of Ceremony (MC) dalam kegiatan Garda Desa Pertiwi yang dilaksanakan di Desa Sidodadi, Sidoarjo. Kegiatan ini merupakan bagian dari upaya meningkatkan kepedulian masyarakat terhadap lingkungan melalui sosialisasi dan aksi nyata penanaman pohon.",
                "Dalam kegiatan tersebut, saya bertugas memandu seluruh rangkaian acara, mulai dari pembukaan, penyampaian materi sosialisasi kepada warga desa, hingga pelaksanaan kegiatan penanaman pohon. Saya memastikan setiap rangkaian kegiatan berjalan secara terstruktur dan membantu menjaga komunikasi antara panitia, narasumber, serta peserta.",
                "Kegiatan ini dilaksanakan melalui kerja sama dengan Dinas Kepemudaan, Olahraga, dan Pariwisata (Disporapar) serta Dinas Lingkungan Hidup dan Kebersihan (DLHK) Kabupaten Sidoarjo. Keterlibatan berbagai pihak memberikan pengalaman bagi saya dalam berkomunikasi dan berkoordinasi dalam kegiatan yang melibatkan masyarakat serta instansi pemerintah.",
                "Pengalaman menjadi MC dalam kegiatan ini mengembangkan kemampuan public speaking, komunikasi, improvisasi, dan pengelolaan suasana acara. Selain itu, kegiatan ini memberikan kesempatan bagi saya untuk berkontribusi dalam mengajak masyarakat meningkatkan kepedulian terhadap lingkungan melalui edukasi dan aksi penanaman pohon secara langsung.",
            ],
            images: [
                "/experience/garda-desa-pertiwi-1.jpeg",
                "/experience/garda-desa-pertiwi-2.jpeg",
            ],
        },
        {
            company: "PEPELINGASIH Kabupaten Sidoarjo",
            period: "30 November 2023",
            role: "Finalis Duta PEPELINGASIH Kabupaten Sidoarjo 2023",
            description:
                "Terpilih sebagai finalis Duta Pemuda Peduli Lingkungan Asri dan Bersih (PEPELINGASIH) Kabupaten Sidoarjo Tahun 2023 sebagai bentuk partisipasi dalam kegiatan kepemudaan dan kepedulian terhadap lingkungan.",
            article: [
                "Pada 30 November 2023, saya terpilih sebagai salah satu finalis Duta Pemuda Peduli Lingkungan Asri dan Bersih (PEPELINGASIH) Kabupaten Sidoarjo Tahun 2023. Kegiatan ini menjadi kesempatan bagi saya untuk berpartisipasi dalam program kepemudaan yang berfokus pada peningkatan kepedulian dan kesadaran generasi muda terhadap lingkungan.",
                "Sebagai finalis, saya mengikuti rangkaian kegiatan yang memberikan wawasan mengenai isu lingkungan, pengelolaan lingkungan yang berkelanjutan, serta peran pemuda dalam mengajak masyarakat untuk lebih peduli terhadap kebersihan dan kelestarian lingkungan.",
                "Pengalaman ini menjadi salah satu langkah awal dalam perjalanan saya untuk terlibat dalam berbagai kegiatan edukasi dan kampanye lingkungan. Melalui PEPELINGASIH, saya mendapatkan kesempatan untuk mengembangkan kemampuan komunikasi, membangun kepercayaan diri, serta berinteraksi dengan pemuda lain yang memiliki kepedulian terhadap lingkungan.",
                "Pengalaman sebagai finalis Duta PEPELINGASIH Kabupaten Sidoarjo Tahun 2023 juga menjadi motivasi bagi saya untuk terus berkontribusi dalam kegiatan yang memberikan dampak positif bagi masyarakat dan lingkungan.",
            ],
            images: [
                "/experience/finalis-pepelingasih-1.jpg",
                "/experience/finalis-pepelingasih-2.jpg",
            ],
        },
    ],

    certificatesList: [
        {
            title: "Junior Web Programmer",
            description:
                "Sertifikasi resmi untuk kompetensi dasar web programmer yang dikeluarkan oleh Badan Nasional Sertifikasi Profesi (BNSP) dan LSP UPN VETERAN JAWA TIMUR.",
            image: "/certificates/junior-web-programmer-depan.jpeg",
            imageBelakang: "/certificates/junior-web-programmer-belakang.jpeg",
        },
        {
            title: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
            description:
                "Pelatihan resmi dari kampus yang bertujuan melatih jiwa kepemimpinan, kemampuan komunikasi, pola pikir kritis, serta keterampilan manajerial dalam berorganisasi bagi mahasiswa.",
            image: "/certificates/lkmmtd.jpeg",
        },
        {
            title: "Sertifikasi Kompetensi Belajar Penggunaan Generative AI Dicoding Indonesia",
            description:
                "Kursus komprehensif tentang penggunaan Generative AI dalam berbagai konteks",
            image: "/certificates/generative-ai-dicoding-depan.jpg",
            imageBelakang: "/certificates/generative-ai-dicoding-belakang.jpg",
        },
        {
            title: "Sertifikasi Kompetensi AI Praktis untuk Produktivitas Dicoding Indonesia",
            description:
                "Kursus komprehensif tentang penggunaan AI untuk meningkatkan produktivitas dalam berbagai konteks",
            image: "/certificates/ai-praktis-depan.jpg",
            imageBelakang: "/certificates/ai-praktis-belakang.jpg",
        },
        {
            title: "Sertifikasi Kompetensi Belajar Dasar Visualisasi Data Dicoding Indonesia",
            description:
                "Kursus komprehensif tentang dasar-dasar visualisasi data dan penerapannya dalam konteks dunia nyata",
            image: "/certificates/visualisasi-data-depan.jpg",
            imageBelakang: "/certificates/visualisasi-data-belakang.jpg",
        },
        {
            title: "Sertifikasi Kompetensi Belajar Dasar AI Dicoding Indonesia",
            description:
                "Kursus komprehensif tentang dasar-dasar kecerdasan buatan dan penerapannya dalam konteks dunia nyata",
            image: "/certificates/ai-dasar-depan.jpg",
            imageBelakang: "/certificates/ai-dasar-belakang.jpg",
        },
    ],
    contact: {
        email: "rismaparamesti@gmail.com",
        linkedin: "linkedin.com/in/rismaparamesti",
        github: "github.com/rismaparamesti",
        instagram: "https://www.instagram.com/risma_mesti/",
    },
};

export function clonePortfolioData(data = defaultPortfolioData) {
    return JSON.parse(JSON.stringify(data));
}
