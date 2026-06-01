import React from 'react';
import { motion } from 'framer-motion';
import {
    FaExternalLinkAlt,
    FaShoppingCart,
    FaChartLine,
    FaCloudSun,
    FaCogs,
    FaMobileAlt,
    FaRobot,
} from 'react-icons/fa';

interface Project {
    title: string;
    tech: string;
    description: string;
    tags: string[];
    link: string;
    gradient: string;
    Icon: React.ComponentType<{ className?: string }>;
}

const projects: Project[] = [
    {
        title: "ONECART - AI E-Commerce",
        tech: "MERN Stack, AI, Redux, JWT",
        description: "Full-stack AI-powered e-commerce platform with personalized recommendations. Features secure payments via Razorpay, Google Auth, and a comprehensive Admin Dashboard.",
        tags: ["MERN", "AI Integration", "E-commerce", "Redux", "JWT"],
        link: "https://github.com/KISHOR403/AI-Powered-E-Commerce-Website-built-using-MERN-Stack",
        gradient: "from-violet-500 to-indigo-600",
        Icon: FaShoppingCart,
    },
    {
        title: "Weather App",
        tech: "HTML, CSS, JavaScript, Weather API",
        description: "Real-time weather dashboard fetching live data based on user location or input. Features dynamic UI updates and detailed weather conditions.",
        tags: ["JavaScript", "API Integration", "Web Dev"],
        link: "https://github.com/KISHOR403/Weather-App",
        gradient: "from-sky-400 to-blue-600",
        Icon: FaCloudSun,
    },
    {
        title: "API Automation Testing",
        tech: "Postman, Rest Assured",
        description: "Comprehensive API automation suite for REST endpoints. Dynamic environment variables, full CRUD workflows, and Newman reporting for CI/CD pipelines.",
        tags: ["API Testing", "Automation", "CI/CD"],
        link: "#",
        gradient: "from-fuchsia-500 to-pink-500",
        Icon: FaCogs,
    },
    {
        title: "Mobile App Testing",
        tech: "Appium, Java, TestNG",
        description: "End-to-end automation of an Android Weather Forecast app. Validated GPS-based forecasting and structured test logic using the Page Object Model (POM).",
        tags: ["Mobile Testing", "Appium", "Java"],
        link: "#",
        gradient: "from-emerald-400 to-teal-600",
        Icon: FaMobileAlt,
    },
    {
        title: "Web Automation Framework",
        tech: "Selenium WebDriver, Java, TestNG",
        description: "Scalable web automation framework using Selenium. Covers e-commerce flows like authentication and cart operations with data-driven TestNG suites.",
        tags: ["Web Testing", "Selenium", "Framework"],
        link: "https://github.com/KISHOR403/Web-Automation-Framework-Selenium-WebDriver-Java-TestNG-POM",
        gradient: "from-amber-400 to-orange-600",
        Icon: FaRobot,
    },
    {
        title: "Retail Sales Analytics",
        tech: "Python, Pandas, Data Analysis",
        description: "Analyzing retail sales data to identify purchasing trends, seasonal patterns, and performance metrics that help businesses optimize inventory and increase sales.",
        tags: ["Python", "Pandas", "Data Analysis"],
        link: "#",
        gradient: "from-cyan-400 to-blue-500",
        Icon: FaChartLine,
    },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const { Icon } = project;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="section-frost glass-shine group relative flex flex-col rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6 md:p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.25)] hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
        >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg mb-5`}>
                <Icon className="text-white text-2xl" />
            </div>

            <h3 className="text-xl md:text-2xl font-normal text-dark dark:text-white mb-3 tracking-tight">
                {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-light mb-5 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-[11px] font-light tracking-wide text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-accent text-sm font-normal hover:gap-3 transition-all"
            >
                View on GitHub <FaExternalLinkAlt size={11} />
            </a>

            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="relative z-10 py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
                    <div className="relative inline-block p-[3px] rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#ffffff_100%)]"></div>
                        <div className="relative z-10 bg-white dark:bg-gray-800 px-8 py-2 rounded-full shadow-sm text-dark dark:text-white font-mono font-bold text-xl md:text-2xl">
                            Featured Projects
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-mono text-xs max-w-md px-4">
                        A selection of projects across development, automation, and data analytics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
