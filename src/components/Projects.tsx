import React from 'react';
import { motion } from 'framer-motion';
import {
    FaExternalLinkAlt,
    FaChartLine,
    FaBroom,
    FaHome,
    FaWineGlassAlt,
    FaShieldAlt,
    FaShoppingBag,
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
        title: "AutoHire AI",
        tech: "Flutter, Dart, Firebase, REST APIs",
        description: "AI-powered job matching app that analyzes resumes, scores resume-job fit (%), aggregates listings from multiple platforms, and delivers an end-to-end workflow with 5 modules: Jobs, Resume, Tracker, Dashboard, and Settings.",
        tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Git & GitHub"],
        link: "https://github.com/dishu-13/AutoHire-AI.git",
        gradient: "from-violet-500 to-indigo-600",
        Icon: FaRobot,
    },
    {
        title: "Retail Sales Data",
        tech: "Python, Pandas, Data Analysis",
        description: "Analyzing retail sales data to identify purchasing trends, seasonal patterns, and performance metrics that assist businesses in optimizing inventory and increasing sales efficiency.",
        tags: ["Python", "Pandas", "Data Analysis"],
        link: "https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%201%20(retail_sales_dataset%20)",
        gradient: "from-cyan-400 to-blue-500",
        Icon: FaChartLine,
    },
    {
        title: "Data Cleaning",
        tech: "Python, Data Preprocessing, ETL",
        description: "Clean and preprocess raw data for accurate analysis. Handling missing values, removing duplicates, correcting data types, and standardizing inconsistent entries.",
        tags: ["Python", "Data Preprocessing", "ETL"],
        link: "https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%202%20(%20Data%20cleaning%20)",
        gradient: "from-emerald-400 to-teal-600",
        Icon: FaBroom,
    },
    {
        title: "House Price Prediction",
        tech: "Python, Scikit-learn, Machine Learning",
        description: "Machine learning model to estimate house prices based on key features. Includes data cleaning, feature selection, model training using Scikit-learn and evaluation.",
        tags: ["Python", "Scikit-learn", "Machine Learning"],
        link: "https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%203%20(%20%20House%20%20Prediction%20)",
        gradient: "from-amber-400 to-orange-600",
        Icon: FaHome,
    },
    {
        title: "Wine Quality Prediction",
        tech: "Python, NumPy, Matplotlib",
        description: "Predict wine quality based on chemical properties using machine learning. Data preprocessing, feature selection, and model training with visualization.",
        tags: ["Python", "NumPy", "Matplotlib"],
        link: "https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%204%20(%20Wine%20Quality%20Prediction%20)",
        gradient: "from-fuchsia-500 to-pink-500",
        Icon: FaWineGlassAlt,
    },
    {
        title: "Fraud Detection",
        tech: "Python, Random Forest, Machine Learning",
        description: "Designed a machine learning model to spot fraudulent financial transactions. Tackled data challenges like imbalanced classes, leveraged Random Forest for high accuracy.",
        tags: ["Python", "Random Forest", "Machine Learning"],
        link: "https://github.com/dishu-13/OIBSIP",
        gradient: "from-rose-500 to-red-600",
        Icon: FaShieldAlt,
    },
    {
        title: "E-Commerce Sales Dashboard",
        tech: "Power BI, DAX, ETL",
        description: "Interactive Power BI dashboard analyzing e-commerce sales data with dynamic visualizations, KPIs, and filters to track revenue, profit, quantity, and customer trends across regions and categories.",
        tags: ["Power BI", "Data Visualization", "DAX", "ETL"],
        link: "https://github.com/dishu-13/E-Commerce-Sales-PowerBI-Dashboard",
        gradient: "from-sky-400 to-blue-600",
        Icon: FaShoppingBag,
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-3">
                        My Projects
                    </h2>
                    <p className="text-muted-foreground font-light">
                        Explore my data analysis and machine learning projects that demonstrate my ability to extract insights and build predictive models.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
