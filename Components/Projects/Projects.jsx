import Project from "./Project";
import Stars from "../Stars";
import styles from "@/styles/projects.module.css";
import projectsData from "@/app/data/ProjectsData";

const Projects = () => {
  return (
    <div>
      <Stars />
      <div className={styles.projects}>
        <div className={styles.projectsTop}>
          <h2>
            My recent <b className={styles.purple}>work</b>
          </h2>
        </div>
        <div className={styles.projectsGrid}>
          {projectsData.slice().reverse().map((project) => (
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
      </div>
    </div>
  );
};

export default Projects;
