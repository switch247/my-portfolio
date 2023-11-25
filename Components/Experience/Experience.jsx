import React from 'react'
import Timeline from './TimeLine'
import styles from "@/styles/projects.module.css";
const timelineEvents = [
    {
        date: "2021",
        title: "Yeneta Code Internship",
        description: "Developed an e-learning platform, contributing to both front-end and back-end development using modern web technologies."
    },
    {
        date: "2022 – 2023",
        title: "Poerbet PLC (Addis Ababa, Ethiopia) Software Developer",
        description: "Worked on engaging casino games using JavaScript frameworks, enhancing performance and optimizing user experience. Collaborated with cross-functional teams to align game development with user preferences and conducted user research to drive improvements through A/B testing."
    },
    {
        date: "2023",
        title: "Lepton Labs, Software Developer (Full Stack & Desktop)",
        description: "Built web apps and APIs using NestJS, Next.js, Tauri, and Rust. Implemented a microservices architecture for real-time analytics and developed cross-platform desktop apps with Tauri and Rust."
    },
    // {
    //     date: "2024",
    //     title: "HeartsCare, Software Developer",
    //     description: "Automated ambulance dispatch and tracking systems, developed a mobile app for real-time tracking, and engineered a data analytics platform to monitor performance metrics. Coordinated with researchers on strategic initiatives."
    // },
    // {
    //     date: "2024",
    //     title: "Eskalate, Golang Backend Developer",
    //     description: "Developed backend services using Go, focusing on building scalable APIs and improving application performance. Collaborated with front-end developers to ensure seamless integration and delivery."
    // }
];


function Experience() {
    return (
        <div className={styles.projects}>
            <div className={styles.projectsTop}>
                <h2>
                    Work <b className={styles.purple}>Experience</b>
                </h2>
            </div>
            <Timeline events={timelineEvents} />
        </div>

    )
}

export default Experience