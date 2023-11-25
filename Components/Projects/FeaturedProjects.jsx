"use client"
import Project from "./Project";
import Stars from "../Stars";
import styles from "@/styles/projects.module.css";
import projectsData from "@/app/data/ProjectsData";
import { FaArrowRight } from "react-icons/fa";

const FeaturedProjects = () => {
  const viewAllProjects = () => {
    window.location.href = '/projects';
  }
  const styles2 = {
    bgPurple: {
      display: "flex",
      justifyContent: "center",
      // marginLeft: "0.5rem",
      padding: "0.5rem",
      backgroundColor: "red",
      borderRadius: "10px",
      color: "white",
    },
  };
  return (
    <div>
      {/* <Stars /> */}
      <div className={styles.projects}>
        <div className={styles.projectsTop}>
          <h2>
            Featured <b className={styles.purple}>Projects</b>
          </h2>
        </div>
        <div className={styles.projectsGrid}>
          {projectsData
            .filter((project) => project.isFeatured) // Filter by isFeatured
            .slice()
            .reverse()
            .map((project) => (
              <Project
                key={project.id} // Added key for React's list rendering
                name={project.title}
                description={project.description}
                ImageSrc={project.ImageSrc}
                id={project.id}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                technologies={project.sections[1].content}
              />
            ))}
        </div>
        <div className={styles.projectsTop}>
          <br />
          <h2>
            View all <b className={styles.purple}> Projects</b>
            <b style={styles2.bgPurple} onClick={viewAllProjects}>
              <FaArrowRight color="white"></FaArrowRight>
            </b>
          </h2>
        </div>

      </div>

    </div>
  );
};

export default FeaturedProjects;
