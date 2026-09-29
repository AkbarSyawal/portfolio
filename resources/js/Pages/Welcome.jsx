import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [pdfOpen, setPdfOpen] = useState(false);

    const navItems = [
        { id: 'hero', label: 'Home', icon: 'home' },
        { id: 'about', label: 'About', icon: 'user' },
        { id: 'resume', label: 'Resume', icon: 'file' },
        { id: 'portfolio', label: 'Portfolio', icon: 'image' },
        { id: 'contact', label: 'Contact', icon: 'mail' },
    ];

    const skills = [
        { name: 'HTML', value: 100 },
        { name: 'CSS', value: 90 },
        { name: 'Tailwind', value: 100 },
        { name: 'Laravel Framework', value: 100 },
        { name: 'JavaScript', value: 90 },
        { name: 'MySQL', value: 80 },
        { name: 'C++', value: 75 },
        { name: 'PHP', value: 90 },
        { name: 'Photoshop', value: 55 },
        { name: 'Vue (Laravel)', value: 70 },
        { name: 'Python', value: 55 },
        { name: 'Golang', value: 60 },
        { name: 'React (Laravel)', value: 100 },
        { name: 'Flutter', value: 70 },
       
    ];

    const [typedSkill, setTypedSkill] = useState('');
    const [skillIndex, setSkillIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentSkill = skills[skillIndex].name;

        const typingSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setTypedSkill(currentSkill.substring(0, typedSkill.length + 1));

                if (typedSkill.length + 1 === currentSkill.length) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setTypedSkill(currentSkill.substring(0, typedSkill.length - 1));

                if (typedSkill.length === 0) {
                    setIsDeleting(false);
                    setSkillIndex((prev) => (prev + 1) % skills.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedSkill, skillIndex, isDeleting]);    

    const stats = [
        {
            number: '86',
            label: 'Klien yang senang',
            icon: 'smile',
        },
        {
            number: '50',
            label: 'Projects',
            icon: 'project',
        },
        {
            number: '24',
            label: 'Jam Dukungan',
            icon: 'support',
        },
        {
            number: '2',
            label: 'Pekerja keras',
            icon: 'people',
        },
    ];

    const education = [
        {
            title: 'SDN Mangkura 4 Makassar',
            year: '2007 - 2013',
        },
        {
            title: 'SPMN 6 Makassar',
            year: '2013 - 2016',
        },
        {
            title: 'SMAN 2 Makassar',
            year: '2016 - 2019',
        },
        {
            title: 'Universitas Gunadarma',
            year: '2019 - Sekarang',
            description: 'Sistem Informasi',
        },
    ];

    const experiences = [
        {
            title: 'Staff IT',
            year: '2024 - Sekarang',
            company: 'PT. Edukasi Indonesia Jaya',
            description: 'FullStack Developer',
        },
        {
            title: 'Senior Business Consultant',
            year: '2023 - 2024',
            company: 'PT. Equity World Futures, Sudirman, Jakarta',
        },
        {
            title: 'Photografer Dan Editor',
            year: '2020 - 2021',
            company: '235 FOTO, Cisauk, Tangerang Selatan',
        },


    ];

    const abilities = [
        'Full Stack Web Development',
        'Backend Development & REST API',
        'Laravel, React.js & Vue.js',
        'Database Design & MySQL',
        'Mobile Application Development dengan Flutter & Dart',
        'Sistem Keuangan & Sistem Pembayaran',
        'Sistem Manajemen Data & Dashboard',
        'Document Approval System & Multi-Level Approval',
        'AI Assistant berbasis Laravel & React',
        'Jastip Management System',
        'Pengembangan Aplikasi Bisnis Custom',
        'Freelance Website & Mobile Application Development',
    ];

    const hobbies = [
        'Basket',
        'Nonton Film',
        'Vlogger',
        'Fotografi Otomotif',
        'Seputar Otomotif',
    ];

    const achievements = [
        'DBL Exhibition (2016) - Juara 2 Runner Up',
        'Cosplay Walk Japan Matsuri (2019) - TOP 10',
    ];

    const Icon = ({ name, className = 'h-5 w-5' }) => {
        const icons = {
            home: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" />
                </svg>
            ),

            user: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
            ),

            file: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6M8 13h8M8 17h6" />
                </svg>
            ),

            image: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                </svg>
            ),

            mail: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                </svg>
            ),

            phone: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
            ),

            location: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                </svg>
            ),

            calendar: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
            ),

            code: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
                </svg>
            ),

            pdf: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h2a1.5 1.5 0 0 1 0 3H8v-3ZM14 16v-3h1.5a1.5 1.5 0 0 1 0 3H14ZM18 13h2M18 15h2" />
                </svg>
            ),

            external: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 4h6v6M20 4l-9 9" />
                    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
                </svg>
            ),

            arrow: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            ),

            menu: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            ),

            close: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 6 12 12M18 6 6 18" />
                </svg>
            ),

            instagram: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
            ),

            whatsapp: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
                    <path d="M8.5 8.5c.3-.7.6-.7 1-.7h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c.8 1.4 1.8 2.2 3.2 2.8l.6-.7c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.6v.5c0 .4-.2.7-.7 1-1 .4-2.3-.1-3.7-.9-2-1.1-3.5-2.6-4.4-4.2-.7-1.3-1-2.5-.5-3.2Z" />
                </svg>
            ),

            smile: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                </svg>
            ),

            project: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M8 9h8M8 13h5M8 17h3" />
                </svg>
            ),

            support: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                    <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4ZM20 14h-3v5h2a1 1 0 0 0 1-1v-4Z" />
                    <path d="M12 19h3" />
                </svg>
            ),

            people: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0-1-5.8M18 14a5 5 0 0 1 3 4" />
                </svg>
            ),
        };

        return (
            <svg
                className={className}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {icons[name]}
            </svg>
        );
    };

    return (
        <>
            <Head>
                <title>Portofolio Akbar Syawal</title>
                <meta
                    name="description"
                    content="Portfolio A.Muh.Akbar Syawal.H - FullStack Developer."
                />
            </Head>

            <div className="min-h-screen bg-white text-gray-800">

                {/* ================= MOBILE HEADER ================= */}
                <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-gray-950 px-5 text-white lg:hidden">
                    <a
                        href="#hero"
                        className="text-base font-bold tracking-tight"
                    >
                        Akbar Syawal
                    </a>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="rounded-xl p-2 transition hover:bg-white/10"
                    >
                        <Icon name="menu" className="h-6 w-6" />
                    </button>
                </header>

                {/* ================= MOBILE SIDEBAR ================= */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-[60] lg:hidden">
                        <div
                            className="absolute inset-0 bg-black/60"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <aside className="relative h-full w-72 bg-gray-950 p-6 text-white shadow-2xl">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="absolute right-5 top-5 rounded-xl p-2 text-gray-400 hover:bg-white/10 hover:text-white"
                            >
                                <Icon name="close" className="h-6 w-6" />
                            </button>

                            <div className="pt-4 text-center">
                                <img
                                    src="/assets/img/myprofile.jpg"
                                    alt="Akbar Syawal"
                                    className="mx-auto h-24 w-24 rounded-full border-4 border-white/10 object-cover"
                                />

                                <h2 className="mt-4 text-lg font-bold">
                                    A.Muh.Akbar Syawal.H, S.Kom
                                </h2>

                                <p className="mt-1 text-xs text-gray-400">
                                    Fullstack Developer
                                </p>
                            </div>

                            <nav className="mt-8 space-y-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() =>
                                            setMobileMenuOpen(false)
                                        }
                                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                                    >
                                        <Icon
                                            name={item.icon}
                                            className="h-5 w-5"
                                        />
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </aside>
                    </div>
                )}

                {/* ================= DESKTOP SIDEBAR ================= */}
                <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col bg-gray-950 px-8 py-8 text-white lg:flex">
                    <div className="text-center">
                        <img
                            src="/assets/img/myprofile.jpg"
                            alt="Akbar Syawal"
                            className="mx-auto h-32 w-32 rounded-full border-4 border-white/10 object-cover"
                        />

                        <h1 className="mt-5 text-xl font-bold tracking-tight">
                            A.Muh.Akbar Syawal.H, S.Kom
                        </h1>

                        <p className="mt-2 text-sm text-gray-400">
                            Fullstack Developer
                        </p>
                    </div>

                    <div className="mt-7 flex justify-center gap-2">
                        <a
                            href="https://www.instagram.com/kizu_id"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-white hover:text-gray-950"
                        >
                            <Icon name="instagram" className="h-4 w-4" />
                        </a>

                        <a
                            href="https://api.whatsapp.com/send?phone=62895406889664&text=Hallo%20Admin%20Saya%20Mau%20Bertanya%20Soal%20Jasa%20Pembuatan%20Website"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-white hover:text-gray-950"
                        >
                            <Icon name="whatsapp" className="h-4 w-4" />
                        </a>
                    </div>

                    <nav className="mt-10 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/5 hover:text-white ${
                                    item.id === 'hero'
                                        ? 'bg-white/10 text-white'
                                        : ''
                                }`}
                            >
                                <Icon
                                    name={item.icon}
                                    className="h-5 w-5"
                                />
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs leading-5 text-gray-400">
                            Open untuk project website, sistem informasi,
                            dashboard, dan aplikasi berbasis Laravel.
                        </p>
                    </div>
                </aside>

                {/* ================= MAIN ================= */}
                <main className="lg:ml-72">

                    {/* ================= HERO ================= */}
                    <section
                        id="hero"
                        className="relative flex min-h-screen items-center overflow-hidden bg-gray-950"
                    >
                        <img
                            src="/assets/img/banner2.jpg"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-30"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/40" />

                        <div className="relative mx-auto w-full max-w-6xl px-6 py-32 sm:px-8 lg:px-12">
                            <div className="max-w-3xl">
                                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                                    Fullstack Developer
                                </p>

                                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                                    A.Muh.Akbar
                                    <br />
                                    Syawal.H, S.Kom
                                </h2>

                                <p className="mt-6 text-5xl leading-8 text-gray-300 sm:text-5xl">
                                    <span className="font-semibold text-white">
                                        {typedSkill}
                                        <span className="ml-1 inline-block animate-pulse">|</span>
                                    </span>
                                </p>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                                    Saya membangun website dan sistem informasi
                                    yang menggabungkan desain, logika
                                    pemrograman, serta kebutuhan bisnis.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a
                                        href="#portfolio"
                                        className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                                    >
                                        Lihat Portfolio
                                        <Icon
                                            name="arrow"
                                            className="h-4 w-4"
                                        />
                                    </a>

                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        Hubungi Saya
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= ABOUT ================= */}
                    <section
                        id="about"
                        className="scroll-mt-16 px-6 py-24 sm:px-8 lg:px-12"
                    >
                        <div className="mx-auto max-w-6xl">
                            <div className="max-w-3xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                                    About
                                </p>

                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                                    Tentang Saya
                                </h2>

                                <p className="mt-5 leading-8 text-gray-600">
                                    Nama saya{" "}
                                    <strong className="font-semibold text-gray-950">
                                        A. Muh. Akbar Syawal H, S.Kom
                                    </strong>
                                    , lulusan Sistem Informasi Universitas Gunadarma. Saat ini saya
                                    bekerja sebagai{" "}
                                    <strong className="font-semibold text-gray-950">
                                        Information Technology Development
                                    </strong>{" "}
                                    dengan pengalaman lebih dari 2 tahun dalam mengembangkan berbagai
                                    aplikasi berbasis web dan mobile.
                                </p>

                                <p className="mt-4 leading-8 text-gray-600">
                                    Saya merupakan{" "}
                                    <strong className="font-semibold text-gray-950">
                                        Full Stack Web Developer
                                    </strong>{" "}
                                    yang berfokus pada pengembangan backend, database, REST API, serta
                                    antarmuka pengguna yang responsif dan modern. Teknologi yang saya
                                    gunakan antara lain PHP, Laravel, React.js, Vue.js, HTML, CSS,
                                    Tailwind CSS, MySQL, Java, dan Python. Saya juga memiliki pengalaman
                                    dalam pengembangan aplikasi mobile menggunakan Flutter dan Dart.
                                </p>

                                <p className="mt-4 leading-8 text-gray-600">
                                    Berbagai solusi yang pernah saya kembangkan meliputi sistem keuangan,
                                    sistem manajemen data, sistem pembayaran, aplikasi CBT, Document
                                    Approval System, aplikasi bisnis, hingga AI Assistant berbasis
                                    Laravel dan React. Selain pekerjaan utama, saya juga membuka layanan
                                    freelance untuk pengembangan website dan aplikasi sesuai kebutuhan
                                    bisnis.
                                </p>

                                <p className="mt-4 leading-8 text-gray-600">
                                    Saat ini saya juga mengembangkan{" "}
                                    <strong className="font-semibold text-gray-950">
                                        Jastip Management
                                    </strong>
                                    , sebuah sistem yang membantu mengelola perjalanan, kurs modal,
                                    kategori jastip, customer, pembelian, invoice, pembayaran, biaya
                                    perjalanan, serta perhitungan profit dan kerugian.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
                                <div className="lg:col-span-4">
                                    <img
                                        src="/assets/img/myprofile.jpg"
                                        alt="Akbar Syawal"
                                        className="w-full rounded-3xl object-cover shadow-lg"
                                    />
                                </div>

                                <div className="lg:col-span-8">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
                                            <Icon
                                                name="code"
                                                className="h-5 w-5"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-gray-950">
                                                Web Development
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                FullStack Website Development
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                                        <Info label="Birthday" value="4 Januari 2002" />
                                        <Info
                                            label="Website"
                                            value="akbarsyawal.github.io/portfolio/"
                                        />
                                        <Info
                                            label="Phone"
                                            value="+62 895-4068-89664"
                                        />
                                        <Info
                                            label="City"
                                            value="Jakarta, Indonesia"
                                        />
                                        <Info label="Age" value="24" />
                                        <Info
                                            label="Degree"
                                            value="Intermediate"
                                        />
                                        <Info
                                            label="Email"
                                            value="a.muh.akbarsyawal@gmail.com"
                                        />
                                        <Info
                                            label="Freelance"
                                            value="Available"
                                        />
                                    </div>

                                    <p className="mt-8 border-l-2 border-gray-900 pl-5 text-sm italic leading-7 text-gray-600">
                                        Nama saya <strong>A. Muh. Akbar Syawal H, S.Kom</strong>, lulusan
                                        Sistem Informasi Universitas Gunadarma. Saat ini saya bekerja sebagai
                                        <strong> Information Technology Development</strong> dengan pengalaman
                                        lebih dari 2 tahun dalam mengembangkan berbagai aplikasi berbasis web
                                        dan mobile, mulai dari sistem keuangan, sistem manajemen data, sistem
                                        pembayaran, aplikasi CBT, Document Approval System, aplikasi bisnis,
                                        hingga aplikasi mobile.
                                        <br />
                                        <br />
                                        Saya memiliki keahlian sebagai{" "}
                                        <strong>Full Stack Web Developer</strong> menggunakan PHP, Laravel,
                                        React.js, Vue.js, HTML, CSS, Tailwind CSS, MySQL, Java, dan Python,
                                        dengan fokus pada pengembangan backend, perancangan database,
                                        integrasi API, serta pembuatan antarmuka pengguna yang responsif dan
                                        modern.
                                        <br />
                                        <br />
                                        Selain pengembangan web, saya juga memiliki pengalaman dalam{" "}
                                        <strong>Mobile Application Development</strong> menggunakan Flutter
                                        dan Dart, termasuk pengembangan aplikasi cross-platform, integrasi
                                        REST API, pengelolaan data backend, dan pembuatan antarmuka mobile
                                        yang responsif.
                                        <br />
                                        <br />
                                        Saya juga mengembangkan berbagai solusi teknologi seperti{" "}
                                        <strong>AI Assistant berbasis Laravel & React</strong> untuk membantu
                                        otomatisasi proses bisnis serta <strong>Document Approval System</strong>
                                        dengan alur persetujuan bertingkat, manajemen dokumen, dan monitoring
                                        status persetujuan.
                                        <br />
                                        <br />
                                        Selain pekerjaan utama, saya membuka layanan freelance untuk pembuatan
                                        website dan aplikasi, mulai dari website perusahaan, landing page,
                                        sistem keuangan, sistem pendataan produk, sistem pembayaran,
                                        dashboard administrasi, aplikasi mobile, hingga sistem yang
                                        disesuaikan dengan kebutuhan bisnis.
                                        <br />
                                        <br />
                                        Salah satu solusi yang saya kembangkan adalah{" "}
                                        <strong>Jastip Management</strong>, sebuah sistem untuk membantu
                                        mengelola perjalanan, kurs modal, kategori jastip, customer, pembelian,
                                        invoice, pembayaran, biaya perjalanan, serta perhitungan profit dan
                                        kerugian secara lebih terstruktur.
                                        <br />
                                        <br />
                                        Saya berdomisili di <strong>Jakarta Selatan</strong> dan memiliki
                                        semangat belajar tinggi untuk terus mengikuti perkembangan teknologi
                                        terbaru. Saya berkomitmen untuk menghasilkan solusi teknologi yang
                                        profesional, efektif, efisien, dan berorientasi pada kebutuhan
                                        pengguna maupun bisnis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= STATS ================= */}
                    {/* <section className="bg-gray-50 px-6 py-16 sm:px-8 lg:px-12">
                        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-gray-200 bg-white p-6"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
                                        <Icon
                                            name={stat.icon}
                                            className="h-5 w-5"
                                        />
                                    </div>

                                    <p className="mt-5 text-3xl font-bold text-gray-950">
                                        {stat.number}
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section> */}

                    {/* ================= SKILLS ================= */}
                    <section className="px-6 py-24 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-6xl">
                            <SectionTitle
                                eyebrow="Skills"
                                title="Kemampuan"
                                description="Teknologi dan tools yang saya gunakan dalam pengembangan website dan sistem informasi."
                            />

                            <div className="mt-12 grid gap-x-12 gap-y-7 md:grid-cols-2">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-gray-800">
                                                {skill.name}
                                            </span>

                                            <span className="text-xs font-semibold text-gray-400">
                                                {skill.value}%
                                            </span>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                                            <div
                                                className="h-full rounded-full bg-gray-900"
                                                style={{
                                                    width: `${skill.value}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= RESUME ================= */}
                    <section
                        id="resume"
                        className="scroll-mt-16 bg-gray-50 px-6 py-24 sm:px-8 lg:px-12"
                    >
                        <div className="mx-auto max-w-6xl">
                            <SectionTitle
                                eyebrow="Resume"
                                title="Pengalaman & Pendidikan"
                                description="Pengembang web dengan keahlian dalam menciptakan antarmuka pengguna yang mudah diakses, estetis, dan berkinerja tinggi."
                            />

                            <div className="mt-14 grid gap-14 lg:grid-cols-2">

                                {/* Left */}
                                <div>
                                    <ResumeTitle title="Data Pribadi" />

                                    <div className="border-l border-gray-300 pl-6">
                                        <ResumeItem
                                            title="A.Muh.Akbar Syawal.H"
                                            description="Website Development yang inovatif dan berorientasi pada pengguna, berpengalaman dalam mendesain dan mengembangkan website dari konsep awal hingga hasil akhir."
                                            items={[
                                                'Jakarta Selatan, Jakarta, Indonesia',
                                                '+62 895-4068-89664',
                                                'a.muh.akbarsyawal.h@gmail.com',
                                            ]}
                                        />
                                    </div>

                                    <ResumeTitle title="Pendidikan" />

                                    <div className="border-l border-gray-300 pl-6">
                                        {education.map((item) => (
                                            <TimelineItem
                                                key={item.title}
                                                title={item.title}
                                                year={item.year}
                                                description={item.description}
                                            />
                                        ))}
                                    </div>

                                    <ResumeTitle title="Keterampilan" />

                                    <div className="grid gap-2">
                                        {abilities.map((item) => (
                                            <SimpleListItem
                                                key={item}
                                                text={item}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Right */}
                                <div>
                                    <ResumeTitle title="Pengalaman Kerja" />

                                    <div className="border-l border-gray-300 pl-6">
                                        {experiences.map((item) => (
                                            <TimelineItem
                                                key={item.title}
                                                title={item.title}
                                                year={item.year}
                                                description={item.company}
                                                extra={item.description}
                                            />
                                        ))}
                                    </div>

                                    <ResumeTitle title="Skill" />

                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill.name}
                                                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>

                                    <ResumeTitle title="Hobby" />

                                    <div className="grid gap-2">
                                        {hobbies.map((item) => (
                                            <SimpleListItem
                                                key={item}
                                                text={item}
                                            />
                                        ))}
                                    </div>

                                    <ResumeTitle title="Prestasi" />

                                    <div className="space-y-2">
                                        {achievements.map((item) => (
                                            <div
                                                key={item}
                                                className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= PORTFOLIO ================= */}
                    <section
                        id="portfolio"
                        className="scroll-mt-16 px-6 py-24 sm:px-8 lg:px-12"
                    >
                        <div className="mx-auto max-w-6xl">
                            <SectionTitle
                                eyebrow="Portfolio"
                                title="Project yang Saya Kerjakan"
                                description="Beberapa project website dan sistem informasi yang pernah saya kerjakan."
                            />

                            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                                {/* JASTIP */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
                                    <div className="relative flex min-h-[260px] items-center overflow-hidden bg-gray-950 p-8">
                                        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                                        <div className="relative max-w-xl">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-950">
                                                <Icon
                                                    name="project"
                                                    className="h-7 w-7"
                                                />
                                            </div>

                                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                                Management System
                                            </p>

                                            <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                                                Jastip Management
                                            </h3>

                                            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400">
                                                Sistem manajemen jasa titip
                                                untuk mengelola trip, kurs
                                                modal, kategori jastip,
                                                customer, purchase, invoice,
                                                payment, dan laporan profit.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'Laravel',
                                                'React',
                                                'Inertia',
                                                'Tailwind CSS',
                                                'MySQL',
                                            ].map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-3">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setPdfOpen(true)
                                                }
                                                className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                                            >
                                                <Icon
                                                    name="pdf"
                                                    className="h-4 w-4"
                                                />
                                                Lihat Modul
                                            </button>

                                            <a
                                                href="/assets/modul_jastip_management.pdf"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                                            >
                                                Buka PDF
                                                <Icon
                                                    name="external"
                                                    className="h-4 w-4"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* PSYCHOTEST SYSTEM */}
                                <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                                    <div className="relative flex min-h-[260px] items-center overflow-hidden bg-slate-950 p-8">
                                        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
                                        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

                                        <div className="relative">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-950">
                                                <Icon
                                                    name="project"
                                                    className="h-7 w-7"
                                                />
                                            </div>

                                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                                                Recruitment & Assessment System
                                            </p>

                                            <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                                                Psychotest System
                                            </h3>

                                            <p className="mt-4 max-w-lg text-sm leading-7 text-indigo-100/70">
                                                Sistem recruitment dan psychotest untuk mengelola
                                                recruitment, applicant, CFIT, DISC, timer pengerjaan,
                                                penilaian otomatis, hasil psychotest, serta monitoring
                                                progress peserta.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'Laravel',
                                                'React',
                                                'Inertia',
                                                'Tailwind CSS',
                                                'MySQL',
                                                'CFIT',
                                                'DISC',
                                            ].map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6">
                                            <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-500">
                                                <Icon
                                                    name="code"
                                                    className="h-4 w-4"
                                                />
                                                Recruitment & Psychotest Platform
                                            </span>
                                        </div>
                                    </div>
                                </div>                                

                                {/* UMIBA */}
                                {/* <PortfolioCard
                                    image="/assets/img/portfolio/LOGO UMIBA_ (1).png"
                                    category="Kampus"
                                    title="Universitas Mitra Bangsa"
                                    description="Website informasi kuliah karyawan."
                                    url="https://umiba.online/"
                                /> */}

                                {/* UISB */}
                                {/* <PortfolioCard
                                    image="https://uisb.info/images/logo/logo1.png"
                                    category="Kampus"
                                    title="Universitas Islam Sumatera Barat"
                                    description="Website informasi kuliah karyawan."
                                    url="https://uisb.info/"
                                /> */}

                                {/* Project placeholder */}
                                <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-400 shadow-sm">
                                            <Icon
                                                name="code"
                                                className="h-5 w-5"
                                            />
                                        </div>

                                        <h3 className="mt-4 font-semibold text-gray-800">
                                            Project Berikutnya
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Akan ditambahkan ke portfolio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= CONTACT ================= */}
                    <section
                        id="contact"
                        className="scroll-mt-16 bg-gray-950 px-6 py-24 text-white sm:px-8 lg:px-12"
                    >
                        <div className="mx-auto max-w-6xl">
                            <div className="max-w-2xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                                    Contact
                                </p>

                                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Mari Berkolaborasi
                                </h2>

                                <p className="mt-5 leading-8 text-gray-400">
                                    Saya selalu terbuka untuk diskusi, peluang
                                    baru, atau kolaborasi kreatif. Hubungi
                                    saya, dan mari kita ciptakan sesuatu yang
                                    hebat bersama.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-6 lg:grid-cols-3">
                                <ContactCard
                                    icon="location"
                                    title="Address"
                                    value="Jakarta Selatan, Jakarta, Indonesia"
                                />

                                <ContactCard
                                    icon="phone"
                                    title="Call Us"
                                    value="+62 895-4068-89664"
                                    href="https://wa.me/62895406889664"
                                />

                                <ContactCard
                                    icon="mail"
                                    title="Email Us"
                                    value="a.muh.akbarsyawal.h@gmail.com"
                                    href="mailto:a.muh.akbarsyawal.h@gmail.com"
                                />
                            </div>

                            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.8629200061471!2d106.80442795685002!3d-6.289116934195887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ef8ca92c99%3A0x737416d89a5533da!2sJl.%20Cilandak%20Tengah%20II%20No.17%2C%20RT.1%2FRW.1%2C%20Cilandak%20Bar.%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012430!5e0!3m2!1sid!2sid!4v1736917187692!5m2!1sid!2sid"
                                    className="h-[350px] w-full border-0"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ================= FOOTER ================= */}
                    <footer className="border-t border-white/10 bg-gray-950 px-6 py-8 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} A.Muh.Akbar Syawal.H.
                        All rights reserved.
                    </footer>
                </main>

                {/* ================= PDF MODAL ================= */}
                {pdfOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-6">
                        <div className="flex h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
                            <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-6">
                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Modul Jastip Management
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        Dokumentasi dan modul sistem
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <a
                                        href="/assets/modul_jastip_management.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hidden rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:inline-flex"
                                    >
                                        Buka PDF
                                    </a>

                                    <button
                                        type="button"
                                        onClick={() => setPdfOpen(false)}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-200"
                                    >
                                        <Icon
                                            name="close"
                                            className="h-5 w-5"
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="min-h-0 flex-1 bg-gray-100">
                                <iframe
                                    src="/assets/modul_jastip_management.pdf"
                                    title="Modul Jastip Management"
                                    className="h-full w-full border-0"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

/* =========================================================
   COMPONENTS
========================================================= */

function Info({ label, value }) {
    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {label}
            </p>

            <p className="mt-1 break-words text-sm font-medium text-gray-800">
                {value}
            </p>
        </div>
    );
}

function SectionTitle({ eyebrow, title, description }) {
    return (
        <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 leading-8 text-gray-600">
                    {description}
                </p>
            )}
        </div>
    );
}

function ResumeTitle({ title }) {
    return (
        <h3 className="mb-6 mt-10 text-xl font-bold text-gray-950 first:mt-0">
            {title}
        </h3>
    );
}

function ResumeItem({ title, description, items = [] }) {
    return (
        <div className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white bg-gray-950 ring-1 ring-gray-300" />

            <h4 className="text-lg font-bold text-gray-950">
                {title}
            </h4>

            {description && (
                <p className="mt-3 text-sm italic leading-7 text-gray-600">
                    {description}
                </p>
            )}

            {items.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {items.map((item) => (
                        <li key={item} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function TimelineItem({
    title,
    year,
    description,
    extra,
}) {
    return (
        <div className="relative pb-8 last:pb-0">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-gray-50 bg-gray-950 ring-1 ring-gray-300" />

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {year}
            </p>

            <h4 className="mt-2 text-lg font-bold text-gray-950">
                {title}
            </h4>

            {description && (
                <p className="mt-2 text-sm text-gray-600">
                    {description}
                </p>
            )}

            {extra && (
                <p className="mt-1 text-sm text-gray-500">
                    {extra}
                </p>
            )}
        </div>
    );
}

function SimpleListItem({ text }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
            {text}
        </div>
    );
}

function PortfolioCard({
    image,
    category,
    title,
    description,
    url,
}) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-52 items-center justify-center bg-gray-50 p-8">
                <img
                    src={image}
                    alt={title}
                    className="max-h-32 max-w-[75%] object-contain transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-gray-950">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    {description}
                </p>

                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
                >
                    Lihat Website
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

function ContactCard({
    icon,
    title,
    value,
    href,
}) {
    const content = (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gray-950">
                <Icon
                    name={icon}
                    className="h-5 w-5"
                />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {title}
            </p>

            <p className="mt-2 break-words text-sm leading-6 text-gray-300">
                {value}
            </p>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block">
                {content}
            </a>
        );
    }

    return content;
}

/*
|--------------------------------------------------------------------------
| Icon untuk ContactCard
|--------------------------------------------------------------------------
| Karena ContactCard didefinisikan di luar Welcome(), Icon perlu tersedia
| di scope module. Gunakan helper kecil berikut.
*/
function Icon({ name, className = 'h-5 w-5' }) {
    const icons = {
        location: (
            <>
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
            </>
        ),

        phone: (
            <>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
            </>
        ),

        mail: (
            <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </>
        ),
    };

    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {icons[name]}
        </svg>
    );
}